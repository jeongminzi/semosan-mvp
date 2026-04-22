import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { PhoneFrame } from '../../../../.storybook/PhoneFrame';
import { ReviewFormScreen } from './ReviewFormScreen';

const meta: Meta<typeof ReviewFormScreen> = {
  title: 'Screens/02 홈 & 기록/02-05 후기 작성',
  component: ReviewFormScreen,
  parameters: { layout: 'fullscreen' },
  decorators: [(Story) => <PhoneFrame><Story /></PhoneFrame>],
};

export default meta;
export const Default: StoryObj<typeof ReviewFormScreen> = {};
