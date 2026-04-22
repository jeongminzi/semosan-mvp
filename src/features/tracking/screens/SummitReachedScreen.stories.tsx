import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { PhoneFrame } from '../../../../.storybook/PhoneFrame';
import { SummitReachedScreen } from './SummitReachedScreen';

const meta: Meta<typeof SummitReachedScreen> = {
  title: 'Screens/04 트래킹/04-04 정상 도착',
  component: SummitReachedScreen,
  parameters: { layout: 'fullscreen' },
  decorators: [(Story) => <PhoneFrame><Story /></PhoneFrame>],
};

export default meta;
export const Default: StoryObj<typeof SummitReachedScreen> = {};
