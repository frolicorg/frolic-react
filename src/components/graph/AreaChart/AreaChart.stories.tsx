import React from "react";
import { Meta, Story, StoryObj } from "@storybook/react";
import AreaChart from "./AreaChart";
import { AreaChartProps } from "./AreaChart.types";

const meta: Meta<typeof AreaChart> = {
  component: AreaChart,
  title: "Graph/AreaChart",
  argTypes: {},
};
export default meta;

export const Primary: Story<AreaChartProps> = (args: AreaChartProps) => (
  <AreaChart data-test-id="InputField-id" {...args} />
);

Primary.args = {
};