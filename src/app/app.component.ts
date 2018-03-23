import { Component } from '@angular/core';


//import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent{
  //console.log(`my name or title is ${color}`);
  color : string;
  evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';
  checkInnerHtml = 'CHeck Inner Value';
  title = 'Prakash';
  //modelname1="CheckNameMOdel";
  result : string;

  display (event){
    this.result = event.target.value;
  }
  result2 : string;
  display2 (event){
    this.result2 = event.target.value;
  }
  modelClick(){
    console.log("---Normal Click ----");
  }

  modelClick2(){
    console.log("---On - Click ----");
  }
  ngOnInit(){
    this.getherosfromService();
    console.log(`This is for ${this.title}`);
  }
  
  getherosfromService(){

  }
}
