import React from "react";
import { Meta, Story, StoryObj } from "@storybook/react";
import ScatterChart from "./ScatterChart";
import { ScatterChartProps } from "./ScatterChart.types";
import { TestData } from "components/utils/Test";
import { Card } from "components/layout";

const meta: Meta<typeof ScatterChart> = {
  component: ScatterChart,
  title: "Components/Graph/ScatterChart",
  argTypes: {},
};
export default meta;

export const Primary = (args: ScatterChartProps) => (
  <Card>
    <ScatterChart data-test-id="InputField-id" {...args} />
  </Card>
);

Primary.args = {
  data: TestData,
  xKey: "uv",
  yKey: "pv",
};