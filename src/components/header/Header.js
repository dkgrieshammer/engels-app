import React from 'react'
import styles from './Header.module.scss'
import { GridContainer } from './../Container/Container'


export function Header({children}) {

    return (
        <GridContainer>
            <div className={styles.header + ' test'}>
                <a href='/' className={styles.title}>Industriegeschichte Privat</a>
                {children}
            </div>
        </GridContainer>
    )
}