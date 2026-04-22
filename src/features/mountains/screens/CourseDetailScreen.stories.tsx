import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { PhoneFrame } from '../../../../.storybook/PhoneFrame';
import { CourseDetailScreen } from './CourseDetailScreen';

const meta: Meta<typeof CourseDetailScreen> = {
  title: 'Screens/03 산 탐색/03-03 코스 상세',
  component: CourseDetailScreen,
  parameters: { layout: 'fullscreen' },
  decorators: [(Story) => <PhoneFrame><Story /></PhoneFrame>],
};

export default meta;
export const Default: StoryObj<typeof CourseDetailScreen> = {};
