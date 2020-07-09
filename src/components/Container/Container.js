import React from 'react';
import css from './Container.module.scss'
 
export function GridContainer({children}) {
  return (
    <div className={css.wrapper}>
      {children}
    </div>
  )
}