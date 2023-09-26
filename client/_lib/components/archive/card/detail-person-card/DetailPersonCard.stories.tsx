import type { Meta, StoryObj } from '@storybook/react';

import { DetailPersonCard } from './DetailPersonCard';

const meta = {
  title: 'Archive/Card/detail-person-card',
  component: DetailPersonCard,
  argTypes: {},
} satisfies Meta<typeof DetailPersonCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    personImg: '',
    name: '이름',
    fieldSection: 'maker',
    fields: ['연출', '각본', '연기'],
    role: '박성준',
  },
};
