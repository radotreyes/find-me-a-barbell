/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const LocationItemHeader = styled.h1`
  display: block;
  font-style: bold;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  flex-basis: 100%;
`
const LocationItemContainer = styled.div`
  display: flex;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem 0.5rem;
  margin-bottom: 1rem;
`
const Detail = styled.div`
  display: block;
  font-size: 0.8rem;
  color: #444;
  flex-basis: 100%;
`

const ControlsHeader = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  padding-top: 1rem;
`
const Controls = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: center;
`
const ControlButton = styled.div`
  display: flex;
  align-items: center;
  background-color: powderblue;
  border-radius: 15px 0 0 15px;
  border: 1px 0 0 1px solid #ccc;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.25);
  font-size: 0.75rem;
  justify-content: center;
  margin: 0 0 0 0.25rem;
  padding: 0.25rem;
`
const Votes = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 0 15px 15px 0;
  border: 0 1px 1px 0 solid #ccc;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  font-size: 0.75rem;
  justify-content: center;
  margin-right: 0.25rem;
  padding: 0.25rem;
`

const LocationItem = ({ location: { details, position } }) => {
  const { name, formatted_address, formatted_phone_number } = details
  return (
    <LocationItemContainer>
      <LocationItemHeader>{name}</LocationItemHeader>
      <Detail>{formatted_address}</Detail>
      <Detail>{formatted_phone_number}</Detail>
      <ControlsHeader>Amenities</ControlsHeader>
      <Controls>
        <ControlButton title="Click for more details">Platforms</ControlButton>
        <Votes>+4</Votes>
        <ControlButton title="Click for more details">Bumpers</ControlButton>
        <Votes>+4</Votes>
        <ControlButton title="Click for more details">
          Training Bars
        </ControlButton>
        <Votes>+4</Votes>
        <ControlButton title="Click for more details">
          Noise Level
        </ControlButton>
        <Votes>+4</Votes>
      </Controls>
    </LocationItemContainer>
  )
}

LocationItem.propTypes = {
  location: PropTypes.object.isRequired,
}

export default LocationItem
