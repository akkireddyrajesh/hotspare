import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IndentService } from 'src/app/services/apiServices/indent.service';
import * as moment from 'moment';



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
  startDate: string;
  endDate: string;
  constructor(private _formBuilder: FormBuilder,private _indentService:IndentService) { }

  columnDefs = [
    { headerName: 'depotId', field: 'depotId' },
    { headerName: 'shopName', field: 'shopName' },
    { headerName: 'depotName', field: 'depotName' },
    { headerName: 'indentCreationDate', field: 'indentCreationDate' },
    { headerName: 'location', field: 'location' },
    { headerName: 'district', field: 'district' },
    { headerName: 'authorisedPerson', field: 'authorisedPerson' },
    { headerName: 'creationDate', field: 'creationDate' },
    { headerName: 'createdBy', field: 'createdBy' }
  ];

  rowData = [];

  ngOnInit() {
    // fetch('https://fakerestapi.azurewebsites.net/api/Books')
    //   .then(result => result.json())
    //   .then(rowData => this.rowData = rowData);
      // this.getAllIndentData();
      this.getThirtyDays();
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
    });
    this.indentForm.reset();
    this.popupClose();
  }
  getThirtyDays() {
    this.rowData = [];
    this._indentService.getLastThirtyDays().subscribe(data=>{
      console.log(data);
      this.rowData = data['responseData'];
  });
}
getOldIndents() {
  this.rowData = [];
  this._indentService.getOldIndents().subscribe(data=>{
    console.log(data);
    this.rowData = data['responseData'];
});
}

startDateChange(event) {
  console.log( moment(event.value).format('YYYY-MM-DD'));
  this.startDate = moment(event.value).format('YYYY-MM-DD');
  if(this.startDate && this.endDate) {
    const obj ={
      'startDate':this.startDate,
      'endDate':this.endDate
    }
    this._indentService.getDateWise(obj).subscribe(data=>{
    this.rowData = data['responseData'];
    })
  }
}
endDateChange(event){
  this.endDate = moment(event.value).format('YYYY-MM-DD');
  if(this.startDate && this.endDate) {
    const obj ={
      'startDate':this.startDate,
      'endDate':this.endDate
    }
    this._indentService.getDateWise(obj).subscribe(data=>{
    this.rowData = data['responseData'];
    })
  }
}

  openPopup() {
    this.showPopup = true;
  }
  popupClose() {
    this.showPopup = false;
  }

}
