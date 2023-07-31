import React from "react";
import { Meta, Story, StoryObj } from "@storybook/react";
import BarChart from "./BarChart";
import { BarChartProps } from "./BarChart.types";

const meta: Meta<typeof BarChart> = {
  component: BarChart,
  title: "Graph/BarChart",
  argTypes: {},
};
export default meta;

export const Primary: Story<BarChartProps> = (args: BarChartProps) => (
  <BarChart data-test-id="InputField-id" {...args} />
);

Primary.args = {
};