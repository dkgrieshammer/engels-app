import React from 'react';
import styles from './Slider.module.scss'

export const Slider = () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <label for="start">Start: </label>
        <input id='start' type="range" min="0" max="11" defaultValue="5" className={styles.selector} />
        <label for="end">Ende: </label>
        <input id='end' type="range" min="0" max="11" defaultValue="2" className={styles.selector} />
      </div>
    </div>
  )
}

export const Years = ({elements}) => {
  


  return (
    elements.map(() => (
      <Indicator />
    ))
  )
}

const Indicator = () => <span className={styles.indicator}></span>