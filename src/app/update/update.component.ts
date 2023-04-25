import { Component,Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { EmployeeService } from '../employee.service';

export interface DialogData {
  id:any;
  fname:any;
  lname:any;
  email:any;
  mobile:any;
  city:any;

}
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,private http:EmployeeService) {

  }
  form=new FormGroup({
    fname:new FormControl('',[Validators.required]),
    lname:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    mobile:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
})
  upEmp(){
    Swal.fire({
      title: 'Do you want to Update the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Update',
      denyButtonText: `Don't update`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success').then(function(){
          location.reload()
        })
        this.http.updateEmp(this.data.id,this.form.value).subscribe(res =>{

        })
      } else if (result.isDenied) {
        Swal.fire('Changes are not updated', '', 'info').then(function(){
          location.reload()
        })
      }
    })

  }


  ngOnInit():void{
    this.form.controls['fname'].setValue(this.data.fname);
    this.form.controls['lname'].setValue(this.data.lname);
    this.form.controls['email'].setValue(this.data.email);
    this.form.controls['mobile'].setValue(this.data.mobile);
    this.form.controls['city'].setValue(this.data.city)
  }
}
