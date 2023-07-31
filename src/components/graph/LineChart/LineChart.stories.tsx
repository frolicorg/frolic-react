import React from "react";
import { Meta, Story, StoryObj } from "@storybook/react";
import LineChart from "./LineChart";
import { LineChartProps } from "./LineChart.types";

const meta: Meta<typeof LineChart> = {
  component: LineChart,
  title: "Graph/LineChart",
  argTypes: {},
};
export default meta;

export const Primary: Story<LineChartProps> = (args: LineChartProps) => (
  <LineChart data-test-id="InputField-id" {...args} />
);

Primary.args = {
};