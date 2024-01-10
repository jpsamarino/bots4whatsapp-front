import type { Meta, StoryObj } from "@storybook/react";
import CardLoginRemoteEnv from "./CardLoginRemoteEnv";

const meta: Meta<typeof CardLoginRemoteEnv> = {
  title: "LoginPage/CardLoginRemoteEnv",
  component: CardLoginRemoteEnv,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof CardLoginRemoteEnv>;

export const Default: Story = {
  render: (args) => <CardLoginRemoteEnv {...args} />,
};

export const ExpectationWidth: Story = {
  render: (args) => <CardLoginRemoteEnv className="w-[400px]" {...args} />,
};
