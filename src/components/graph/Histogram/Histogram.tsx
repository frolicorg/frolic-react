import React from "react";
import { HistogramProps } from "./Histogram.types";

const Histogram: React.FC<HistogramProps> = ({
  size,
  primary,
  disabled,
  text,
  onClick,
  ...props
}) => {
  return (
    <div>
      Test
    </div>
  );
};

export default Histogram;
