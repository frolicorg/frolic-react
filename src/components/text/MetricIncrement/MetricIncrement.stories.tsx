import React from "react";
import { Meta, Story, StoryObj } from "@storybook/react";
import MetricIncrement from "./MetricIncrement";
import { MetricIncrementProps } from "./MetricIncrement.types";

const meta: Meta<typeof MetricIncrement> = {
  component: MetricIncrement,
  title: "Text/MetricIncrement",
  argTypes: {},
};
export default meta;

export const Primary: Story<MetricIncrementProps> = (args: MetricIncrementProps) => (
  <MetricIncrement data-test-id="InputField-id" {...args} />
);

Primary.args = {
};