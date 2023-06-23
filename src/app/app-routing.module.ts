import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtpComponent } from './otp/otp.component';
import { LoginComponent } from './login/login.component';
import { BCTSAComponent } from './bctsa/bctsa.component';


const routes: Routes = [
{path: 'send-otp/:id', component:OtpComponent},
// {path: '' , component:LoginComponent},
{path: 'bctsa' , component:BCTSAComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
