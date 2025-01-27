/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IResponseQuery {
    site_id:                   SiteID;
    country_default_time_zone: string;
    query:                     string;
    paging:                    Paging;
    results:                   Result[];
    sort:                      Sort;
    available_sorts:           Sort[];
    filters:                   Filter[];
    available_filters:         AvailableFilter[];
    pdp_tracking:              PDPTracking;
    user_context:              null;
}

export interface AvailableFilter {
    id:     string;
    name:   string;
    type:   AvailableFilterType;
    values: AvailableFilterValue[];
}

export enum AvailableFilterType {
    Boolean = "boolean",
    List = "list",
    Number = "number",
    Range = "range",
    String = "STRING",
    Text = "text",
}

export interface AvailableFilterValue {
    id:      string;
    name:    string;
    results: number;
}

export interface Sort {
    id:   string;
    name: string;
}

export interface Filter {
    id:     string;
    name:   string;
    type:   AvailableFilterType;
    values: FilterValue[];
}

export interface FilterValue {
    id:              string;
    name:            string;
    path_from_root?: Sort[];
}

export interface Paging {
    total:           number;
    primary_results: number;
    offset:          number;
    limit:           number;
}

export interface PDPTracking {
    group:        boolean;
    product_info: ProductInfo[];
}

export interface ProductInfo {
    id:     string;
    score:  number;
    status: Status;
}

export enum Status {
    Shown = "shown",
}

export interface Result {
    id:                    string;
    title:                 string;
    condition:             Condition;
    thumbnail_id:          string;
    catalog_product_id:    null | string;
    listing_type_id:       ListingTypeID;
    sanitized_title:       string;
    permalink:             string;
    buying_mode:           BuyingMode;
    site_id:               SiteID;
    category_id:           CategoryID;
    domain_id:             DomainID;
    thumbnail:             string;
    currency_id:           CurrencyID;
    order_backend:         number;
    price:                 number;
    original_price:        number | null;
    sale_price:            SalePrice;
    available_quantity:    number;
    official_store_id:     number | null;
    official_store_name?:  OfficialStoreName;
    use_thumbnail_id:      boolean;
    accepts_mercadopago:   boolean;
    shipping:              Shipping;
    stop_time:             Date;
    seller:                Seller;
    address:               Address;
    attributes:            ResultAttribute[];
    installments:          Installments;
    winner_item_id:        null;
    catalog_listing:       boolean;
    discounts:             null;
    promotion_decorations: null;
    promotions:            null;
    inventory_id:          null | string;
    variation_id?:         string;
    variation_filters?:    VariationFilter[];
    variations_data?:      { [key: string]: VariationsDatum };
}

export interface Address {
    state_id:   StateID;
    state_name: StateName;
    city_id:    null | string;
    city_name:  string;
}

export enum StateID {
    ArA = "AR-A",
    ArB = "AR-B",
    ArC = "AR-C",
    ArN = "AR-N",
    ArP = "AR-P",
    ArW = "AR-W",
}

export enum StateName {
    BuenosAires = "Buenos Aires",
    CapitalFederal = "Capital Federal",
    Corrientes = "Corrientes",
    Formosa = "Formosa",
    Misiones = "Misiones",
    Salta = "Salta",
}

export interface ResultAttribute {
    id:                   VariationFilter;
    name:                 Name;
    value_id:             null | string;
    value_name:           null | string;
    attribute_group_id:   AttributeGroupID;
    attribute_group_name: AttributeGroupName;
    value_struct:         Struct | null;
    values:               AttributeValue[];
    source:               number;
    value_type:           Value;
}

export enum AttributeGroupID {
    Others = "OTHERS",
}

export enum AttributeGroupName {
    Otros = "Otros",
}

export enum VariationFilter {
    Brand = "BRAND",
    Color = "COLOR",
    DetailedModel = "DETAILED_MODEL",
    GPUModel = "GPU_MODEL",
    Gtin = "GTIN",
    ItemCondition = "ITEM_CONDITION",
    Line = "LINE",
    MainColor = "MAIN_COLOR",
    Model = "MODEL",
    PackageLength = "PACKAGE_LENGTH",
    PackageWeight = "PACKAGE_WEIGHT",
    ProcessorModel = "PROCESSOR_MODEL",
    Weight = "WEIGHT",
}

export enum Name {
    Color = "Color",
    ColorPrincipal = "Color principal",
    CondiciónDelÍtem = "Condición del ítem",
    CódigoUniversalDeProducto = "Código universal de producto",
    LargoDelPaquete = "Largo del paquete",
    Línea = "Línea",
    Marca = "Marca",
    Modelo = "Modelo",
    ModeloDeGPU = "Modelo de GPU",
    ModeloDelProcesador = "Modelo del procesador",
    ModeloDetallado = "Modelo detallado",
    Peso = "Peso",
    PesoDelPaquete = "Peso del paquete",
}

export interface Struct {
    number: number;
    unit:   Unit;
}

export enum Unit {
    CM = "cm",
    G = "g",
}

export enum Value {
    List = "list",
    NumberUnit = "number_unit",
    String = "string",
}

export interface AttributeValue {
    id:     null | string;
    name:   null | string;
    struct: Struct | null;
    source: number;
}

export enum BuyingMode {
    BuyItNow = "buy_it_now",
}

export enum CategoryID {
    Mla1055 = "MLA1055",
}

export enum Condition {
    New = "new",
}

export enum CurrencyID {
    Ars = "ARS",
}

export enum DomainID {
    MlaCellphones = "MLA-CELLPHONES",
}

export interface Installments {
    quantity:    number;
    amount:      number;
    rate:        number;
    currency_id: CurrencyID;
    metadata:    InstallmentsMetadata;
}

export interface InstallmentsMetadata {
    meliplus_installments:    boolean;
    additional_bank_interest: boolean;
}

export enum ListingTypeID {
    GoldPro = "gold_pro",
    GoldSpecial = "gold_special",
}

export enum OfficialStoreName {
    Apple = "Apple",
    Ferbi = "Ferbi",
    MercadoLibre = "Mercado Libre",
}

export interface SalePrice {
    price_id:              string;
    amount:                number;
    conditions:            Conditions;
    currency_id:           CurrencyID;
    exchange_rate:         null;
    payment_method_prices: any[];
    payment_method_type:   PaymentMethodType;
    regular_amount:        number | null;
    type:                  SalePriceType;
    metadata:              SalePriceMetadata;
}

export interface Conditions {
    eligible:             boolean;
    context_restrictions: ContextRestriction[];
    start_time:           Date | null;
    end_time:             Date | null;
}

export enum ContextRestriction {
    ChannelMarketplace = "channel_marketplace",
}

export interface SalePriceMetadata {
    variation?:                    string;
    order_item_price?:             number;
    promotion_id?:                 string;
    campaign_discount_percentage?: number;
    campaign_end_date?:            Date;
    campaign_id?:                  string;
    discount_meli_amount?:         number;
    experiment_id?:                string;
    funding_mode?:                 string;
    promotion_type?:               PromotionType;
}

export enum PromotionType {
    Campaign = "campaign",
    Custom = "custom",
    MarketplaceCampaign = "marketplace_campaign",
}

export enum PaymentMethodType {
    Tmp = "TMP",
}

export enum SalePriceType {
    Promotion = "promotion",
    Standard = "standard",
}

export interface Seller {
    id:       number;
    nickname: string;
}

export interface Shipping {
    store_pick_up:  boolean;
    free_shipping:  boolean;
    logistic_type:  LogisticType;
    mode:           Mode;
    tags:           Tag[];
    benefits:       null;
    promise:        null;
    shipping_score: number;
}

export enum LogisticType {
    CrossDocking = "cross_docking",
    DropOff = "drop_off",
    Fulfillment = "fulfillment",
    XdDropOff = "xd_drop_off",
}

export enum Mode {
    Me2 = "me2",
}

export enum Tag {
    Fulfillment = "fulfillment",
    MandatoryFreeShipping = "mandatory_free_shipping",
    SelfServiceAvailable = "self_service_available",
    SelfServiceIn = "self_service_in",
    SelfServiceOut = "self_service_out",
}

export enum SiteID {
    Mla = "MLA",
}

export interface VariationsDatum {
    thumbnail:              string;
    ratio:                  string;
    name:                   string;
    pictures_qty:           number;
    price:                  number;
    user_product_id:        string;
    attributes:             VariationsDatumAttribute[];
    attribute_combinations: AttributeCombination[];
}

export interface AttributeCombination {
    id:           VariationFilter;
    name:         Name;
    value_id:     null;
    value_name:   string;
    value_struct: null;
    values:       null;
}

export interface VariationsDatumAttribute {
    id:         VariationFilter;
    name:       Name;
    value_name: Value;
    value_type: string;
}
