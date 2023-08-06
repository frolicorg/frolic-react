import React from "react";
import { ScatterChartProps } from "./ScatterChart.types";
import { CartesianGrid, Legend, Scatter, ResponsiveContainer, Tooltip, XAxis, YAxis, ScatterChart as RScatterChart } from "recharts";
import { DefaultMargins, QualitativeColorPallete } from "components/utils/DefaultParemeters";
import { FrolicTooltip, numericValueFormatter } from "components/utils/AxisFormatter";

const ScatterChart: React.FC<ScatterChartProps> = ({
  data,
  xKey: xDimension,
  yKey: yDimension,
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

        </RScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScatterChart;
