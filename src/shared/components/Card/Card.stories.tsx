import type { Meta, StoryObj } from '@storybook/react';
import { Heart } from 'phosphor-react-native';
import React from 'react';
import { Text, View } from 'react-native';

import { Card } from './Card';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Colors, Spacing, Typography } from '../../constants';

const meta: Meta<typeof Card> = {
  title: 'Composite/Card',
  component: Card,
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <View style={{ width: 343 }}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    variant: { control: 'select', options: ['default', 'outlined', 'filled', 'elevated'] },
    noPadding: { control: 'boolean' },
  },
  args: { variant: 'default', noPadding: false },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Playground: Story = {
  render: (args) => (
    <Card {...args}>
      <Text style={Typography.h4}>백운대 코스</Text>
      <Text style={[Typography.body, { color: Colors.text.secondary, marginTop: Spacing[1] }]}>
        3.2km · 2시간 15분 · 고도 520m
      </Text>
    </Card>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <View style={{ gap: Spacing[3] }}>
      {(['default', 'outlined', 'filled', 'elevated'] as const).map((v) => (
        <Card key={v} variant={v}>
          <Text style={[Typography.label, { color: Colors.text.tertiary, marginBottom: Spacing[1] }]}>
            {v.toUpperCase()}
          </Text>
          <Text style={Typography.h4}>북한산 백운대 코스</Text>
          <Text style={[Typography.bodySm, { color: Colors.text.secondary, marginTop: Spacing[1] }]}>
            3.2km · 2h 15m
          </Text>
        </Card>
      ))}
    </View>
  ),
};

export const HikeRecordCard: Story = {
  name: '실전: 등반 기록 카드',
  render: () => (
    <Card onPress={() => {}}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: Spacing[2] }}>
        <Badge variant="primary" pill>완등</Badge>
        <Text style={[Typography.caption, { color: Colors.text.tertiary }]}>2026-04-15</Text>
      </View>
      <Text style={Typography.h4}>북한산 백운대</Text>
      <Text style={[Typography.bodySm, { color: Colors.text.secondary, marginTop: Spacing[1] }]}>
        3.2km · 2h 15m · 520m ↑
      </Text>
      <View style={{ flexDirection: 'row', gap: Spacing[2], marginTop: Spacing[4] }}>
        <Button variant="weak" size="sm">후기 작성</Button>
        <Button
          variant="ghost"
          size="sm"
          leftIcon={<Heart size={14} weight="fill" color={Colors.text.primary} />}
        >
          즐겨찾기
        </Button>
      </View>
    </Card>
  ),
};
