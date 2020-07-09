import React from 'react'
import {Header} from './../components/header/Header'
import { Nav, NavItem } from './../components/header/Nav'
import { SearchIcon } from '../components/search/SearchIcon'


export default {
  title: 'Header',
  component: Header
}

export const Default = () => {
  return (
    <Header>
      <Nav>
        <NavItem href="" active>Start</NavItem>
        <NavItem href="">Briefe</NavItem>
        <NavItem href="">Korrespondenzen</NavItem>
        <NavItem href="">Register</NavItem>
        <NavItem href="">Historischer Kontext</NavItem>
        <NavItem href="">Edition</NavItem>
        <SearchIcon />
      </Nav>
    </Header>
  )
}