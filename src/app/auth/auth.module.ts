import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignInComponent} from './sign-in/sign-in.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthGuard} from './auth-guard.service';
import {AuthService} from './auth.service';
import {AuthSandbox} from './auth.sandbox';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [SignInComponent],
  providers: [ AuthGuard, AuthService, AuthSandbox]
})
export class AuthModule { }
