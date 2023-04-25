import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { EmployeeService } from '../employee.service';
import { UpdateComponent } from '../update/update.component';
import { ViewComponent } from '../view/view.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
employeeData:any;
constructor(public dialog: MatDialog,private http:EmployeeService){
   this.http.getEmp().subscribe(res =>{
    this.employeeData=res
    location.reload
   })
}

updateEmp(data:any){
  this.dialog.open(UpdateComponent, {
    data: {
      id:data.id,
      fname:data.fname,
      lname:data.lname,
      email:data.email,
      mobile:data.mobile,
      city:data.city,
    }
  });

}

deleteEmp(data:any){

   Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      ).then(function(){
        location.reload()
      })
      this.http.delEmp(data.id).subscribe(res =>{
      })
    }
  })
}

viewEmp(data:any){
  this.dialog.open(ViewComponent, {
    data: {
      id:data.id,
      fname:data.fname,
      lname:data.lname,
      email:data.email,
      mobile:data.mobile,
      city:data.city
    },
  });
}
}
