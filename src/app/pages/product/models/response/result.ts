import { BaseProduct } from "./base.product";
import { Product } from "./product";

export interface Result {
    product: Product;
    baseProduct: BaseProduct;
    productTypeDetail: Object;
}