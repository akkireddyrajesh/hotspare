import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LicenseService } from 'src/app/services/apiServices/license.service';

@Component({
  selector: 'app-license-profiles',
  templateUrl: './license-profiles.component.html',
  styleUrls: ['./license-profiles.component.css']
})
export class LicenseProfilesComponent implements OnInit {
 
   

  constructor(private _formBuilder: FormBuilder,private _licenseService:LicenseService) { }

  columnDefs = [
    { headerName: 'S.NO', field: 'sno' },
    { headerName: 'Retailer Names', field: 'retailername' },
    { headerName: 'Retailer Code', field: 'retailerCode' },
    { headerName: 'Deport Name', field: 'deportname' },
    { headerName: 'Gazette Code', field: 'gcode' },
    { headerName: 'Supervisor/Owner', field: 'owner' },
    { headerName: 'Issue Date', field: 'issuedate' },
    { headerName: 'Validity Date', field: 'validitydate' },
    { headerName: 'User ID', field: 'userid' },
    { headerName: 'Mobile NO', field: 'mobile' },
    { headerName: 'Email ID', field: 'emailid' },
    { headerName: 'Action', field: 'action' },
    { headerName: 'View', field: 'view' }
  ];

  rowData = [
    {  
      "sno":"1",
      "retailername":"company",
      "retailerCode":"1234",
      "deportname":"iray",
      "gcode":"2345",
      "owner":"jagadesh",
      "issuedate":"22-12-2020",
      "validitydate":"11-01-2021",
      "userid":"1234",
      "mobile":"9666242339",
      "emailid":"yerram@gmail.com",
      "action":"movie",
      "view":"rajesh"

  }
  ];

  ngOnInit() {
    // fetch('https://fakerestapi.azurewebsites.net/api/Books')
    //   .then(result => result.json())
    //   .then(rowData => this.rowData = rowData);
      this.getAllLicenseProfile();
    //console.log("st", this.rowData)
  }

  getAllLicenseProfile(){
    // this.rowData = data['response Date List'];
  }
}

