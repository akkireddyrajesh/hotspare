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

  columnDefs = [
    { headerName: 'S.NO', field: 'sno' },
    { headerName: 'Date', field: 'Date' },
    { headerName: 'product Code', field: 'productCode' },
    { headerName: 'Brand Name', field: 'BrandName' },
    { headerName: 'Size(ml)', field: 'Size(ml)' },
    { headerName: 'Opening Balance(btls)', field: 'OpeningBalance(btls)' },
    { headerName: 'Receipts(btls)', field: 'Receipts(btls)' },
    { headerName: 'Sales(btls)', field: 'Sales(btls)' },
     { headerName: 'Breakages(btls)', field: 'Breakages(btls)' },
    { headerName: 'Shortages(btls)', field: 'Shortages(btls)' },
    { headerName: 'Closing Balance(btls)', field: 'ClosingBalance(btls)' }
   
  ];

  rowData = [
     {
       "sno":"1", 
       "Date":"22-02-1999",
       "productCode":"1234",
       "BrandName":"jagadesh",
       "Size(ml)":150,
       "OpeningBalance(btls)":2000,
       "Receipts(btls)":20,
       "Sales(btls)":50000,
       "Breakages(btls)":200,
       "Shortages(btls)":1000,
       "ClosingBalance(btls)":20000



       


     }

  ];
 

  ngOnInit() {
    // fetch('https://fakerestapi.azurewebsites.net/api/Books')
    //   .then(result => result.json())
    //   .then(rowData => this.rowData = rowData);
      this.getAllStock();
    //console.log("st", this.rowData)
    //this.rowData=['1,27,27,24,24,24,24,24,24,24,24'];
  }
  getAllStock(){
    // this.rowData = data['response Date List'];
  }
}



  
  