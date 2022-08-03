import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Alert } from './Alert';

export default {
  component: Alert,
  title: 'dialog/Alert',
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
