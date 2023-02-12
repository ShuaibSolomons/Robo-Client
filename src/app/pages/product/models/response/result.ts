import { BaseProduct } from "./base.product";
import { DashboardDataResponse } from "./dashboard.data.response";
import { Product } from "./product";

export interface Result {
    product: Product;
    baseProduct: BaseProduct;
    productTypeDetail: Object;
    dashboardResponse: DashboardDataResponse;
}