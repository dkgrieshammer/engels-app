import React from 'react';
import { Link } from 'react-router-dom';
import css from './Nav.module.scss'

export const NavItem = (props) => <li><Link className={props.active ? css.link + " " + css.active : css.link} to={props.to}>{props.children}</Link></li>

export function Nav({ children }) {

  return (
    <ul className={css.nav}>
      {children}
    </ul>
  )
}

export const DropDown = ({ title, children }) => (
  <li className={css.dropdown}>
    <div className={css.link}>{title}</div>
    <ul>
      {children}
    </ul>
  </li>
)