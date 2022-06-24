import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css']
})
export class TopnavbarComponent implements OnInit {

  constructor(private router: Router) { }



  ngOnInit(): void { }

  logoutC3() {

    localStorage.clear();
    this.router.navigate(['login']);

  }

}
