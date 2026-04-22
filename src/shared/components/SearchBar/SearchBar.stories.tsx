import type { Meta, StoryObj } from '@storybook/react';
import { Microphone, Funnel } from 'phosphor-react-native';
import React, { useState } from 'react';
import { Pressable, View } from 'react-native';

import { SearchBar } from './SearchBar';
import { Chip } from '../Chip';
import { Colors, Spacing } from '../../constants';

const meta: Meta<typeof SearchBar> = {
  title: 'Composite/SearchBar',
  component: SearchBar,
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <View style={{ width: 343 }}>
        <Story />
      </View>
    ),
  ],
  args: { placeholder: '산 이름을 검색하세요' },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Playground: Story = {};

export const WithValue: Story = {
  args: { defaultValue: '북한산' },
};

export const WithRightAction: Story = {
  render: (args) => (
    <SearchBar
      {...args}
      rightAction={
        <Pressable>
          <Microphone size={18} weight="fill" color={Colors.icon.muted} />
        </Pressable>
      }
    />
  ),
};

export const WithFilters: Story = {
  name: '실전: 검색바 + 필터 칩',
  render: () => {
    const [query, setQuery] = useState('');
    const [filter, setFilter] = useState('전체');
    const filters = ['전체', '초급', '중급', '고급'];
    return (
      <View style={{ gap: Spacing[3] }}>
        <SearchBar
          placeholder="북한산, 관악산..."
          value={query}
          onChangeText={setQuery}
          rightAction={
            <Pressable>
              <Funnel size={18} weight="fill" color={Colors.icon.muted} />
            </Pressable>
          }
        />
        <View style={{ flexDirection: 'row', gap: Spacing[2] }}>
          {filters.map((f) => (
            <Chip key={f} selected={filter === f} onPress={() => setFilter(f)}>
              {f}
            </Chip>
          ))}
        </View>
      </View>
    );
  },
};
