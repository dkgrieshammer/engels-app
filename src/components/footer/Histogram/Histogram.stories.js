import React from 'react';
import { Histogram } from './Histogram';
import { Metafooter } from '../Metafooter/Metafooter';

export default {
  title: 'Footer/Histogram',
  component: Histogram,
  excludeStories: /.*Data$/,
}

const generateSampleData = (min, max, from, to, steps) => {
  const letters = []
  for(let y = min; y < max; y += steps) {
    const a = Math.floor(Math.random() * 203)
    const active = (from < y && to > y) ? true : false
    letters.push({index:y, value:a, active:active})
  }
  return letters
}
export const letterData = generateSampleData(1845, 1919, 1850, 1900, 1)


export const Default = () => <Metafooter><Histogram elements={letterData} /></Metafooter>

