import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import LocationItem from './LocationItem'

const LocationListContainer = styled.div`
  display: flex;
  flex-flow: column;
  grid-area: sidebar-content;
  justify-content: center;
  align-items: flex-start;
  align-self: start;
  overflow: hidden;
`

const LocationList = ({ locations }) => (
  <LocationListContainer>
    {locations.map(location => (
      <LocationItem location={location} />
    ))}
  </LocationListContainer>
)

LocationList.propTypes = {
  locations: PropTypes.array.isRequired,
}

export default LocationList
