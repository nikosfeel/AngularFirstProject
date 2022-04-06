import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee'
import { employees } from './employeeMockupData'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  Employees: IEmployee[] = employees;



  constructor() { }

  ngOnInit(): void {
  }

}
