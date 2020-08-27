import React from 'react';
import { Imageviewer } from './Imageviewer';
import Faksimile from './../../static/images/faksimile.png'

export default {
  title: 'Letter/Imageviewer'
}

export const Default = () => <Imageviewer image={'https://chost20.zim.uni-wuppertal.de/api/facsimile/FE_06.1_22051791.pdf'} />