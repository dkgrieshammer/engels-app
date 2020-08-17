import React, { useState } from 'react'
import Footerbar from './Footerbar/Footerbar'
import { Metafooter } from './Metafooter/Metafooter'
import { Slider } from './Slider/Slider'
import { Histogram } from './Histogram/Histogram'

export default {
  title: 'Footer/Full',
  excludeStories: /.*Data$/
}

const min = 1845
const max = 1919
const from = 1850
const to = 1900
const steps = 1


const generateSampleData = (min, max, from, to, steps) => {
  const letters = []
  for(let y = min; y < max; y += steps) {
    const a = Math.floor(Math.random() * 203)
    const active = (from < y && to > y) ? true : false
    letters.push({index:y, value:a, active:active})
  }
  return letters
}
const letterData = generateSampleData(min, max, from, to, steps)

export const Footer = () => (
  <div> 
    <Metafooter>
      <Histogram elements={letterData} />
      <Slider elements={letterData} min={min} max={max} from={from} to={to} steps={steps} />
    </Metafooter>
    <Footerbar />
  </div>
)