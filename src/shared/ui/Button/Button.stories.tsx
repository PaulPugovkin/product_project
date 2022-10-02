import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button, { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimarySizeM = Template.bind({});
PrimarySizeM.args = {
    children: 'Medium',
    size: ButtonSize.M,
};

export const PrimarySizeL = Template.bind({});
PrimarySizeL.args = {
    children: 'Large',
    size: ButtonSize.L,
};

export const PrimarySizeXL = Template.bind({});
PrimarySizeXL.args = {
    children: 'Extra Large',
    size: ButtonSize.XL,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Large',
    size: ButtonSize.L,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearSizeM = Template.bind({});
ClearSizeM.args = {
    children: 'Medium',
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.M,
};

export const ClearSizeL = Template.bind({});
ClearSizeL.args = {
    children: 'Large',
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.L,
};

export const ClearSizeXL = Template.bind({});
ClearSizeXL.args = {
    children: 'Extra Large',
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.XL,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
    children: 'Medium',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Large',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: 'Extra large',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
};

export const Background = Template.bind({});
Background.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
};
