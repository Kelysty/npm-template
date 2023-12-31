import React from 'react';
import {Meta, Story} from '@storybook/react';
import {Component} from '../index';
import type {ComponentProps} from '../index';

export default {
  title: 'Component',
  component: Component,
} as Meta;

export const Playground: Story<ComponentProps> = (args) => <Component {...args} />;

Playground.storyName = 'Component';
