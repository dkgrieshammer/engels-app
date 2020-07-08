import React from 'react';
import css from './Nav.module.scss'



// const Navigation = styled.div`

// `

// const NavLink = styled.a`
// font-family: Roboto;
// font-style: normal;
// font-weight: bold;
// font-size: 16px;
// line-height: 19px;

// text-align: center;
// text-transform: capitalize;
// `

export function Nav({children}) {

  return(
    <div className={css.nav}>
    <div className={css.link}>Link</div>
    <div className={css.link}>Link</div>
    <div className={css.link}>Link</div>
    <div className={css.link}>Link</div>
    </div>
  )
}