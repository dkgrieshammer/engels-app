import 'normalize.css'
import '../src/index.scss'
import React from 'react';
import {addDecorator} from '@storybook/react'
import { MemoryRouter, Router } from 'react-router-dom'

addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);

export const parameters = {
  options: {
    storySort: {
      method: 'alphabetical'
    }
  }
}