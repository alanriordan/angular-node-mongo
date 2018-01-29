import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector : 'app-signin',
  templateUrl : './signin.component.html'
})
export class SigninComponent{
  
   myForm:FormGroup;
  
  onSubmit(){
    console.log(this.myForm);
  }
  
  ngOnInit(): void {
    this.myForm = new FormGroup({     
      email : new FormControl('', [Validators.required, Validators.pattern("")]),
      password : new FormControl('', Validators.required)
    });
  
}