import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PageNotFoundComponent} from './shared/components/page-not-found/page-not-found.component';
import {HomeScreenComponent} from './home-screen/home-screen.component';
import {SignInComponent} from './auth/sign-in/sign-in.component';
import {AuthGuard} from './auth/auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: '/home-screen', pathMatch: 'full' },
  {path: 'home-screen', component: HomeScreenComponent,
    canActivate: [AuthGuard]},
  {path: 'sign-in', component: SignInComponent},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
