import React from "react";
import { Meta, Story, StoryObj } from "@storybook/react";
import BarChart from "./BarChart";
import { BarChartProps } from "./BarChart.types";
import { TestData } from "components/utils/Test";
import { Card } from "components/layout";

const meta: Meta<typeof BarChart> = {
  component: BarChart,
  title: "Graph/BarChart",
  argTypes: {},
};
export default meta;

export const Primary: Story<BarChartProps> = (args: BarChartProps) => (
  <Card>
    <BarChart data-test-id="InputField-id" {...args} />
  </Card>
);

Primary.args = {
  data: TestData,
  dimensions: ["name"],
  metrics: ["uv", "pv"]
};