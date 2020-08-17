import React from 'react';
import styles from './Histogram.module.scss'


export const Histogram = ({ elements = [{ index: 1900, value: 12, active: true }] }) => {

  const max = elements.reduce((a, b) => a.value > b.value ? a : b) // get biggest element
  const percent = max.value > 100 ? (max.value / 100) : 0.7

  return (
      <div className={styles.container}>
        <div className={styles.inner}>
          {elements.map((element) => {
            return <Indicator value={element.value} percent={element.value / percent} active={element.active} />
          }
          )}
        </div>
      </div>
  )
}

const Indicator = ({ value, percent, active }) => {
  const style = { height: `${percent}%` }
  console.log("output: ", percent)
  return (
    <div className={styles.indicator}>
      <div className={`${styles.line} ${active && styles.active}`} style={style} ></div>
      <ValueBox value={value} />
    </div>
  )
}

const ValueBox = ({ value }) => {
  return <div className={styles.value}>{value}</div>
}