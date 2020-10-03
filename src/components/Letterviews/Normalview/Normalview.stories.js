import React from 'react';
import { Normalview } from './Normalview';
import response from '../Letter.data';


export default {
  title: 'Letter/Letterviews'
}

const data = response
console.log("data is ", data.data.text.body.div)


export const Default = () => <Normalview data={data} />