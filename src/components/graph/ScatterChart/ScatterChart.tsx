import React from "react";
import { ScatterChartProps } from "./ScatterChart.types";
import { CartesianGrid, Legend, Scatter, ResponsiveContainer, Tooltip, XAxis, YAxis, ScatterChart as RScatterChart } from "recharts";
import { DefaultMargins, QualitativeColorPallete } from "components/utils/DefaultParemeters";
import { FrolicTooltip, numericValueFormatter } from "components/utils/AxisFormatter";

const ScatterChart: React.FC<ScatterChartProps> = ({
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
          <Tooltip content={<FrolicTooltip />} />
          <Legend iconType="circle" />

          <Scatter name={dataKey} fill={colors[0 % colors.length]} />
          {dimensionsNames.map((dimensionName, index) => (
            <Tooltip
              key={index}
              contentStyle={{ backgroundColor: "#fff", border: "1px solid #ccc" }}
              formatter={(value, name, entry)  => {
                const customDimensionName = dimensionsNames && dimensionsNames[index]
                  ? dimensionsNames[index]
                  : name;
                  const typedEntry = entry as any;
                const customLabelName = labelNames && labelNames[index]
                  ? labelNames[index]
                  : typedEntry[dataKey];

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

export default ScatterChart;
