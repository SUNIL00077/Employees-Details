import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  addEmp(data:any){
    return this.http.post('http://localhost:3000/empdatails',data)
  }

  getEmp(){
    return this.http.get('http://localhost:3000/empdatails')
  };

  delEmp(id:any){
    return this.http.delete('http://localhost:3000/empdatails/'+id)
  };

  updateEmp(id:any,data:any){
    return this.http.put('http://localhost:3000/empdatails/'+id,data)
  }
}
