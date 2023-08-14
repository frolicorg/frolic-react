import React from 'react';
import { TooltipProps } from 'recharts';

export const numericValueFormatter = (value: number) => {
    const absValue = Math.abs(value);

    if (absValue >= 1e9) {
        return (value / 1e9).toFixed(2) + 'B';
    } else if (absValue >= 1e6) {
        return (value / 1e6).toFixed(2) + 'M';
    } else if (absValue >= 1e3) {
        return (value / 1e3).toFixed(2) + 'K';
    } else {
        return value.toFixed(2);
    }
};

interface CustomTooltipProps {
    active?: boolean;
    payload?: any[];
    label?: string;
}

export const FrolicTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white rounded-lg p-4 shadow-md">

                {
                    label != undefined &&
                    <>
                        <p className="font-medium">{`${label}`}</p>
                        <div className='my-1'></div>
                    </>
                }

                {payload.map((entry , index) => (
                    <div className='flex flex-row gap-1 items-center'>
                        <div className='w-1 h-4 rounded-sm' style={{ background: entry.color }}>
                        </div>
                        <p key={`value-${index}`}>
                            {`${entry.name}: ${entry.value}`}
                        </p>
                    </div>
                ))}
            </div>
        );
    }

    return null;
}