import React from 'react';
import { Slider } from './Slider';
import { Metafooter } from '../Metafooter/Metafooter';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Footer/Slider',
  default: Slider,
  excludeStories: /.*Data$/,
}

const callback = action("set Slider")

export const Default = () => <Metafooter><Slider callback={callback}/></Metafooter>

