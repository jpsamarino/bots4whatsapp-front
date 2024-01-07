import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { buttonStyleVariants, getParamsOfButtonVariant } from "./Button.styles";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    variant: "default",
    children: "Button",
    size: "default",
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
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
    ),
  },
};
