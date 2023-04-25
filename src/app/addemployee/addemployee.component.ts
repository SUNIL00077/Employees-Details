import { Component,Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { EmployeeService } from '../employee.service';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,private http:EmployeeService) {}
form=new FormGroup({
    fname:new FormControl('',[Validators.required]),
    lname:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    mobile:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
})

addEmployee(){
  Swal.fire('Any fool can use a computer').then(function(){
    location.reload()
  })
this.http.addEmp(this.form.value).subscribe(res =>{
})
}
}
