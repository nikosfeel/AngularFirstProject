import { Component, OnInit } from '@angular/core';
import { Workperson } from './workPerson'
import { workPersons } from './workPersonMockup';

@Component({
  selector: 'app-workperson',
  templateUrl: './workperson.component.html',
  styleUrls: ['./workperson.component.css']
})
export class WorkpersonComponent implements OnInit {

  Buy() {
    console.log("Mpika");
  }

  isHiddenInfo: boolean = false;
  ToggleInfo() {
    this.isHiddenInfo = !this.isHiddenInfo
  }
  FontSizee: number = 12;
  IncreaseSize() {
    this.FontSizee += 5;
  }
  DecreaseSize() {
    this.FontSizee -= 4
  }


  Username:string = "Nikos";









  Workpersons: Workperson[] = workPersons
  Names: string[] = ["Makis", "Fanis", "Lakis"]
  a: number = 5;
  b: number = 2;

  isAbleVote: boolean = true;

  PhotoUrl: string = 'https://www.befunky.com/images/prismic/2aa87dc8-3720-4385-9cc2-b8f9be5aac1d_landing-photo-to-art-img-4-before.png?auto=webp&format=jpg&width=863';

  width: number = 400;

  Titlos: string = "Fotografia Diakopon";

  BorderRadius: number = 30;


  FontSize: number = 25;

  constructor() { }

  ngOnInit(): void {
  }

}
