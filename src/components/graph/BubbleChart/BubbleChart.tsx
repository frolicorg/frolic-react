import React from "react";
import { BubbleChartProps } from "./BubbleChart.types";
import { CartesianGrid, Legend, Scatter, ResponsiveContainer, Tooltip, XAxis, YAxis, ScatterChart as RScatterChart, ZAxis } from "recharts";
import { DefaultMargins, QualitativeColorPallete } from "components/utils/DefaultParemeters";
import { FrolicTooltip, numericValueFormatter } from "components/utils/AxisFormatter";

const BubbleChart: React.FC<BubbleChartProps> = ({
  data,
  xKey: xDimension,
  yKey: yDimension,
  labelNames,
  dimensionsNames,
  dataKey = "",
  className = "w-full h-80",
  colors = QualitativeColorPallete,
  margin = DefaultMargins,
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
          margin={margin}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xDimension} tickFormatter={numericValueFormatter} />
          <YAxis dataKey={yDimension} tickFormatter={numericValueFormatter} />
          <ZAxis dataKey={dataKey} domain={domain} range={range} />
          <Tooltip content={<FrolicTooltip />} />
          <Legend iconType="circle" />
          <Scatter name={dataKey} dataKey={dataKey} fill={colors[0 % colors.length]} />
          {dimensionsNames.map((dimensionName, index) => (
            <Tooltip
              key={index}
              contentStyle={{ backgroundColor: "#fff", border: "1px solid #ccc" }}
              formatter={(value, name, entry) => {
                const customDimensionName = dimensionsNames && dimensionsNames[index]
                  ? dimensionsNames[index]
                  : name;
                  const typedEntry = entry as any;
                const customLabelName = labelNames && labelNames[index]
                  ? labelNames[index]
                  : typedEntry[dataKey]; // Assuming the dataKey is used as the label

                return [customDimensionName, customLabelName, value];
              }}
              labelFormatter={() => null}
              separator=""
              position={{ x: 0, y: 0 }}
            />
          ))}
        </RScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BubbleChart;