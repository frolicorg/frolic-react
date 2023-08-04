import React, { ReactNode } from "react";
import { MetricIncrementProps } from "./MetricIncrement.types";
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon } from '@heroicons/react/24/outline';

const MetricIncrement: React.FC<MetricIncrementProps> = ({
  value,
  percentage,
  description: description,
  ...props
}) => {
  return (
    <div className="font-light text-sm flex flex-row items-center">
      {
        value! >= 0 ?
          <>
            <ArrowTrendingUpIcon width={15} height={15} className="text-green-600"></ArrowTrendingUpIcon>
          </>
          :
          <>
            <ArrowTrendingDownIcon width={15} height={15} className="text-red-600"></ArrowTrendingDownIcon>
          </>
      }

      {
        value! && <>&nbsp;{value}</>
      }

      {
        percentage! && <>{percentage}%</>
      }

      &nbsp;
      {description}
    </div>
  );
};

export default MetricIncrement;
