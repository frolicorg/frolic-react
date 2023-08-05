import React from "react";
import { ScatterChartProps } from "./ScatterChart.types";
import { CartesianGrid, Legend, Scatter, ResponsiveContainer, Tooltip, XAxis, YAxis, ScatterChart as RScatterChart } from "recharts";
import { DefaultMargins, QualitativeColorPallete } from "components/utils/DefaultParemeters";
import { numericValueFormatter } from "components/utils/AxisFormatter";

const ScatterChart: React.FC<ScatterChartProps> = ({
  data,
  metrics,
  xKey: xDimension,
  yKey: yDimension,
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

export default ScatterChart;
