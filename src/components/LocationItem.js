import React from 'react'
import PropTypes from 'prop-types'

const LocationItem = ({ details, position }) => (
  <div>
    {details.formatted_address}
    {position}
  </div>
)

LocationItem.propTypes = {
  details: PropTypes.object.isRequired,
  position: PropTypes.object.isRequired,
}

export default LocationItem
