import React, { useState } from 'react';
import styles from './Slider.module.scss'

export const Slider = ({ callback=()=>(null), min = 0, max = 100, from = 20, to = 80, steps = 1}) => {
  
  const [_from, setFrom] = useState(from)
  const [_to, setTo] = useState(to)

  const onChange = (e) => {
    if(e.target.id === 'start') {
      const newVal = parseInt(e.target.value)
      setFrom(newVal)
      callback({from:newVal, to:_to})
    }
    if(e.target.id === 'end') {
      const newVal = parseInt(e.target.value)
      setTo(newVal)
      callback({from:_from, to:newVal})
    }
  }

  return (
      <div className={styles.container}>
        <div className={styles.sliderBg}></div>
        <label for="start">Start: </label>
        <input id='start' type="range" min={min} max={max} defaultValue={_from} onChange={onChange} step={steps} className={styles.selector} />
        <label for="end">Ende: </label>
        <input id='end' type="range" min={min} max={max} defaultValue={_to} onChange={onChange} step={steps} className={styles.selector} />
        <div className={styles.indicatorContainer}>
          <Indicator value={_from} min={min} max={max} pos={10} />
          <Indicator value={_to} min={min} max={max} pos={10} />
        </div>
      </div>
  )
}

const Indicator = ({value = 0, min, max}) => {
  const oneStep = 100/(max - min)
  const percent = (value - min) * oneStep
  const style = {left:`${percent}%`}
  return (
    <div style={style} className={styles.indicator}>{value}</div>
  )
}

