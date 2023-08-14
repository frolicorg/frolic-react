import React from "react";
import { LineChartProps } from "./LineChart.types";
import { CartesianGrid, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, LineChart as RLineChart } from "recharts";
import { DefaultMargins, QualitativeColorPallete } from "components/utils/DefaultParemeters";
import { FrolicTooltip, numericValueFormatter } from "components/utils/AxisFormatter";

const LineChart: React.FC<LineChartProps> = ({
  data,
  metrics,
  dimensions,
  labelNames,
  dimensionsNames,
  className = "w-full h-80",
  colors = QualitativeColorPallete,
  margin = DefaultMargins,
  ...props
}) => {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <RLineChart
          data={data}
          margin={margin}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={dimensions[0]} />
          <YAxis tickFormatter={numericValueFormatter} />
          <Tooltip content={<FrolicTooltip />} />
          <Legend iconType="circle" />

          {metrics.map((metric, index) => (
            <>
              <Line key={index} dataKey={metric} stroke={colors[index % colors.length]} strokeWidth={2} activeDot={{ r: 4 }} />
            </>
          ))}

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
                  : typedEntry[dimensions[0]]; // Assuming the first dimension is used as the label

                return [customDimensionName, customLabelName, value];
              }}
              labelFormatter={() => null}
              separator=""
              position={{ x: 0, y: 0 }}
            />
          ))}

        </RLineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
