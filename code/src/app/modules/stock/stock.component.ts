import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StockService } from 'src/app/services/apiServices/stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})


  export class StockComponent implements OnInit {
    
    

  constructor(private _formBuilder: FormBuilder,private _stockService:StockService) { }
  rowData = [];
  columnDefs = [
    { headerName: 'depotInvId', field: 'depotInvId' },
    { headerName: 'productCode', field: 'productCode' },
    { headerName: 'productType', field: 'productType' },
    { headerName: 'brandName', field: 'brandName' },
    { headerName: 'openingBalance', field: 'openingBalance' },
    { headerName: 'sales', field: 'sales' },
    { headerName: 'closingBalance', field: 'closingBalance' },
    { headerName: 'breakages', field: 'breakages' },
     { headerName: 'shortages', field: 'shortages' }
  ];

  // rowData = [
  //    {
  //      "sno":"1", 
  //      "Date":"22-02-1999",
  //      "productCode":"1234",
  //      "BrandName":"jagadesh",
  //      "Size(ml)":150,
  //      "OpeningBalance(btls)":2000,
  //      "Receipts(btls)":20,
  //      "Sales(btls)":50000,
  //      "Breakages(btls)":200,
  //      "Shortages(btls)":1000,
  //      "ClosingBalance(btls)":20000
  //    }

  // ];
 

  ngOnInit() {
    // fetch('https://fakerestapi.azurewebsites.net/api/Books')
    //   .then(result => result.json())
    //   .then(rowData => this.rowData = rowData);
    const obj = {
      "pageInfo":{
       "pageNumber":0,
       "pageSize":5
      },
      "requestData":null
    };      
    this.getAllStock(obj);
    //console.log("st", this.rowData)
    //this.rowData=['1,27,27,24,24,24,24,24,24,24,24'];
  }
  getAllStock(obj){
    this._stockService.getAllStocks(obj).subscribe(data=>{
      this.rowData = data['response Date List'];
    })
  }
  serchByProductName(value){
    const obj = {
      "pageInfo":{
       "pageNumber":0,
       "pageSize":5
      },
      "requestData":{
        "productCode":value
       }
    };
    this.getAllStock(obj);
  }
}



  
  