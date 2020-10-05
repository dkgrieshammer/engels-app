import React from 'react';
import { action } from '@storybook/addon-actions';
import { IconButton } from 'components/Buttons/IconBtn';
import { Button } from 'components/Buttons/Button';
import { Filter } from 'components/Icons/Icons';

export default {
  title: 'Elements/Button'
};

export const Default = () => <Button onClick={action('open Filter')}>Filter<Filter/></Button>

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
