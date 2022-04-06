import { Component, OnInit } from '@angular/core';
import { User } from './githubUser';
import { GithubService } from './github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  User!: User;  //Auto einai aparadekto tha prepei na sto dinei ena REPOSITORY SERVICE

  constructor(private githubService: GithubService) {  //Declaration githubService , instantiation , Dependancy Injection 

  }

  searchName!:string;

  ShowUser() {
    this.githubService.getUser(this.searchName).subscribe({
      next: data => this.User = data,
      error: error => console.log(error),
      complete: ()=>console.log("Procedure Complete")
    });
  }

  ngOnInit(): void {

  }

}
