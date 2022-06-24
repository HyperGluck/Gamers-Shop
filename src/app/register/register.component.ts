import { Component, OnInit } from '@angular/core';
import { ApiService,User } from 'Backend/api.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(loginForm) {

    let TempUser= new User(loginForm.value.userName,loginForm.value.email,loginForm.value.password,loginForm.value.pele);
    this.apiService.add2Register(TempUser).subscribe((data)=>{
      console.log(data);
    });
   
        
        alert("Registration Succsefful");
        this.router.navigateByUrl('login')
        return;
      }

      
    }
    
  


