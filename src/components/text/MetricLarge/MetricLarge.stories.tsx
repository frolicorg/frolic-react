import React from "react";
import { Meta, Story, StoryObj } from "@storybook/react";
import MetricLarge from "./MetricLarge";
import { MetricLargeProps } from "./MetricLarge.types";
import { Card } from "components/layout";

const meta: Meta<typeof MetricLarge> = {
  component: MetricLarge,
  title: "Text/MetricLarge",
  argTypes: {},
};
export default meta;

export const Primary: Story<MetricLargeProps> = (args: MetricLargeProps) => (
  <Card title="Metric Large">
    <MetricLarge data-test-id="InputField-id" {...args} />
  </Card>
);

Primary.args = {
  value: 100
};