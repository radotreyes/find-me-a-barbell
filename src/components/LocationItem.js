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
  border-left: 3px solid gray;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0.5rem;
`
const Detail = styled.div`
  display: block;
  font-size: 0.8rem;
  color: #444;
  flex-basis: 100%;
`

const LocationItem = ({ location: { details, position } }) => {
  const { name, formatted_address, formatted_phone_number } = details

  console.log(details)
  return (
    <LocationItemContainer>
      <LocationItemHeader>{name}</LocationItemHeader>
      <Detail>{formatted_address}</Detail>
      <Detail>{formatted_phone_number}</Detail>
    </LocationItemContainer>
  )
}

LocationItem.propTypes = {
  location: PropTypes.object.isRequired,
}

export default LocationItem
