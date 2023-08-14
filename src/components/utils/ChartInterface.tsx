export interface ChartInterface {
    data: any[];
    dimensions: string[];
    metrics: string[];
    labelNames: string[];
    dimensionsNames: string[];
    className?: string;
    colors?: string[];
    margin?: Margin;
}

export interface ScatterChartInterface {
    data: any[];
    xKey: string;
    yKey: string;
    labelNames: string[];
    dimensionsNames: string[];
    dataKey?: string;
    className?: string;
    colors?: string[];
    margin?: Margin;
}

export interface Margin {
    top: number,
    left: number,
    right: number;
    bottom: number;
}