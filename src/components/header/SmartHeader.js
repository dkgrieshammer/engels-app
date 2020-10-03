import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Header } from "./Header";
import { Nav, NavItem } from './Nav';


export function SmartHeader({callback}) {

  const siteUrl = 'https://chost20.zim.uni-wuppertal.de'
  const [pages, setPages] = useState([])

  function getLinkFromUrl(url) {
    const link = url.split(siteUrl)[1] ? url.split(siteUrl)[1].slice(0, -1) : url
    return link
  }

  useEffect(() => {
    fetch('https://chost20.zim.uni-wuppertal.de/wordpress/wp-json/wp/v2/menu/')
      .then((response) => response.json())
      .then((responseJson) => {
        const pageLinks = Object.values(responseJson)
        const sortedLinks = pageLinks.sort((a, b) => {
          if (a.menu_order > b.menu_order) return 1
          if (a.menu_order < b.menu_order) return -1
          return 0
        })
        setPages(sortedLinks)
        console.log("Pages", sortedLinks)
      })
      .catch((error) => {
        console.log("Fetch pages error is:")
        console.error(error);
      });
  }, [])


  return (
    <Header>
      <Nav>
        {pages.map((pageLink, i) => {
          const pageTitle = pageLink.title.rendered
          const pageUrl = getLinkFromUrl(pageLink.link)
          console.log("CB pageUrl ", pageUrl)
          // return <NavItem key={i} href={pageLink.link} >{pageTitle}</NavItem>
          return <NavItem key={i} to={pageUrl}>{pageTitle}</NavItem>
        })
        }
      </Nav>
    </Header>
  )
}

/**
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
*/

/*
return fetch('http://wordpress.engels-archiv.de/wp-json/wp/v2/menu')
            .then((response) => response.json())
            .then((responseJson) => {
                // Update state here
                // const pageLinks = Object.values(responseJson)
                const pageLinks = Object.values(responseJson)
                const sortedLinks = pageLinks.sort((a, b) => {
                    if(a.menu_order > b.menu_order) return 1
                    if(a.menu_order < b.menu_order) return -1
                    return 0
                })
                this.setState({pages : sortedLinks})
            })
            .catch((error) => {
                console.error(error);
            });
*/