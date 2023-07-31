export interface ChartInterface {
    data: any[];
    dimensions: string[];
    metrics: string[];
    colors?: string[];
}

export interface ScatterChartInterface {
    data: any[];
    metrics: string[];
    xKey: string;
    yKey: string;
    colors?: string[];
}