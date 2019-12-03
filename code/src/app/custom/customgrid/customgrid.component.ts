import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'custom-grid',
  templateUrl: './customgrid.component.html',
  styleUrls: ['./customgrid.component.css']
})
export class CustomgridComponent implements OnInit {

  @Input() rowData: [];
  @Input() columnDefs: [];

  constructor() { }

  ngOnInit() {
  }

}
