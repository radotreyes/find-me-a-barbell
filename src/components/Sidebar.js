import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SidebarGridChild = styled.div`
  grid-area: sidebar;
  padding: 0.5rem;
  text-align: center;
  overflow-y: scroll;
`

export default class Sidebar extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  }

  render() {
    const { children } = this.props
    return (
      <SidebarGridChild>
        <h2>Locations</h2>
        {children()}
      </SidebarGridChild>
    )
  }
}
