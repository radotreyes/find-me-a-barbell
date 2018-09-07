import React from 'react'
import PropTypes from 'prop-types'

const LocationList = ({ children }) => <div>{children()}</div>

LocationList.propTypes = {
  children: PropTypes.func.isRequired,
}

export default LocationList
