import React from "react";
import { Meta, Story, StoryObj } from "@storybook/react";
import BubbleChart from "./BubbleChart";
import { BubbleChartProps } from "./BubbleChart.types";

const meta: Meta<typeof BubbleChart> = {
  component: BubbleChart,
  title: "Graph/BubbleChart",
  argTypes: {},
};
export default meta;

export const Primary: Story<BubbleChartProps> = (args: BubbleChartProps) => (
  <BubbleChart data-test-id="InputField-id" {...args} />
);

Primary.args = {
};