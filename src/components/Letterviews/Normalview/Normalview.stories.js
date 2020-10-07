import React from 'react';
import { Normalview } from './Normalview';
import response from '../Letter.data';

export default {
  title: 'Letter/Letterviews'
}

const data = response

export const Default = () => <Normalview data={data} />
