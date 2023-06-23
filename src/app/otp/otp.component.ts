import { Component } from '@angular/core';
import { Employee } from '../employee';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { OtpService } from '../services/otpService/otp.service';
import { otp } from '../otp';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent {
  constructor(private DataService:OtpService , private http:HttpClient , private router:Router , private route: ActivatedRoute){
  }
  emp = new otp();
  errors:any;
  user_id:any=691;
  save_config_res:any;

  ngOnInit(): void {

    console.log(this.user_id);
    this.emp.user_id =this.user_id;

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.user_id = id;
    });
  }

  otplogin(){
       this.DataService.otp(this.emp).subscribe(res => {
      // this.save_config_res = res as any;
      this.save_config_res = res as any;

      if(this.save_config_res.status === 200){
          this.errors = this.save_config_res.message;
          this.router.navigate(['bctsa']);
      }else{
        this.errors = this.save_config_res.message;
      }


    });

  }
}
