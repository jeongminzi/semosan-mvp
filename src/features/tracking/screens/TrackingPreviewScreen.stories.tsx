import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { PhoneFrame } from '../../../../.storybook/PhoneFrame';
import { TrackingPreviewScreen } from './TrackingPreviewScreen';

const meta: Meta<typeof TrackingPreviewScreen> = {
  title: 'Screens/04 트래킹/04-01 트래킹 시작 전',
  component: TrackingPreviewScreen,
  parameters: { layout: 'fullscreen' },
  decorators: [(Story) => <PhoneFrame><Story /></PhoneFrame>],
};

export default meta;
export const Default: StoryObj<typeof TrackingPreviewScreen> = {};
