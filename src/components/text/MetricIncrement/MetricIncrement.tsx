import React, { ReactNode } from "react";
import { MetricIncrementProps } from "./MetricIncrement.types";
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/outline';

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
            <ArrowUpIcon width={15} height={15} className="text-green-600"></ArrowUpIcon>
          </>
          :
          <>
            <ArrowDownIcon width={15} height={15} className="text-red-600"></ArrowDownIcon>
          </>
      }

      {
        value! && <>{value}</>
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
