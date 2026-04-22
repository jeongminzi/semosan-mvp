import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { PhoneFrame } from '../../../../.storybook/PhoneFrame';
import { MountainInfoSheetScreen } from './MountainInfoSheetScreen';

const meta: Meta<typeof MountainInfoSheetScreen> = {
  title: 'Screens/02 홈 & 기록/02-03 산 정보 모달',
  component: MountainInfoSheetScreen,
  parameters: { layout: 'fullscreen' },
  decorators: [(Story) => <PhoneFrame><Story /></PhoneFrame>],
};

export default meta;
export const Default: StoryObj<typeof MountainInfoSheetScreen> = {};
