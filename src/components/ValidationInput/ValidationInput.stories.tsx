import type { Meta, StoryObj } from "@storybook/react";
import { ValidationInput } from "./ValidationInput";
import { getValidationInputVariant } from "./ValidationInput.styles";

const meta: Meta<typeof ValidationInput> = {
  title: "components/Input",
  component: ValidationInput,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ValidationInput>;

export const Default: Story = {
  render: (args) => {
    return (
      <div className="w-1/3">
        <ValidationInput />
      </div>
    );
  },
};

export const BtInside: Story = {
  render: (args) => {
    return (
      <div className="w-1/3">
        <ValidationInput />
      </div>
    );
  },
};

export const BtOutside: Story = {
  render: (args) => {
    return (
      <div className="w-1/3">
        <ValidationInput />
      </div>
    );
  },
};
