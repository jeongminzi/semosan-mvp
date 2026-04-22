import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { PhoneFrame } from '../../../../.storybook/PhoneFrame';
import { MountainDetailScreen } from './MountainDetailScreen';

const meta: Meta<typeof MountainDetailScreen> = {
  title: 'Screens/03 산 탐색/03-02 산 상세',
  component: MountainDetailScreen,
  parameters: { layout: 'fullscreen' },
  decorators: [(Story) => <PhoneFrame><Story /></PhoneFrame>],
};

export default meta;
export const Default: StoryObj<typeof MountainDetailScreen> = {};
