import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Modal from 'shared/ui/Modal/Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'Example/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n'
        + '                    Cum deserunt ea eius, expedita obcaecati omnis\n'
        + '                    pariatur quidem quos rem voluptatem.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n'
        + '                    Cum deserunt ea eius, expedita obcaecati omnis\n'
        + '                    pariatur quidem quos rem voluptatem.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
