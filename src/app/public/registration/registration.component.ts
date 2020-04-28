import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ServiceService} from '../../service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
newUser:boolean=false;
firstName:String;
lastName:String;
mailId:String;
password:String;
rePassword:String;
saveObject=[];
errorDialogue:String;
usersFalg:boolean=false;
userLoggedIn:boolean;
newUserDetails:any;
loggedInUser:String;
existingUsers=[{"firstName":"Sindhu","lastName":"Madichetty","mailId":"sindhu1@gmail.com","password":"sindhu"},
                 {"firstName":"Ryota","lastName":"mcit","mailId":"ryota123@gmail.com","password":"ryota"}]
  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.userLoggedIn=this.service.userLoggedIngl;
     this.loggedInUser=this.service.userName;
  }
onSave(){
  this.newUserDetails={"firstName":this.firstName,"lastName":this.lastName,"mailId":this.mailId,"password":this.password};
  this.service.userName=this.newUserDetails.firstName;
  this.loggedInUser=this.newUserDetails.firstName;
this.saveObject.push(this.newUserDetails);
this.userLoggedIn=true;
this.service.userLoggedIngl=true;
console.log(this.saveObject);
}
signup(){
  console.log(this.newUser);
this.newUser=true;
console.log(this.newUser);


}
onLogIn(){
  debugger;
  console.log("loggedIn");
  for(let i=0;i<this.existingUsers.length;i++){
    
      
    console.log(this.mailId);
    if(this.existingUsers[i]["mailId"]==this.mailId){
      console.log("matched");
      this.usersFalg=true;
      if(this.existingUsers[i]["password"]==this.password){
this.errorDialogue="Success";
this.firstName=this.existingUsers[i].firstName;
this.lastName=this.existingUsers[i].lastName;
this.userLoggedIn=true;
this.service.userLoggedIngl=true;
this.newUserDetails=this.existingUsers[i];
this.service.userName=this.newUserDetails.firstName;
this.loggedInUser=this.newUserDetails.firstName;
console.log("pwd matched");
       break;
      }
      else{
        this.errorDialogue="Password you entered in wrong";
        console.log(" pwd nt matched");
      }
    }
    else{
      console.log("not matched");
      this.errorDialogue="cant find you..please signup";
    }
  }
  console.log(this.errorDialogue);
}
loginshow(){
  this.newUser=false;
}
}
