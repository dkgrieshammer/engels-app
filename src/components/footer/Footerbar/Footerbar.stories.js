import React from 'react';
import Footerbar from './Footerbar';

export default {
  title: 'Footer/Footerbar',
  default: Footerbar,
  excludeStories: /.*Data$/,
}

export const Default = () => <Footerbar />