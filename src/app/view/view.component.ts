import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  id:any;
  fname:any;
  lname:any;
  email:any;
  mobile:any;
  city:any;
}
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
