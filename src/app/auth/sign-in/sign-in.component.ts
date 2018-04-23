import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;
  url: string;
  message: string = null;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              public router: Router) {
  }

  ngOnInit() {
    this.signInForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSignIn(fg: FormGroup) {
    const name = fg.value.name;
    const password = fg.value.password;
    this.signIn(name, password);
  }

  signIn(name: string, password: string) {

    this.authService.login(name, password).subscribe((user) => {

        if (this.authService.isLoggedIn) {

          if (this.authService.redirectUrl) {
            this.url = this.authService.redirectUrl;
          } else {
            this.url = '';
          }
          this.router.navigate([this.url]);
        }
      },
      () => {
        this.message = 'Неверное имя пользователя или пароль';
      }
    );


  }
}
