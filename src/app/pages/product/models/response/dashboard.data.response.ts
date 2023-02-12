import { StockLevel } from "./dashboard/stock.level";
import { StoreTransactionCount } from "./dashboard/store.transaction.count";
import { TopFiveProducts } from "./dashboard/top.five.products";
import { TransactionCount } from "./dashboard/transaction.count";

export interface DashboardDataResponse {
    transactionCount: TransactionCount;
    topFiveProducts: TopFiveProducts;
    storeTransactionCount: StoreTransactionCount;
    stockLevel: StockLevel;
}