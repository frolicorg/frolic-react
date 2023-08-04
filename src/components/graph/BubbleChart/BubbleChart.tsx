import React from "react";
import { BubbleChartProps } from "./BubbleChart.types";
import { CartesianGrid, Legend, Scatter, ResponsiveContainer, Tooltip, XAxis, YAxis, ScatterChart as RScatterChart, ZAxis } from "recharts";
import { DivergentColorPallete } from "components/utils/DefaultParemeters";

const BubbleChart: React.FC<BubbleChartProps> = ({
  data,
  metrics,
  xKey: xDimension,
  yKey: yDimension,
  dataKey,
  className = "w-full h-80",
  colors = DivergentColorPallete,
  ...props
}) => {
  const range = [16, 225];
  const domain = getAttributeRange(data, dataKey);

  function getAttributeRange(dataList: any[], attributeName: string): number[] {
    // Function implementation as provided in the previous answer
    // ...
    if (!dataList || dataList.length === 0) {
      return [0, 0];
    }

    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;

    for (const data of dataList) {
      const attributeValue = data[attributeName];
      if (typeof attributeValue === 'number') {
        min = Math.min(min, attributeValue);
        max = Math.max(max, attributeValue);
      }
    }

    if (min === Number.MAX_VALUE || max === Number.MIN_VALUE) {
      return [0, 0];
    }

    return [min, max];
  }

  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <RScatterChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 15,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xDimension} />
          <YAxis dataKey={yDimension} />
          <ZAxis dataKey={dataKey} domain={domain} range={range} />
          <Tooltip />
          <Legend iconType="circle" />

          {metrics.map((metric, index) => (
            <Scatter key={index} name={metric} dataKey={metric} fill={colors[index % colors.length]} />
          ))}

        </RScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BubbleChart;