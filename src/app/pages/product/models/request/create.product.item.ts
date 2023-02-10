export interface CreateProductItem {
    productTypeID: number
    productName: String
    costPrice: number
    salePrice: number
    originCountry: String
    originCurrencyCode: String
    customerShouldSetValue: boolean
    storeID: number
    companyID: number
    supplierID: String
    supplierName: String
    volume: number
    measurementUnit: String
    employeeID: String
}