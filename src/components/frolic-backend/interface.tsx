export interface FrolicResponse {
    data: any[],
}

export interface FrolicRequest {
    metrics?: Metric[],
    dimensions?: Dimension[],
    filters?: Filter[],
    orderby?: OrderBy,
    limit?: number,
}

export interface Metric {
    field: string,
    aggregate_operator?: string,
    name?: string,
    distinct?: boolean
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

export interface OrderBy {
    field: string[],
    order: string
}