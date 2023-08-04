import React from "react";
import { Meta, Story, StoryObj } from "@storybook/react";
import PieChart from "./PieChart";
import { PieChartProps } from "./PieChart.types";

const meta: Meta<typeof PieChart> = {
  component: PieChart,
  title: "Graph/PieChart",
  argTypes: {},
};
export default meta;

export const Primary: Story<PieChartProps> = (args: PieChartProps) => (
  <PieChart data-test-id="InputField-id" {...args} />
);

Primary.args = {
};