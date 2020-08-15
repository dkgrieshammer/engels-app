import React from 'react';
import css from './IconBtn.module.scss'

export const IconButton = ({ children, callback }) => (
  <div className={css.btn} onClick={callback} >
    {children}
  </div>
)
