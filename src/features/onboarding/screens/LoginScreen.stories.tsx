import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { PhoneFrame } from '../../../../.storybook/PhoneFrame';
import { LoginScreen } from './LoginScreen';

const meta: Meta<typeof LoginScreen> = {
  title: 'Screens/01 온보딩/01-01 로그인',
  component: LoginScreen,
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <PhoneFrame>
        <Story />
      </PhoneFrame>
    ),
  ],
};

export default meta;
export const Default: StoryObj<typeof LoginScreen> = {};
