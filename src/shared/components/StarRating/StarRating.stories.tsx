import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { StarRating } from './StarRating';
import { Badge } from '../Badge';
import { Card } from '../Card';
import { Colors, Spacing, Typography } from '../../constants';

const meta: Meta<typeof StarRating> = {
  title: 'Primitives/StarRating',
  component: StarRating,
  parameters: { layout: 'centered' },
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 5, step: 1 } },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    readonly: { control: 'boolean' },
  },
  args: { value: 4, max: 5, size: 'lg', readonly: false },
};

export default meta;
type Story = StoryObj<typeof StarRating>;

export const Playground: Story = {};

export const AllSizes: Story = {
  render: () => (
    <View style={{ gap: Spacing[4], alignItems: 'flex-start' }}>
      <StarRating value={3} size="sm" readonly />
      <StarRating value={3} size="md" readonly />
      <StarRating value={3} size="lg" readonly />
    </View>
  ),
};

export const Readonly: Story = {
  args: { value: 5, readonly: true },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState(3);
    return (
      <View style={{ alignItems: 'center', gap: Spacing[3] }}>
        <StarRating value={value} onChange={setValue} />
        <Text style={Typography.body}>{value} / 5</Text>
      </View>
    );
  },
};

export const ReviewCard: Story = {
  name: '실전: 후기 평가 카드',
  decorators: [(Story) => <View style={{ width: 343 }}><Story /></View>],
  render: () => {
    const [access, setAccess] = useState(0);
    const [facility, setFacility] = useState(0);
    const [scenery, setScenery] = useState(0);
    return (
      <Card>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: Spacing[2] }}>
          <Text style={Typography.h4}>리뷰를 작성해주세요</Text>
          <Badge variant="dark" size="sm">필수</Badge>
        </View>
        <View style={{ gap: Spacing[5], marginTop: Spacing[5] }}>
          {[
            { label: '접근성', value: access, set: setAccess },
            { label: '주변 시설', value: facility, set: setFacility },
            { label: '경치', value: scenery, set: setScenery },
          ].map((item) => (
            <View key={item.label} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={[Typography.body, { color: Colors.text.secondary }]}>{item.label}</Text>
              <StarRating value={item.value} size="md" onChange={item.set} />
            </View>
          ))}
        </View>
      </Card>
    );
  },
};
