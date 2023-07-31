import React from "react";
import { Meta, Story, StoryObj } from "@storybook/react";
import MetricLarge from "./MetricLarge";
import { MetricLargeProps } from "./MetricLarge.types";

const meta: Meta<typeof MetricLarge> = {
  component: MetricLarge,
  title: "Text/MetricLarge",
  argTypes: {},
};
export default meta;

export const Primary: Story<MetricLargeProps> = (args: MetricLargeProps) => (
  <MetricLarge data-test-id="InputField-id" {...args} />
);

Primary.args = {
};