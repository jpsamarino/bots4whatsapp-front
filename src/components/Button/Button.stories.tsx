import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { buttonStyleVariants, getParamsOfButtonVariant } from "./Button.styles";

const meta: Meta<typeof Button> = {
  title: "components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    variant: "default",
    children: "Button",
    size: "default",
    disabled: false,
    isLoading: false,
  },
  argTypes: {
    variant: {
      options: getParamsOfButtonVariant("variant"),
      control: { type: "select" },
    },
    size: {
      options: getParamsOfButtonVariant("size"),
      control: { type: "select" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    isLoading: {
      control: { type: "boolean" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => <Button {...args} />,
};

export const Destructive: Story = {
  render: (args) => <Button {...args} />,
  args: {
    variant: "destructive",
  },
};

export const Secondary: Story = {
  render: (args) => <Button {...args} />,
  args: {
    variant: "secondary",
  },
};

export const SM: Story = {
  render: (args) => <Button {...args} />,
  args: {
    size: "sm",
  },
};

export const LG: Story = {
  render: (args) => <Button {...args} />,
  args: {
    size: "lg",
  },
};

export const Icon: Story = {
  render: (args) => <Button {...args} />,
  args: {
    size: "icon",
    children: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
    ),
  },
};
