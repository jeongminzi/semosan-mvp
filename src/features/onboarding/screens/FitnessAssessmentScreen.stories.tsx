import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { PhoneFrame } from '../../../../.storybook/PhoneFrame';
import { FitnessAssessmentScreen } from './FitnessAssessmentScreen';

const meta: Meta<typeof FitnessAssessmentScreen> = {
  title: 'Screens/01 온보딩/01-03 자가진단',
  component: FitnessAssessmentScreen,
  parameters: { layout: 'fullscreen' },
  decorators: [(Story) => <PhoneFrame><Story /></PhoneFrame>],
};

export default meta;
export const Default: StoryObj<typeof FitnessAssessmentScreen> = {};
