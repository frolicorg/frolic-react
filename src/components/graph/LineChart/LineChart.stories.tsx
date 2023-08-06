import React from "react";
import { Meta, Story, StoryObj } from "@storybook/react";
import LineChart from "./LineChart";
import { LineChartProps } from "./LineChart.types";
import { TestData } from "components/utils/Test";
import { Card } from "components/layout";

const meta: Meta<typeof LineChart> = {
  component: LineChart,
  title: "Graph/LineChart",
  argTypes: {},
};
export default meta;

export const Primary: Story<LineChartProps> = (args: LineChartProps) => (
  <Card>
    <LineChart data-test-id="InputField-id" {...args} />
  </Card>
);

Primary.args = {
  data: TestData,
  dimensions: ["name"],
  metrics: ["uv", "pv"]
};