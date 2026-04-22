import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { PhoneFrame } from '../../../../.storybook/PhoneFrame';
import { LiveClimbAlertScreen } from './LiveClimbAlertScreen';

const meta: Meta<typeof LiveClimbAlertScreen> = {
  title: 'Screens/04 트래킹/04-03 LiveClimb 알림',
  component: LiveClimbAlertScreen,
  parameters: { layout: 'fullscreen' },
  decorators: [(Story) => <PhoneFrame><Story /></PhoneFrame>],
};

export default meta;
export const Default: StoryObj<typeof LiveClimbAlertScreen> = {};
