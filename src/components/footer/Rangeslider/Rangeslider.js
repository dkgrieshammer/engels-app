import React from 'react';
import Slider from 'rc-slider';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';


const createSliderWithTooltip = Slider.createSliderWithTooltip
const RangeTooltip = createSliderWithTooltip(Slider.Range)

export default () => (
  <>
    <RangeTooltip defaultValue={[10,50]} tipProps={{placement:'top'}}/>
  </>
)