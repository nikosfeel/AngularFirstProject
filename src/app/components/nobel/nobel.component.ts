import { Component, OnInit } from '@angular/core';
import { Prize } from './models';
import { NobelService } from "./nobel.service";

@Component({
  selector: 'app-nobel',
  templateUrl: './nobel.component.html',
  styleUrls: ['./nobel.component.css']
})
export class NobelComponent implements OnInit {

  //Properties
  Prizes!: Prize[];
  Categories!: string[];
  SearchCategory!: string;
  FilteredPrizes!: Prize[];
  HasError:boolean = false;

  //MyMethods
  FilterRecords() {
    this.FilteredPrizes = this.Prizes.filter(x => x.category.includes(this.SearchCategory));
  }

  //Constructor
  constructor(private NobelService: NobelService) {
  }

  //Hooks
  ngOnInit(): void {
    this.NobelService.getNobel().subscribe(
      data => {
        this.Prizes = data.prizes;
        this.FilteredPrizes = this.Prizes
        this.HasError=false;
      },          //OnSuccess
      error => this.HasError=true,                 //OnError
      () => this.Categories = [...new Set(this.Prizes.map(x => x.category))]     //OnComplete
    );
  }
}
