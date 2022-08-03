import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Confirm } from './Confirm';

export default {
  component: Confirm,
  title: 'dialog/Confirm',
} as ComponentMeta<typeof Confirm>;

const Template: ComponentStory<typeof Confirm> = (args) => (
  <Confirm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
