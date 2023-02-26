import { Component, OnInit } from "@angular/core";
import Chart from 'chart.js';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { BaseResponse } from "./models/response/baseResponse";
import { CreateProductItem } from "./models/request/product.item";
import { ProductTypeRequest } from "./models/request/create.product.type";

@Component({
  selector: "app-product",
  templateUrl: "product.component.html"
})
export class ProductComponent implements OnInit {
  public canvas : any;
  public ctx;
  public datasets: any;
  public dataset_labels: any;
  public data: any;
  public data_labels: any;
  public myChartData;
  public addProduct: boolean = true;
  public addProductType: boolean = false;
  public clicked2: boolean = false;

  public typeProductTypeName = ""
  public typeStoreID = 0;
  public typeCompanyID = 0;
  
  public productProductName = "";
  public productProductTypeName = "";
  public productProductTypeID = 0;
  public productCostPrice = 0;
  public productSalePrice = 0;
  public productOriginCountry = "";
  public productOriginCurrencyCode = "";
  public productCustomreShouldSetValue = false;
  public productStoreID = 0;
  public productCompanyID = 0;
  public productBarcode = "";
  public productSupplierName = "";
  public productVolume = 0;
  public productMeasurementUnit = "";

  readonly ROOT_URL = "https://robosky-production.up.railway.app";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    var gradientChartOptionsConfigurationWithTooltipBlue: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#2380f7"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#2380f7"
          }
        }]
      }
    };

    var gradientChartOptionsConfigurationWithTooltipPurple: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(225,78,202,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }]
      }
    };

    var gradientChartOptionsConfigurationWithTooltipRed: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(233,32,16,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }]
      }
    };

    var gradientChartOptionsConfigurationWithTooltipOrange: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 110,
            padding: 20,
            fontColor: "#ff8a76"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(220,53,69,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#ff8a76"
          }
        }]
      }
    };

    var gradientChartOptionsConfigurationWithTooltipGreen: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(0,242,195,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }]
      }
    };


    var gradientBarChartConfiguration: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 120,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }],

        xAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }]
      }
    };

    this.canvas = document.getElementById("chartLineRed");
    this.ctx = this.canvas.getContext("2d");

    var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
    gradientStroke.addColorStop(0, 'rgba(233,32,16,0)'); //red colors

    var data = {
      labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      datasets: [{
        label: "Data",
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#ec250d',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#ec250d',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#ec250d',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: [80, 100, 70, 80, 120, 80],
      }]
    };

    var myChart = new Chart(this.ctx, {
      type: 'line',
      data: data,
      options: gradientChartOptionsConfigurationWithTooltipRed
    });


    this.canvas = document.getElementById("chartLineGreen");
    this.ctx = this.canvas.getContext("2d");


    var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
    gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
    gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors

    var data = {
      labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV'],
      datasets: [{
        label: "My First dataset",
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#00d6b4',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#00d6b4',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#00d6b4',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: [90, 27, 60, 12, 80],
      }]
    };

    var myChart = new Chart(this.ctx, {
      type: 'line',
      data: data,
      options: gradientChartOptionsConfigurationWithTooltipGreen

    });



    var chart_labels = ['SHU','JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    var chart_label_cust = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    this.dataset_labels = [
      chart_label_cust,
      chart_labels,
      chart_labels
    ]
    this.datasets = [
      [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120],
      [1000, 100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100],
      [1, 60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130]
    ];
    this.data = this.datasets[0];
    this.data_labels = this.dataset_labels[0]




    this.canvas = document.getElementById("chartBig1");
    this.ctx = this.canvas.getContext("2d");

    var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
    gradientStroke.addColorStop(0, 'rgba(233,32,16,0)'); //red colors

    var config = {
      type: 'line',
      data: {
        labels: this.data_labels,
        datasets: [{
          label: "My First dataset",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#ec250d',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#ec250d',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#ec250d',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: this.data,
        }]
      },
      options: gradientChartOptionsConfigurationWithTooltipRed
    };
    this.myChartData = new Chart(this.ctx, config);


    this.canvas = document.getElementById("CountryChart");
    this.ctx  = this.canvas.getContext("2d");
    var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
    gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors


    var myChart = new Chart(this.ctx, {
      type: 'bar',
      responsive: true,
      legend: {
        display: false
      },
      data: {
        labels: ['USA', 'GER', 'AUS', 'UK', 'RO', 'BR'],
        datasets: [{
          label: "Countries",
          fill: true,
          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: '#1f8ef1',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: [53, 20, 10, 80, 100, 45],
        }]
      },
      options: gradientBarChartConfiguration
    });

  }

  roboSkyObservableResponse: Observable<BaseResponse>;
  baseProductBarcodeResponse: BaseResponse;

  public updateOptions() {
    this.myChartData.data.datasets[0].data = this.data;
    this.myChartData.data.labels = this.data_labels;
    this.myChartData.update();
  }

  // Setting Type parameters
  public setTypeProductTypeName(val) {
    this.typeProductTypeName = val;
    console.log(val);
  }

  public setTypeStoreID(val) {
    this.typeStoreID = val;
    console.log(val);
  }

  public setTypeCompanyID(val) {
    this.typeCompanyID = val;
    console.log(val);
  }


  // Setting Product parameters

  public setProductProductName(val) {
    this.productProductName = val;
    this.productProductTypeID = this.productProductTypeID;
    console.log(val);
  }

  public setProductProductType(val) {
    this.productProductTypeName = val;
    console.log(val);
  }

  public setProductCostPrice(val) {
    this.productCostPrice = val;
    console.log(val);
  }

  public setProductSalePrice(val) {
    this.productSalePrice = val;
    console.log(val);
  }

  public setProductOriginCountry(val) {
    this.productOriginCountry = val;
    console.log(val);
  }

  public setProductOriginCurrencyCode(val) {
    this.productOriginCurrencyCode = val;
    console.log(val);
  }

  public setProductCustomreShouldSetValue(val) {
    this.productCustomreShouldSetValue = val;
    console.log(val);
  }

  public setProductStoreID(val) {
    this.productStoreID = val;
    console.log(val);
  }

  public setProductCompanyID(val) {
    this.productCompanyID = val;
    console.log(val);
  }

  public setProductBarcode(val) {
    this.productBarcode = val;
    console.log(val);
  }

  public setProductSupplierName(val) {
    this.productSupplierName = val;
    console.log(val);
  }

  public setProductVolume(val) {
    this.productVolume = val;
    console.log(val);
  }

  public setProductMeasurementUnit(val) {
    this.productMeasurementUnit = val;
    console.log(val);
  }

  public setAllProductData(baseResponse: BaseResponse) {
    if(baseResponse != null) {
      this.baseProductBarcodeResponse = baseResponse;
      this.setProductProductName(baseResponse.result.baseProduct.productName);
      this.setProductProductType(baseResponse.result.baseProduct.productTypeID);
      this.setProductOriginCountry("ZA")
      this.setProductOriginCurrencyCode("ZAR")
      this.setProductVolume(baseResponse.result.baseProduct.volume);
      this.setProductMeasurementUnit(baseResponse.result.baseProduct.measurementUnit);
    }
  }


  public getByBarcode(){
    console.log(this.productBarcode);
    if(this.productBarcode != "") {
      this.roboSkyObservableResponse = this.http.get<BaseResponse>(this.ROOT_URL + '/api/product/baseProduct/'+ this.productBarcode);
      this.roboSkyObservableResponse.subscribe(value => this.setAllProductData(value));
    }
  }

  public createProductType(){
    const productType: ProductTypeRequest = {
      productTypeName: this.typeProductTypeName,
      storeID: 1,
      companyID: 2,
      employeeID: "io19Oqit07a1qnJfW8V6oYmXYF32"
    };

    if(this.productTypeIsReadyToCreate()) {
      console.log("I am about to add a type");
      console.log(productType);
      this.roboSkyObservableResponse = this.http.post<BaseResponse>(this.ROOT_URL + '/api/product/productType', productType);
      this.roboSkyObservableResponse.subscribe(value => console.log(value));
    } else {
      console.log("I didnt try to add");
    }
  }


  public createProduct(){
    const product: CreateProductItem = {
      productTypeID: this.productProductTypeID,
      productName: this.productProductName,
      costPrice: this.productCostPrice,
      salePrice: this.productSalePrice,
      originCountry: this.productOriginCountry,
      originCurrencyCode: this.productOriginCurrencyCode,
      customerShouldSetValue: this.productCustomreShouldSetValue,
      storeID: 1,
      companyID: 2,
      supplierID: this.productBarcode,
      supplierName: this.productSupplierName,
      volume: this.productVolume,
      measurementUnit: this.productMeasurementUnit,
      employeeID: "io19Oqit07a1qnJfW8V6oYmXYF32"
    };

    if(this.productIsReadyToCreate()) {
      console.log("I am about to add");
      console.log(product);
      this.roboSkyObservableResponse = this.http.post<BaseResponse>(this.ROOT_URL + '/api/product/product', product);
      this.roboSkyObservableResponse.subscribe(value => console.log(value));
    } else {
      console.log("I didnt try to add");
    }
  }

  typeProductTypeNameSuccess = false;
  typeStoreIDSuccess = false;
  typeCompanyIDSuccess = false;

  private productTypeIsReadyToCreate() {
    if(this.typeProductTypeName != null && this.typeProductTypeName.localeCompare("") != 0) {
      this.typeProductTypeNameSuccess = true;
    }
    if(this.typeStoreID != null && this.typeStoreID > 0) {
      this.typeStoreIDSuccess = true;
    }
    if (this.typeCompanyID != null && this.typeCompanyID > 0) {
      this.typeCompanyIDSuccess = true;
    }

    if(this.typeProductTypeNameSuccess &&
      this.typeStoreIDSuccess &&
      this.typeCompanyIDSuccess) {
        return true;
    }
    return false;
  }

  productProductTypeIDSuccess = false;
  productProductNameSuccess = false;
  productSalePriceSuccess = false;
  productOriginCountrySuccess = false;
  productOriginCurrencyCodeSuccess = false;
  productStoreIDSuccess = false;
  productCompanyIDSuccess = false;
  productSupplierNameSuccess = false;
  productVolumeSuccess = false;
  productMeasurementUnitSuccess = false;



  private productIsReadyToCreate(){
    if (this.productProductTypeID != null && this.productProductTypeID > 0) {
      this.productProductTypeIDSuccess = true;
      console.log("productType true")
    }
    if(this.productProductName != null && this.productProductName.localeCompare("") != 0) {
      this.productProductNameSuccess = true;
      console.log("productName true")
    }
    if(this.productSalePrice != null && this.productSalePrice > 0) {
      this.productSalePriceSuccess = true;
      console.log("productSale true")
    }
    if(this.productOriginCountry != null && this.productOriginCountry.localeCompare("") != 0) {
      this.productOriginCountrySuccess = true;
      console.log("productOrigin true")
    }
    if (this.productOriginCurrencyCode != null && this.productOriginCurrencyCode.localeCompare("") != 0){
      this.productOriginCurrencyCodeSuccess = true;
      console.log("productCurren true")
    }
    if (this.productStoreID != null && this.productStoreID > 0) {
      this.productStoreIDSuccess = true;
      console.log("productStore true")
    }
    if (this.productCompanyID != null && this.productCompanyID > 0) {
      this.productCompanyIDSuccess = true;
      console.log("productComp true")
    }
    if (this.productSupplierName != null && this.productSupplierName.localeCompare("") != 0) {
      this.productSupplierNameSuccess = true;
      console.log("productSupName true")
    }
    if (this.productVolume != null && this.productVolume > 0) {
      this.productVolumeSuccess = true;
      console.log("productVolu true")
    }
    if (this.productMeasurementUnit != null && this.productMeasurementUnit.localeCompare("") != 0) {
      this.productMeasurementUnitSuccess = true;
      console.log("productUnit true")
    }

    if(this.productProductTypeIDSuccess && 
      this.productProductNameSuccess && 
      this.productSalePriceSuccess &&
      this.productOriginCountrySuccess &&
      this.productOriginCurrencyCodeSuccess &&
      this.productStoreIDSuccess &&
      this.productCompanyIDSuccess &&
      this.productSupplierNameSuccess &&
      this.productVolumeSuccess &&
      this.productMeasurementUnitSuccess) {
        console.log("All True")
        return true;
      }
      console.log("All not True")
      return false;
  }
}
