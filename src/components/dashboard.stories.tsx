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

const meta: Meta<typeof AreaChart> = {
    component: AreaChart,
    title: "Frolic/Dashboard",
    argTypes: {},
};
export default meta;

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

export const Primary: Story<AreaChartProps> = (args: AreaChartProps) => (
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
                <MetricLarge value={100}></MetricLarge>
                <LineChart data={data} metrics={["uv", "pv", "amt"]} dimensions={["name"]}></LineChart>
            </Card>
            <Card title="Bar Chart">
                <BarChart data={data} metrics={["uv", "pv", "amt"]} dimensions={["name"]}></BarChart>
            </Card>
        </div>

        <br></br>
        <div className="grid grid-cols-2 gap-5">
            <Card title="Area Chart">
                <AreaChart data={data} metrics={["uv", "pv", "amt"]} dimensions={["name"]}></AreaChart>
            </Card>
            <Card title="Scatter Chart">
                <ScatterChart data={data} metrics={["uv", "pv", "amt"]} xKey={"uv"} yKey={"pv"}></ScatterChart>
            </Card>
        </div>

        <br></br>
        <div className="grid grid-cols-2 gap-5">
            <Card title="Scatter Chart">
                <ScatterChart data={data} metrics={["uv", "pv", "amt"]} xKey={"uv"} yKey={"pv"}></ScatterChart>
            </Card>
            <Card title="Bubble Chart">
                <BubbleChart data={data} metrics={["uv", "pv", "amt"]} xKey={"uv"} yKey={"pv"} dataKey={"amt"}></BubbleChart>
            </Card>
        </div>


        <br></br>
        <div className="grid grid-cols-2 gap-5">
            <Card title="Pie Chart">
                <PieChart data={data} metrics={["uv"]} dimensions={["name"]}></PieChart>
            </Card>
        </div>
    </>
);

Primary.args = {
};