import React, { ReactNode } from "react";
import { MetricLargeProps } from "./MetricLarge.types";

const MetricLarge: React.FC<MetricLargeProps> = ({
  className,
  value,
  ...props
}) => {
  return (
    <div className="font-bold text-2xl">
      {value}
    </div>
  );
};

export default MetricLarge;
