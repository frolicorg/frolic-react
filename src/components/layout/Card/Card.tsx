import React, { ReactNode } from "react";
import { CardProps } from "./Card.types";

const Card: React.FC<CardProps> = ({
  title,
  children,
  ...props
}) => {
  return (
    <div className="p-2 rounded-lg border-2 border-gray-300 w-full h-full">
      {title != "" &&
        <div className="font-medium text-gray-700">{title}</div>
      }
      {children}
    </div>
  );
};

export default Card;
