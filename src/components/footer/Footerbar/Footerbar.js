import css from './Footerbar.module.scss'
import React from 'react';

export default function Footerbar({children}) {
    return (
        <footer className={css.footer}>
            <div className={css.center}>
                <span className={css.text}>© 2020  | Kontakt |  Impressum</span>
            </div>
        </footer>
    )
}