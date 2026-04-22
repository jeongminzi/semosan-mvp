import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { PhoneFrame } from '../../../../.storybook/PhoneFrame';
import { HomeMapScreen } from './HomeMapScreen';

const meta: Meta<typeof HomeMapScreen> = {
  title: 'Screens/02 홈 & 기록/02-01 홈 지도형',
  component: HomeMapScreen,
  parameters: { layout: 'fullscreen' },
  decorators: [(Story) => <PhoneFrame><Story /></PhoneFrame>],
};

export default meta;
export const Default: StoryObj<typeof HomeMapScreen> = {};
