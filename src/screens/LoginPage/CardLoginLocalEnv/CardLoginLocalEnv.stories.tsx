import type { Meta, StoryObj } from "@storybook/react";
import CardLoginLocalEnv from "./CardLoginLocalEnv";

const meta: Meta<typeof CardLoginLocalEnv> = {
  title: "LoginPage/CardLoginLocalEnv",
  component: CardLoginLocalEnv,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof CardLoginLocalEnv>;

export const Default: Story = {
  render: (args) => <CardLoginLocalEnv className="w-[400px]" {...args} />,
};

export const ExpectationWidth: Story = {
  render: (args) => <CardLoginLocalEnv className="w-[400px]" {...args} />,
};
