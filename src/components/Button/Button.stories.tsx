import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { InkIcon } from "../..";
import { AllButtonVariants, AllButtonVariantsProps } from "./AllButtonVariants";

const meta: Meta<AllButtonVariantsProps> = {
  title: "Example/Button",
  component: AllButtonVariants,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: false },
    size: { control: false },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    children: "Button",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Button",
  },
};

export const WithIcon: Story = {
  args: {
    children: "Button",
    iconLeft: <InkIcon.Deposit />,
  },
};

export const Rounded: Story = {
  args: {
    rounded: "full",
    children: <InkIcon.Deposit />,
  },
};

export const WithMinimumWidth: Story = {
  args: {
    className: "ink-min-w-[350px]",
    children: "Button",
    iconLeft: <InkIcon.Deposit />,
  },
};

export const AsLink: Story = {
  args: {
    as: "a",
    href: "https://inkonchain.com",
    target: "_blank",
    children: "inkonchain.com",
    iconRight: <InkIcon.Arrow className="ink-rotate-[225deg]" />,
  },
};
