import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { PhoneFrame } from '../../../../.storybook/PhoneFrame';
import { CompletionReportScreen } from './CompletionReportScreen';

const meta: Meta<typeof CompletionReportScreen> = {
  title: 'Screens/04 트래킹/04-05 완료 리포트',
  component: CompletionReportScreen,
  parameters: { layout: 'fullscreen' },
  decorators: [(Story) => <PhoneFrame><Story /></PhoneFrame>],
};

export default meta;
export const Default: StoryObj<typeof CompletionReportScreen> = {};
