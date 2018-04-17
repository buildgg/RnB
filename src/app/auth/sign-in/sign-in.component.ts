import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthSandbox} from "../auth.sandbox";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signIn: FormGroup;

  message: string = null;

  constructor(private fb: FormBuilder,
              private authSandbox: AuthSandbox) { }

  ngOnInit() {
    this.signIn = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSignIn(fg: FormGroup) {
    const name = fg.value.name;
    const password = fg.value.password;
    console.log(`message = ${this.message}`);

    if (!this.authSandbox.signIn(name, password)) {
      this.message = 'Неверное имя пользователя или пароль';
    }
  }

}
