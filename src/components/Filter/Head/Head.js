import React from 'react';
import { IconButton } from 'components/Buttons/IconBtn';
import { Close } from 'components/Icons/Icons';
import styles from './Head.module.scss'

export const Head = ({children, onClose}) => (
  <div className={styles.head} >
    <div className={styles.title}>{children}</div>
    <IconButton callback={onClose} > <Close /> </IconButton>
  </div>
)