import React from "react";
import { Meta, Story, StoryObj } from "@storybook/react";
import AreaChart from "./AreaChart";
import { AreaChartProps } from "./AreaChart.types";
import { TestData } from "components/utils/Test";
import { Card } from "components/layout";

const meta: Meta<typeof AreaChart> = {
  component: AreaChart,
  title: "Graph/AreaChart",
  argTypes: {},
};
export default meta;

export const Primary: Story<AreaChartProps> = (args: AreaChartProps) => (
  <Card>
    <AreaChart data-test-id="InputField-id" {...args} />
  </Card>
);

Primary.args = {
  data: TestData,
  dimensions: ["name"],
  metrics: ["uv", "pv"]
};