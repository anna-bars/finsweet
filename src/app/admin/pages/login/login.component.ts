import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup, Validators,  ReactiveFormsModule } from '@angular/forms';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environment/environment.prod';
import { Router } from '@angular/router';

interface Token {
  token: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup = this.fb.group({
    email: ["", [Validators.required,Validators.minLength(7),
  Validators.maxLength(23),  Validators.pattern(/^eve.holt@reqres.in/)]],
    password: ["", [Validators.required, Validators.minLength(4),
      Validators.maxLength(15), Validators.pattern(/^cityslicka/)]]
  })
  user : {email:string, password: string } = {
    email: '',
    password: ''
  };
  tokenData!: Token | any;
  constructor(public fb: FormBuilder,
    private req: RequestService,
     private router: Router){}

  send(){
    console.log(4);
    this.user.email = this.form.value.email;
    this.user.password = this.form.value.password;
    this.req.postData(environment.login.get, this.user).subscribe((res: Token | any) => {
      console.log(res);
      this.tokenData = res;
      localStorage.setItem('token', this.tokenData.token)
    })
    this.router.navigate(['admin/account'])
  }
  fill(){
    this.form.setValue({
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      });
  }
}
