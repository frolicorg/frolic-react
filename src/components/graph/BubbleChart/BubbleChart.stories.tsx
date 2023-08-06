import React from "react";
import { Meta, Story, StoryObj } from "@storybook/react";
import BubbleChart from "./BubbleChart";
import { BubbleChartProps } from "./BubbleChart.types";
import { TestData } from "components/utils/Test";
import { Card } from "components/layout";

const meta: Meta<typeof BubbleChart> = {
  component: BubbleChart,
  title: "Components/Graph/BubbleChart",
  argTypes: {},
};
export default meta;

export const Primary = (args: BubbleChartProps) => (
  <Card>
    <BubbleChart data-test-id="InputField-id" {...args} />
  </Card>
);

Primary.args = {
  data: TestData,
  xKey: "uv",
  yKey: "pv",
  dataKey: "amt"
};