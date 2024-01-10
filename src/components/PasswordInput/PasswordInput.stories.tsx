import type { Meta, StoryObj } from "@storybook/react";
import { PasswordInput } from "./PasswordInput";
import { getPasswordInputVariant } from "./PasswordInput.styles";

const meta: Meta<typeof PasswordInput> = {
  title: "components/PasswordInput",
  component: PasswordInput,
  tags: ["autodocs"],
  args: { textOpen: true, variant: "btInside" },
  argTypes: {
    textOpen: { control: { type: "boolean" } },
    variant: {
      options: getPasswordInputVariant("variant"),
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {
  render: (args) => {
    return (
      <div className="w-1/3">
        <PasswordInput {...args} />
      </div>
    );
  },
};

export const BtInside: Story = {
  render: (args) => {
    return (
      <div className="w-1/3">
        <PasswordInput {...args} />
      </div>
    );
  },
  args: {
    variant: "btInside",
  },
};

export const BtOutside: Story = {
  render: (args) => {
    return (
      <div className="w-1/3">
        <PasswordInput {...args} />
      </div>
    );
  },
  args: {
    variant: "btOutside",
  },
};
