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
        <NavItem href="" active>Start</NavItem>
        <NavItem href="">Briefe</NavItem>
        <NavItem href="">Korrespondenzen</NavItem>
        <DropDown
          title="Register"
        >
          <NavItem href="">Register 1</NavItem>
          <NavItem href="">Register 2</NavItem>
          <NavItem href="">Register 3</NavItem>
        </DropDown>
        <NavItem href="">Historischer Kontext</NavItem>
        <NavItem href="">Edition</NavItem>
        <SearchNav />
      </Nav>
    </Header>
  )
}