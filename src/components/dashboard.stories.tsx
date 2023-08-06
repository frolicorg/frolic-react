import React from "react";
import { Meta, Story, StoryObj } from "@storybook/react";
import AreaChart from "./graph/AreaChart/AreaChart";
import { AreaChartProps } from "./graph/AreaChart/AreaChart.types";
import Card from "./layout/Card/Card";
import MetricLarge from "./text/MetricLarge/MetricLarge";
import MetricIncrement from "./text/MetricIncrement/MetricIncrement";
import LineChart from "./graph/LineChart/LineChart";
import BarChart from "./graph/BarChart/BarChart";
import ScatterChart from "./graph/ScatterChart/ScatterChart";
import BubbleChart from "./graph/BubbleChart/BubbleChart";
import PieChart from "./graph/PieChart/PieChart";
import { TestData } from "./utils/Test";

const meta: Meta = {
    title: "Introduction/Sample Dashboard",
};
export default meta;

export const Primary = () => (
    <>
        <div className="flex flex-row gap-5">
            <Card title="Total Sales">
                <MetricLarge value={100}></MetricLarge>
                <MetricIncrement value={10} description="since last month"></MetricIncrement>
            </Card>
            <Card title="Total Sales">
                <MetricLarge value={100}></MetricLarge>
                <MetricIncrement value={-10} description="since last month"></MetricIncrement>
            </Card>
        </div>

        <br></br>
        <div className="grid grid-cols-2 gap-5">
            <Card title="Line Chart">
                <LineChart data={TestData} metrics={["uv", "pv", "amt"]} dimensions={["name"]}></LineChart>
            </Card>
            <Card title="Bar Chart">
                <BarChart data={TestData} metrics={["uv", "pv", "amt"]} dimensions={["name"]}></BarChart>
            </Card>
        </div>

        <br></br>
        <div className="grid grid-cols-2 gap-5">
            <Card title="Area Chart">
                <AreaChart data={TestData} metrics={["uv", "pv", "amt"]} dimensions={["name"]}></AreaChart>
            </Card>
            <Card title="Scatter Chart">
                <ScatterChart data={TestData} xKey={"uv"} yKey={"pv"}></ScatterChart>
            </Card>
        </div>

        <br></br>
        <div className="grid grid-cols-2 gap-5">
            <Card title="Bubble Chart">
                <BubbleChart data={TestData} xKey={"uv"} yKey={"pv"} dataKey={"amt"}></BubbleChart>
            </Card>
            <Card title="Pie Chart">
                <PieChart data={TestData} metrics={["uv"]} dimensions={["name"]}></PieChart>
            </Card>
        </div>
    </>
);

Primary.args = {
};