import React from 'react';

export const ContinousColorPallete = ['#fff7fb', '#ece7f2', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#045a8d', '#023858'];
export const DivergentColorPallete = ['#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027'];
export const QualitativeColorPallete = ["#1192e8", "#fa4d56", "#6929c4", "#9f1853", "#005d5d", "#570408", "#198038", "#002d9c", "#ee538b"];

export const DivergentColorPalleteGradient = (
    <defs>
        {DivergentColorPallete.map((color, index) => (
            <linearGradient key={index} id={`color${index}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.8} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
            </linearGradient>
        ))}
    </defs>
);

