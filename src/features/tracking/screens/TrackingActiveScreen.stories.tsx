import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { PhoneFrame } from '../../../../.storybook/PhoneFrame';
import { TrackingActiveScreen } from './TrackingActiveScreen';

const meta: Meta<typeof TrackingActiveScreen> = {
  title: 'Screens/04 트래킹/04-02 트래킹 진행 중 ⭐',
  component: TrackingActiveScreen,
  parameters: { layout: 'fullscreen' },
  decorators: [(Story) => <PhoneFrame><Story /></PhoneFrame>],
};

export default meta;
export const Default: StoryObj<typeof TrackingActiveScreen> = {};
