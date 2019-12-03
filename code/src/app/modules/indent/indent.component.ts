import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IndentService } from 'src/app/services/apiServices/indent.service';


@Component({
  selector: 'app-indent',
  templateUrl: './indent.component.html',
  styleUrls: ['./indent.component.css']
})
export class IndentComponent implements OnInit {
  showPopup: boolean;
  indentForm = this._formBuilder.group({
    retailerCode: [0],
    shopName: [''],
    depot: [0],
    depotName: [''],
    contactNumber: [''],
    vehicleNumber: [''],
    description: [''],
    productCode: [''],
    productDescription: [''],
    barCode: [''],
    noOfUnits: [''],
    unitPrice: [''],
    totalPrice: [''],
    authorisedPerson:[''],
    indentCreationDate:['']

  });
  constructor(private _formBuilder: FormBuilder,private _indentService:IndentService) { }

  columnDefs = [
    { headerName: 'indent Detail Id', field: 'indentDetailId' },
    { headerName: 'indentId', field: 'indentId' },
    { headerName: 'productCode', field: 'productCode' },
    { headerName: 'barCode', field: 'barCode' },
    { headerName: 'productDescription', field: 'productDescription' },
    { headerName: 'noOfUnits', field: 'noOfUnits' },
    { headerName: 'unitPrice', field: 'unitPrice' },
    { headerName: 'total_price', field: 'total_price' },
    { headerName: 'creationDate', field: 'creationDate' },
    { headerName: 'createdBy', field: 'createdBy' },
    { headerName: 'updatedDate', field: 'updatedDate' },
    { headerName: 'updatedBy', field: 'updatedBy' },
  ];

  rowData = [];

  ngOnInit() {
    // fetch('https://fakerestapi.azurewebsites.net/api/Books')
    //   .then(result => result.json())
    //   .then(rowData => this.rowData = rowData);
      this.getAllIndentData();
    //console.log("st", this.rowData)
  }

  getAllIndentData(){
    const req ={
      "pageInfo":{
      "pageNumber":0,
      "pageSize":5,
      "sortBy":"indent_detail_id"
      },
      "requestData":null
      }
      this._indentService.getAllIndents(req).subscribe(data=>{
console.log(data);
this.rowData = data['response Date List'];
      })    
  }

  submitIndent(){
    console.log(this.indentForm.value);
    this._indentService.createIndent(this.indentForm.value).subscribe(data=>{
      console.log(data);
      
    })
    this.indentForm.reset();
    this.popupClose();
    
  }

  openPopup() {
    this.showPopup = true;
  }
  popupClose() {
    this.showPopup = false;
  }

}
