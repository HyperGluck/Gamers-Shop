import { Component, OnInit } from '@angular/core';
import { ApiService,User } from 'Backend/api.service'


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  users : User[];
  

  ngOnInit(): void {
    this.apiService.getUsers().subscribe((data) =>{
      this.users = data;

    });
  }
  





}
