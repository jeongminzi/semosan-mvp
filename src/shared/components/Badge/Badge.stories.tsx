import type { Meta, StoryObj } from '@storybook/react';
import { CheckCircle, Star, Warning } from 'phosphor-react-native';
import React from 'react';
import { View } from 'react-native';

import { Badge } from './Badge';
import { Colors, Spacing } from '../../constants';

const meta: Meta<typeof Badge> = {
  title: 'Primitives/Badge',
  component: Badge,
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'weak', 'success', 'warning', 'danger', 'info', 'dark'],
    },
    size: { control: 'inline-radio', options: ['sm', 'md'] },
    pill: { control: 'boolean' },
  },
  args: { children: '중급', variant: 'default', size: 'md', pill: false },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: Spacing[2] }}>
      <Badge variant="default">기본</Badge>
      <Badge variant="primary">완등</Badge>
      <Badge variant="weak">신규</Badge>
      <Badge variant="success">완료</Badge>
      <Badge variant="warning">주의</Badge>
      <Badge variant="danger">경고</Badge>
      <Badge variant="info">정보</Badge>
      <Badge variant="dark">필수</Badge>
    </View>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: Spacing[2], alignItems: 'center' }}>
      <Badge size="sm" variant="primary">sm</Badge>
      <Badge size="md" variant="primary">md</Badge>
    </View>
  ),
};

export const Pill: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: Spacing[2] }}>
      <Badge pill variant="primary">완등</Badge>
      <Badge pill variant="success">3회 완등</Badge>
      <Badge pill variant="warning">통제 중</Badge>
    </View>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: Spacing[2], alignItems: 'center' }}>
      <Badge
        variant="success"
        leftIcon={<CheckCircle size={12} weight="fill" color={Colors.status.success} />}
      >
        완료
      </Badge>
      <Badge
        variant="warning"
        leftIcon={<Warning size={12} weight="fill" color={Colors.status.warning} />}
      >
        주의
      </Badge>
      <Badge
        variant="primary"
        leftIcon={<Star size={12} weight="fill" color={Colors.text.inverse} />}
      >
        추천
      </Badge>
    </View>
  ),
};

export const CourseDifficulty: Story = {
  name: '실전: 코스 난이도 표시',
  render: () => (
    <View style={{ flexDirection: 'row', gap: Spacing[2] }}>
      <Badge variant="success">초급</Badge>
      <Badge variant="warning">중급</Badge>
      <Badge variant="danger">고급</Badge>
    </View>
  ),
};
