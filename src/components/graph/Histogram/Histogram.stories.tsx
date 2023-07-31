import React from "react";
import { Meta, Story, StoryObj } from "@storybook/react";
import Histogram from "./Histogram";
import { HistogramProps } from "./Histogram.types";

const meta: Meta<typeof Histogram> = {
  component: Histogram,
  title: "Graph/Histogram",
  argTypes: {},
};
export default meta;

export const Primary: Story<HistogramProps> = (args: HistogramProps) => (
  <Histogram data-test-id="InputField-id" {...args} />
);

Primary.args = {
  primary: true,
  disabled: false,
  text: "Primary",
};