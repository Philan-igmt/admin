import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators, FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });
  constructor(private formBuilder: FormBuilder,private http: HttpClient,public router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password:[
        "",[
          Validators.required,
          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')
        ]
      ],
    });

  }

  signIn() {
    this.http.post( 'http://localhost:5000/login',{"email":"philaniiii@gmail.com",
    "password":"Sithembisoo02"})
      .subscribe(
        (res:any) => {
          console.log(res);
          if (res['token']) {
            localStorage.setItem('token', res['token']); //token here is stored in a local storage
            this.router.navigate(['appointment'])
          }
        },
        (err) => {
          console.log(err);
        }
      );    
  }

  onSubmit=()=>{
    console.log(this.loginForm.value)
  }
  get getEmail() {
    return this.loginForm.get('email') as FormArray;
  }
  get getPssword() {
    return this.loginForm.get('password') as FormArray;
  }

}
