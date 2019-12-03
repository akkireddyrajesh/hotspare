import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IndentService } from 'src/app/services/apiServices/indent.service';


@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder,private _indentService:IndentService) { }
  columnDefs = [
    { headerName: 'indent Detail Id', field: 'indentDetailId' },
    { headerName: 'indentId', field: 'indentId' },
    // { headerName: 'productCode', field: 'productCode' },
    // { headerName: 'barCode', field: 'barCode' },
    // { headerName: 'productDescription', field: 'productDescription' },
    // { headerName: 'noOfUnits', field: 'noOfUnits' },
    // { headerName: 'unitPrice', field: 'unitPrice' },
    // { headerName: 'total_price', field: 'total_price' },
    // { headerName: 'creationDate', field: 'creationDate' },
    // { headerName: 'createdBy', field: 'createdBy' },
    // { headerName: 'updatedDate', field: 'updatedDate' },
    // { headerName: 'updatedBy', field: 'updatedBy' },
  ];
  rowData = [
    {
      "indentDetailId":"dfgh",
      "indentId":"dfgh"
    }
  ];

  ngOnInit() {
    this.getAllPriceList();

  }
  getAllPriceList(){
    // this.rowData = data['response Date List'];
  }
}
