import React from 'react'
import css from './Header.module.scss'
import { Nav } from './Nav'


export function Header() {

    return (
        <div className={css.header + ' test'}>
            <div className={css.title}>Industriegeschichte Privat</div>
            <Nav />
        </div>
    )
}