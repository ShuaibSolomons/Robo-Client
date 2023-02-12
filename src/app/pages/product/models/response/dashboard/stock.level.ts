import { ProductStoreStock } from "./product.store.stock";

export interface StockLevel {
    highStock: ProductStoreStock[];
    lowStock: ProductStoreStock[];
}