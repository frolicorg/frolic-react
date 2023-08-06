import React from "react";
import { Meta, Story, StoryObj } from "@storybook/react";
import Card from "./Card";
import { CardProps } from "./Card.types";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "Components/Layout/Card",
  argTypes: {},
};
export default meta;

export const Primary = (args: CardProps) => (
  <Card data-test-id="InputField-id" {...args} />
);

Primary.args = {
  title: "Sample Card"
};