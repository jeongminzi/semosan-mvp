import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { PhoneFrame } from '../../../../.storybook/PhoneFrame';
import { HomeListScreen } from './HomeListScreen';

const meta: Meta<typeof HomeListScreen> = {
  title: 'Screens/02 홈 & 기록/02-02 홈 리스트형',
  component: HomeListScreen,
  parameters: { layout: 'fullscreen' },
  decorators: [(Story) => <PhoneFrame><Story /></PhoneFrame>],
};

export default meta;
export const Default: StoryObj<typeof HomeListScreen> = {};
