import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { PhoneFrame } from '../../../../.storybook/PhoneFrame';
import { MountainListScreen } from './MountainListScreen';

const meta: Meta<typeof MountainListScreen> = {
  title: 'Screens/03 산 탐색/03-01 산 목록',
  component: MountainListScreen,
  parameters: { layout: 'fullscreen' },
  decorators: [(Story) => <PhoneFrame><Story /></PhoneFrame>],
};

export default meta;
export const Default: StoryObj<typeof MountainListScreen> = {};
