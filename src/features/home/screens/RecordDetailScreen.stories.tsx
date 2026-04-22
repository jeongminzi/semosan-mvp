import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { PhoneFrame } from '../../../../.storybook/PhoneFrame';
import { RecordDetailScreen } from './RecordDetailScreen';

const meta: Meta<typeof RecordDetailScreen> = {
  title: 'Screens/02 홈 & 기록/02-04 등반 기록 상세',
  component: RecordDetailScreen,
  parameters: { layout: 'fullscreen' },
  decorators: [(Story) => <PhoneFrame><Story /></PhoneFrame>],
};

export default meta;
export const Default: StoryObj<typeof RecordDetailScreen> = {};
