import React from "react";
import { LineChartProps } from "./LineChart.types";
import { CartesianGrid, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, LineChart as RLineChart } from "recharts";
import { QualitativeColorPallete } from "components/utils/DefaultParemeters";

const LineChart: React.FC<LineChartProps> = ({
  data,
  metrics,
  dimensions,
  className = "w-full h-80",
  colors = QualitativeColorPallete,
  ...props
}) => {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <RLineChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 15,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={dimensions[0]} />
          <YAxis />
          <Tooltip />
          <Legend iconType="circle" />

          {metrics.map((metric, index) => (
            <>
              <Line key={index} dataKey={metric} stroke={colors[index % colors.length]} strokeWidth={2} activeDot={{ r: 4 }} />
            </>
          ))}

        </RLineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
