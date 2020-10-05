import React from 'react'
import {Header} from 'components/Header/Header'
import { Nav, NavItem, DropDown } from 'components/Header/Nav'
import { SearchNav } from 'components/Search/SearchNav'


export default {
  title: 'Elements/Header',
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