import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';

import { ProgressBar } from './ProgressBar';
import { Colors, Spacing, Typography } from '../../constants';

const meta: Meta<typeof ProgressBar> = {
  title: 'Primitives/ProgressBar',
  component: ProgressBar,
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <View style={{ width: 343 }}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'success', 'warning', 'danger'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    showPercentage: { control: 'boolean' },
  },
  args: { value: 56, variant: 'primary', size: 'md', showPercentage: true, label: '진행률' },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Playground: Story = {};

export const AllSizes: Story = {
  render: () => (
    <View style={{ gap: Spacing[4] }}>
      <ProgressBar value={60} size="sm" label="Small (4px)" />
      <ProgressBar value={60} size="md" label="Medium (8px)" />
      <ProgressBar value={60} size="lg" label="Large (12px)" />
    </View>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <View style={{ gap: Spacing[4] }}>
      <ProgressBar value={60} variant="primary" label="Primary" showPercentage />
      <ProgressBar value={80} variant="success" label="Success" showPercentage />
      <ProgressBar value={40} variant="warning" label="Warning" showPercentage />
      <ProgressBar value={20} variant="danger" label="Danger" showPercentage />
    </View>
  ),
};

export const TrackingProgress: Story = {
  name: '실전: 트래킹 진행률 (정상까지)',
  render: () => (
    <View style={{ gap: Spacing[2] }}>
      <ProgressBar value={56} size="md" label="정상까지" showPercentage />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={[Typography.caption, { color: Colors.text.tertiary }]}>출발</Text>
        <Text style={[Typography.caption, { color: Colors.text.tertiary }]}>정상</Text>
        <Text style={[Typography.caption, { color: Colors.text.tertiary }]}>하산</Text>
      </View>
    </View>
  ),
};

export const OnboardingSteps: Story = {
  name: '실전: 온보딩 단계',
  render: () => (
    <View style={{ gap: Spacing[2] }}>
      <Text style={[Typography.caption, { color: Colors.text.tertiary }]}>STEP 2 / 2</Text>
      <ProgressBar value={100} size="sm" />
    </View>
  ),
};
