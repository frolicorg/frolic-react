import React from "react";
import { Meta, Story, StoryObj } from "@storybook/react";
import PieChart from "./PieChart";
import { PieChartProps } from "./PieChart.types";
import { TestData } from "components/utils/Test";
import { Card } from "components/layout";

const meta: Meta<typeof PieChart> = {
  component: PieChart,
  title: "Graph/PieChart",
  argTypes: {},
};
export default meta;

export const Primary: Story<PieChartProps> = (args: PieChartProps) => (
  <Card>
    <PieChart data-test-id="InputField-id" {...args} />
  </Card>
);

Primary.args = {
  data: TestData,
  dimensions: ["name"],
  metrics: ["uv"]
};