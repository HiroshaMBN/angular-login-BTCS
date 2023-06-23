import { DataService } from './services/data.service';
import { Component } from '@angular/core';
import { Employee } from './employee';
import { Data, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:any="BCTS";
  constructor(private DataService:DataService , private http:HttpClient , private router:Router){}
  emp = new Employee();
  save_config_res:any;
  id:any;
  errors:any
  username:any;
  bluechip:any ="bluechip\\";
  name:any;


  login(){
   try {
       this.emp.name =this.bluechip+this.name;
       this.DataService.login(this.emp).subscribe(res => {

       this.save_config_res = res as any;
         if(this.save_config_res.status === 200){
           this.id = this.save_config_res.id;
           const token = this.save_config_res.token;
            this.router.navigateByUrl('send-otp/'+this.id);
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
    this.errors = "Something went wrong";
       console.log("Something went wrong");
   }



  }

}
