import type { Meta, StoryObj } from '@storybook/react';
import { MagnifyingGlass, User, Lock, Eye } from 'phosphor-react-native';
import React from 'react';
import { View } from 'react-native';

import { Input } from './Input';
import { Colors, Spacing } from '../../constants';

const meta: Meta<typeof Input> = {
  title: 'Primitives/Input',
  component: Input,
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <View style={{ width: 343 }}>
        <Story />
      </View>
    ),
  ],
  args: {
    placeholder: '산 이름을 입력하세요',
    label: '산 검색',
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Playground: Story = {};

export const WithoutLabel: Story = {
  args: { label: undefined, placeholder: '입력하세요' },
};

export const WithLeftIcon: Story = {
  args: {
    label: '산 검색',
    placeholder: '북한산, 관악산...',
    leftIcon: (
      <MagnifyingGlass size={18} weight="fill" color={Colors.icon.muted} />
    ),
  },
};

export const WithBothIcons: Story = {
  args: {
    label: '비밀번호',
    placeholder: '비밀번호 입력',
    secureTextEntry: true,
    leftIcon: <Lock size={18} weight="fill" color={Colors.icon.muted} />,
    rightIcon: <Eye size={18} weight="fill" color={Colors.icon.muted} />,
  },
};

export const WithHelper: Story = {
  args: {
    label: '닉네임',
    placeholder: '2~20자',
    helperText: '한글, 영문, 숫자 조합 가능',
  },
};

export const WithError: Story = {
  args: {
    label: '닉네임',
    placeholder: '2~20자',
    errorText: '이미 사용중인 닉네임입니다',
    defaultValue: '등린이',
  },
};

export const Disabled: Story = {
  args: {
    label: '이메일',
    placeholder: 'example@email.com',
    defaultValue: 'locked@email.com',
    disabled: true,
  },
};

export const FormShowcase: Story = {
  name: '실전: 회원가입 폼',
  render: () => (
    <View style={{ gap: Spacing[5], width: 343 }}>
      <Input
        label="닉네임"
        placeholder="2~20자"
        leftIcon={<User size={18} weight="fill" color={Colors.icon.muted} />}
        helperText="산행 기록에 표시됩니다"
      />
      <Input
        label="이메일"
        placeholder="example@email.com"
        keyboardType="email-address"
      />
      <Input
        label="비밀번호"
        placeholder="영문+숫자 8자 이상"
        secureTextEntry
        leftIcon={<Lock size={18} weight="fill" color={Colors.icon.muted} />}
        errorText="8자 이상 입력하세요"
      />
    </View>
  ),
};
