import React from "react";
import { Meta, Story, StoryObj } from "@storybook/react";
import ScatterChart from "./ScatterChart";
import { ScatterChartProps } from "./ScatterChart.types";

const meta: Meta<typeof ScatterChart> = {
  component: ScatterChart,
  title: "Graph/ScatterChart",
  argTypes: {},
};
export default meta;

export const Primary: Story<ScatterChartProps> = (args: ScatterChartProps) => (
  <ScatterChart data-test-id="InputField-id" {...args} />
);

Primary.args = {
};