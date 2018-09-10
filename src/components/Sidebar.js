import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SidebarGridChild = styled.div`
  display: grid;
  grid-area: sidebar;
  padding: 0.5rem;
  text-align: center;
  overflow-y: scroll;
  grid-template-rows: auto 1fr;
  grid-template-columns: auto;
  grid-template-areas: 'sidebar-header' 'sidebar-content';
`

export default class Sidebar extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  }

  render() {
    const { children } = this.props
    return <SidebarGridChild>{children()}</SidebarGridChild>
  }
}
