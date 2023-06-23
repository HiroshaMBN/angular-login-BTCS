import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private DataService:DataService , private http:HttpClient , private router:Router){}
  emp = new Employee();
  save_config_res:any;
  id:any;
  errors:any
  username:any;
  bluechip:any ="bluechip\\";


 onOtpView(){
  this.router.navigateByUrl('/otp');

  // this.router.navigate(['/otp',this.id]);
 }




  login(){
   try {
    this.emp.name = this.bluechip.username;

     this.DataService.login(this.emp).subscribe(res => {
       this.save_config_res = res as any;
         if(this.save_config_res.status === 200){
           this.id = this.save_config_res.id;
           const token = this.save_config_res.token;
           // this.router.navigate(['service-status/'+host_name+','+service_name], { replaceUrl: true });
            this.router.navigate(['send-otp' , this.id]);
            // this.router.navigate(['send-otp'], { state: { example: this.id } });
            console.log(this.save_config_res.id);
            console.log(this.save_config_res.token);
          }

          if(this.save_config_res.status === "waiting"){
           this.errors=this.save_config_res.error;
            console.log(this.save_config_res.error);
          }

          if(this.save_config_res.status === 404){
           this.errors = this.save_config_res.error

           console.log(this.save_config_res.error);
          }

          if(this.save_config_res.status === 120){
           console.log("Un pw ");
           this.errors = this.save_config_res.message;
          }
          if(this.save_config_res.status === 401){
            console.log("Unauthorized");
          }

     })

   } catch (error) {
       this.errors = "Something went wrong"
       console.log("Something went wrong");
   }



  }
}
