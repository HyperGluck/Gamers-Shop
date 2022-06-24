
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'Backend/api.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Shareuser:string;
  users = [];
  constructor(private apiService: ApiService, private router: Router) {
  }

  ngOnInit(): void {
    this.apiService.getUsers().subscribe((data) =>{
      console.log(data);
      this.users = data;
    });

  }

  onSubmit(loginForm) {
    console.log(loginForm.value)
    for (let user of this.users) {
      if (user.email == loginForm.value.email && user.password == loginForm.value.password) {
        localStorage.setItem("shareUser",user.email);
        alert("Welcome "+ user.email);
        this.router.navigateByUrl('home')
        return;
      }
    }
    alert('InValid user');
  }

  goRegister() {

    this.router.navigateByUrl('register');


}
}