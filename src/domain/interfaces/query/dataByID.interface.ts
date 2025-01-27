import { Struct } from "./query.interface";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IResponseDataByID {
    id:                               string;
    site_id:                          string;
    title:                            string;
    seller_id:                        number;
    category_id:                      string;
    official_store_id:                number;
    price:                            number;
    base_price:                       number;
    original_price:                   null;
    currency_id:                      string;
    initial_quantity:                 number;
    sale_terms:                       Attribute[];
    buying_mode:                      string;
    listing_type_id:                  string;
    condition:                        string;
    permalink:                        string;
    thumbnail_id:                     string;
    thumbnail:                        string;
    pictures:                         Picture[];
    video_id:                         null;
    descriptions:                     any[];
    accepts_mercadopago:              boolean;
    non_mercado_pago_payment_methods: any[];
    shipping:                         ShippingByID;
    international_delivery_mode:      string;
    seller_address:                   SellerAddress;
    seller_contact:                   null;
    location:                         object;
    coverage_areas:                   any[];
    attributes:                       Attribute[];
    listing_source:                   string;
    variations:                       any[];
    status:                           string;
    sub_status:                       any[];
    tags:                             string[];
    warranty:                         string;
    catalog_product_id:               string;
    domain_id:                        string;
    parent_item_id:                   null;
    deal_ids:                         any[];
    automatic_relist:                 boolean;
    date_created:                     Date;
    last_updated:                     Date;
    health:                           null;
    catalog_listing:                  boolean;
}

export interface Attribute {
    id:            string;
    name:          string;
    value_id:      null | string;
    value_name:    string;
    values:        ValueByID[];
    value_type:    ValueType;
    value_struct?: Struct | null;
}



export enum ValueType {
    Boolean = "boolean",
    List = "list",
    Number = "number",
    NumberUnit = "number_unit",
    String = "string",
}

export interface ValueByID {
    id:     null | string;
    name:   string;
    struct: Struct | null;
}


export interface Picture {
    id:         string;
    url:        string;
    secure_url: string;
    size:       string;
    max_size:   string;
    quality:    string;
}

export interface SellerAddress {
    city:            City;
    state:           City;
    country:         City;
    search_location: SearchLocation;
    id:              number;
}

export interface City {
    id:   string;
    name: string;
}

export interface SearchLocation {
    neighborhood: City;
    city:         City;
    state:        City;
}

export interface ShippingByID {
    mode:          string;
    methods:       any[];
    tags:          string[];
    dimensions:    null;
    local_pick_up: boolean;
    free_shipping: boolean;
    logistic_type: string;
    store_pick_up: boolean;
}
