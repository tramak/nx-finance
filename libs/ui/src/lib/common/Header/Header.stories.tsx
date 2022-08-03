import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { langs } from '@finance/translate';
import { Header } from './Header';

export default {
  title: 'common/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  isLogin: true,
  // logout: () => void;
  langs,
  lang: 'en',
  // changeLang: () => void(0)
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
