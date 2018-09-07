/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */

import React, { Fragment } from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import { compose, withProps, lifecycle } from 'recompose'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'
import { StandaloneSearchBox } from 'react-google-maps/lib/components/places/StandaloneSearchBox'

const Map = compose(
  withProps({
    loadingElement: <div data-name="loading" style={{ height: `100%` }} />,
    containerElement: <div data-name="container" style={{ gridArea: `map` }} />,
    mapElement: <div data-name="map" style={{ height: `100%` }} />,
  }),
  lifecycle({
    componentWillMount() {
      const refs = {}

      this.setState({
        bounds: null,
        center: {
          lat: 41.9,
          lng: -87.624,
        },
        markers: [],
        onMapMounted: (ref) => {
          refs.map = ref
        },
        onBoundsChanged: _.debounce(
          () => {
            this.setState({
              bounds: refs.map.getBounds(),
              center: refs.map.getCenter(),
            })
          },
          100,
          { maxWait: 500 },
        ),
        onSearchBoxMounted: (ref) => {
          refs.searchBox = ref
          const { onSearchBoxMounted, onPlacesChanged } = this.state
          const { elevateSearchBox } = this.props
          elevateSearchBox(
            <StandaloneSearchBox
              ref={onSearchBoxMounted}
              bounds={null}
              onPlacesChanged={onPlacesChanged}
              style={{ gridArea: `sidebar` }}
            >
              <input
                type="text"
                placeholder="Search for a location"
                style={{
                  boxSizing: `border-box`,
                  border: `1px solid transparent`,
                  width: `240px`,
                  height: `32px`,
                  marginTop: `27px`,
                  padding: `0 12px`,
                  borderRadius: `3px`,
                  boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                  fontSize: `14px`,
                  outline: `none`,
                  textOverflow: `ellipses`,
                }}
              />
            </StandaloneSearchBox>,
          )
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces()
          const bounds = new google.maps.LatLngBounds()

          places.forEach((place) => {
            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport)
            } else {
              bounds.extend(place.geometry.location)
            }
          })

          this.setState((prevState) => {
            /* renders a marker with props */
            const { handleLocationMarked } = this.props
            const nextMarkers = places.map(place => ({
              details: place,
              position: place.geometry.location,
              onClick() {
                // TODO: show a popover with place details
                const { details, position } = this
                handleLocationMarked({ details, position })
              },
            }))

            const nextCenter = _.get(
              nextMarkers,
              `0.position`,
              this.state.center,
            )

            const { onSearchBoxMounted, onPlacesChanged } = this.state
            const { elevateSearchBox } = this.props
            elevateSearchBox(
              <StandaloneSearchBox
                ref={onSearchBoxMounted}
                bounds={bounds}
                onPlacesChanged={onPlacesChanged}
                style={{ gridArea: `sidebar` }}
              >
                <input
                  type="text"
                  placeholder="Search for a location"
                  style={{
                    boxSizing: `border-box`,
                    border: `1px solid transparent`,
                    width: `240px`,
                    height: `32px`,
                    marginTop: `27px`,
                    padding: `0 12px`,
                    borderRadius: `3px`,
                    boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                    fontSize: `14px`,
                    outline: `none`,
                    textOverflow: `ellipses`,
                  }}
                />
              </StandaloneSearchBox>,
            )

            return {
              center: nextCenter,
              markers: [...prevState.markers, ...nextMarkers],
            }
          })
          // refs.map.fitBounds(bounds);
        },
      })
    },
    componentDidMount() {
      if (`geolocation` in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.setState({
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
          })
        })
      }
    },
  }),
  withScriptjs,
  withGoogleMap,
)(props => (
  <Fragment>
    <GoogleMap
      ref={props.onMapMounted}
      defaultZoom={15}
      center={props.center}
      onBoundsChanged={props.onBoundsChanged}
    >
      {props.markers.map((marker, index) => (
        <Marker
          key={index}
          position={marker.position}
          onClick={() => {
            marker.onClick()
          }}
        />
      ))}
    </GoogleMap>
    <StandaloneSearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      onPlacesChanged={props.onPlacesChanged}
      style={{ gridArea: `sidebar` }}
    >
      <span style={{ display: `hidden` }} />
    </StandaloneSearchBox>
  </Fragment>
))

export default Map
