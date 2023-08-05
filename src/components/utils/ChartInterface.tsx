export interface ChartInterface {
    data: any[];
    dimensions: string[];
    metrics: string[];
    className?: string;
    colors?: string[];
    margin?: Margin;
}

export interface ScatterChartInterface {
    data: any[];
    metrics: string[];
    xKey: string;
    yKey: string;
    className?: string;
    colors?: string[];
    margin?: Margin;
}

interface Margin {
    top: number,
    left: number,
    right: number;
    bottom: number;
}