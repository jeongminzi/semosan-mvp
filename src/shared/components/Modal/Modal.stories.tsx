import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { Modal } from './Modal';
import { Button } from '../Button';
import { Input } from '../Input';
import { Colors, Spacing, Typography } from '../../constants';

const meta: Meta<typeof Modal> = {
  title: 'Composite/Modal',
  component: Modal,
  parameters: { layout: 'centered' },
  args: { visible: false, title: '설정' },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Playground: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <View>
        <Button onPress={() => setOpen(true)}>모달 열기</Button>
        <Modal {...args} visible={open} onClose={() => setOpen(false)}>
          <Text style={Typography.body}>모달 콘텐츠 영역입니다.</Text>
        </Modal>
      </View>
    );
  },
};

export const ReviewForm: Story = {
  name: '실전: 후기 작성 모달',
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <View>
        <Button onPress={() => setOpen(true)}>후기 작성 열기</Button>
        <Modal
          visible={open}
          onClose={() => setOpen(false)}
          title="후기 작성"
          rightAction={
            <Text style={[Typography.label, { color: Colors.interactive.primary }]}>
              저장
            </Text>
          }
        >
          <View style={{ gap: Spacing[5] }}>
            <Text style={Typography.h3}>오늘의 등산은 어떠셨나요?</Text>
            <Input label="닉네임" placeholder="2~20자" />
            <Input
              label="후기 내용"
              placeholder="경치, 난이도, 꿀팁을 공유해보세요"
              multiline
              numberOfLines={5}
            />
            <Button variant="primary" size="lg" fullWidth>
              업로드
            </Button>
          </View>
        </Modal>
      </View>
    );
  },
};
