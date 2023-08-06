import React from "react";
import { Meta, Story, StoryObj } from "@storybook/react";
import MetricIncrement from "./MetricIncrement";
import { MetricIncrementProps } from "./MetricIncrement.types";
import { Card } from "components/layout";

const meta: Meta<typeof MetricIncrement> = {
  component: MetricIncrement,
  title: "Components/Text/MetricIncrement",
  argTypes: {},
};
export default meta;

export const Primary = (args: MetricIncrementProps) => (
  <Card title="Metric Increment">
    <MetricIncrement data-test-id="InputField-id" {...args} />
  </Card>
);

Primary.args = {
  value: 100,
  description: "since last month"
};