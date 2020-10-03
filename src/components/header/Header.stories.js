import React from 'react'
import {Header} from 'Components/header/Header'
import { Nav, NavItem, DropDown } from 'Components/header/Nav'
import { SearchNav } from 'Components/search/SearchNav'


export default {
  title: 'Header',
  component: Header
}

export const Default = () => {
  return (
    <Header>
      <Nav>
        <NavItem to="/" active>Start</NavItem>
        <NavItem to="/">Briefe</NavItem>
        <NavItem to="/">Korrespondenzen</NavItem>
        <DropDown
          title="Register"
        >
          <NavItem to="/">Register 1</NavItem>
          <NavItem to="/">Register 2</NavItem>
          <NavItem to="/">Register 3</NavItem>
        </DropDown>
        <NavItem to="/">Historischer Kontext</NavItem>
        <NavItem to="/">Edition</NavItem>
        <SearchNav />
      </Nav>
    </Header>
  )
}