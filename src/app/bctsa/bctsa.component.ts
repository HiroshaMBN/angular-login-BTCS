import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bctsa',
  templateUrl: './bctsa.component.html',
  styleUrls: ['./bctsa.component.css']
})
export class BCTSAComponent {



  constructor(private router:Router){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }



}
