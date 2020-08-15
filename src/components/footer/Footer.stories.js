import React from 'react';
import Footer from 'Components/Footer/Footer';
import { Slider } from './Slider/Slider';
import Rangeslider from './Rangeslider/Rangeslider';

export default {
  title: 'Footer'
}

export const Default = () => <Footer />

export const TimeSelector = () => <Slider />

export const Range = () => <Rangeslider />

export const Testrange = () => <input type="range" min="0" max="50" value="10" />