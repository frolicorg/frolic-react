export interface FrolicResponse {
    data: any[],
}

export interface FrolicRequest {
    metrics?: Metric[],
    dimensions?: Dimension[],
    filters?: Filter[]
}

export interface Metric {
    field: string,
    aggregate_operator?: string,
    name?: string
}

export interface Dimension {
    field: string,
    transformation?: string,
    name?: string
}

export interface Filter {
    dimension: Dimension,
    filter_operator: string,
    filter_value: string,
}