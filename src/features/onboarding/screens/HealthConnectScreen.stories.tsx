import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { PhoneFrame } from '../../../../.storybook/PhoneFrame';
import { HealthConnectScreen } from './HealthConnectScreen';

const meta: Meta<typeof HealthConnectScreen> = {
  title: 'Screens/01 온보딩/01-02 건강 데이터 연동',
  component: HealthConnectScreen,
  parameters: { layout: 'fullscreen' },
  decorators: [(Story) => <PhoneFrame><Story /></PhoneFrame>],
};

export default meta;
export const Default: StoryObj<typeof HealthConnectScreen> = {};
