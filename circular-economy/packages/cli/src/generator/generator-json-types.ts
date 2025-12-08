export interface CircularEconomyJson {
    metadata: Metadata;
    metrics: Metrics;
    graph: Graph;
}

export interface Metadata {
    economyName: string;
    generatedAt: string;
    generator: string;
    schemaVersion: string;
}

export interface Metrics {
    counts: CountsMetrics;
    lifecycle: LifecycleMetrics;
    aggregates: AggregatesMetrics;
    byFacility: Record<string, FacilityMetrics>;
    byRetailer: Record<string, RetailerMetrics>;
    byProductType: Record<string, ProductTypeMetrics>;
    byConsumer: Record<string, ConsumerMetrics>;
    byManufacturer: Record<string, ManufacturerMetrics>;
    timeSeries: TimeSeriesMetrics;
    goalComplianceByFacility: GoalComplianceByFacility;
    shipmentMetrics: ShipmentMetrics;
}

export interface Graph {
    nodes: GraphNode[];
    edges: GraphEdge[];
}

export interface NumericRange {
    avg: number;
    min: number;
    max: number;
}

export interface FacilityCounts {
    total: number;
    recycle: number;
    repair: number;
    refurbish: number;
}

export interface ProcessCounts {
    total: number;
    recycle: number;
    repair: number;
    refurbish: number;
}

export interface ShipmentCounts {
    total: number;
    delivered: number;
    pending: number;
}

export interface CountsMetrics {
    components: number;
    products: number;
    consumers: number;
    manufacturers: number;
    retailers: number;
    sustainabilityGoals: number;
    orders: number;
    returns: number;
    facilities: FacilityCounts;
    circularProcesses: ProcessCounts;
    shipments: ShipmentCounts;
}

export interface LifecycleMetrics {
    productReturnRate: number;
    orderToReturnDays: NumericRange;
    assemblyToOrderDays: NumericRange;
    assemblyToReturnDays: NumericRange;
}

export interface AggregatesMetrics {
    energySavedKWh: number;
    waterSavedL: number;
    co2Emission: number;
}

export type FacilityType = "RECYCLE" | "REPAIR" | "REFURBISH";

export interface FacilityMetrics {
    type: FacilityType;
    energySavedKWh: number;
    waterSavedL: number;
    co2Emission: number;
    processCount: number;
}

export interface RetailerMetrics {
    orders: number;
    returns: number;
    returnedProductRatio: number;
}

export interface ProductTypeMetrics {
    totalProducts: number;
    avgPrice: number;
    minPrice: number;
    maxPrice: number;
    avgComponentCount: number;
}

export interface ConsumerMetrics {
    orders: number;
    returns: number;
    returnRate: number;
    distinctProductsOrdered: number;
    distinctRetailersUsed: number;
}

export interface ManufacturerMetrics {
    componentCount: number;
    componentsAssembled: number;
    componentsReady: number;
    componentsInCircularProcess: number;
    componentsRecycled: number;
}

export interface TimeSeriesMetrics {
    productsAssembledPerYear: Record<string, number>;
    ordersPerYear: Record<string, number>;
    returnsPerYear: Record<string, number>;
    shipmentsPerYear: Record<string, number>;
    deliveredShipmentsPerYear: Record<string, number>;
}

export type GoalComplianceByFacility = Record<string, Record<string, boolean>>;

export interface DestinationShipmentStats {
    shipments: number;
    deliveredShipments: number;
    totalCo2Emission: number;
}

export interface ShipmentMetrics {
    deliveredRatio: number;
    byDestination: Record<string, DestinationShipmentStats>;
}

export type NodeType =
    | "COMPONENT"
    | "PRODUCT"
    | "CONSUMER"
    | "RETAILER"
    | "MANUFACTURER"
    | "ORDER"
    | "RETURN"
    | "CIRCULAR_PROCESS"
    | "SHIPMENT"
    | "FACILITY"
    | "SUSTAINABILITY_GOAL";

export type EdgeType =
    | "PRODUCT_HAS_COMPONENT"
    | "RETAILER_SELLS_PRODUCT"
    | "MANUFACTURER_PRODUCES_COMPONENT"
    | "CONSUMER_PLACES_ORDER"
    | "ORDER_OF_PRODUCT"
    | "RETURN_OF_ORDER"
    | "RETURN_BY_CONSUMER"
    | "RETURN_HAS_PROCESS"
    | "PROCESS_AT_FACILITY"
    | "PROCESS_RECYCLES_COMPONENT"
    | "PROCESS_HAS_SHIPMENT"
    | "SHIPMENT_DESTINATION"
    | "FACILITY_HAS_GOAL";

export interface GraphNode {
    id: string;
    type: NodeType;
    attrs?: Record<string, unknown>;
}

export interface GraphEdge {
    source: string;
    target: string;
    type: EdgeType;
}
