import React from 'react';
import css from './Nav.module.scss'


export const NavItem = (props) => <a href={props.href} className={props.active ? css.link + " " + css.active : css.link}>{props.children}</a>

export function Nav({children}) {

  return(
    <div className={css.nav}>
      {children}
    </div>
  )
}