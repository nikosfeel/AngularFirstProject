import {Component} from '@angular/core';



@Component(
    {
        selector:'app-student',
        templateUrl:'./student.component.html',
        styleUrls:['./student.component.css']
    }
)
export class StudentComponent{
    name:string = "Nikos";
    lastname:string = "Filiopoulos";
    score:number = 80;
    age:number = 25;

    GetBirthday():number{
        return new Date().getFullYear() - this.age;
    }
}


