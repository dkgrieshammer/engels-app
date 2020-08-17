import React from 'react';
import styles from './Metafooter.module.scss'

export const Metafooter = ({children}) => (
  <div className={styles.container}>
      {children}
  </div>
)