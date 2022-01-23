import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.scss']
})
export class SignupModalComponent {
   email = new FormControl('', [Validators.required, Validators.email]);
   passwordConfirmed=new FormControl('', [Validators.required]);
   password=new FormControl('', [Validators.required])
   options: FormGroup;
   isLoading:boolean=false;
   getErrorMessage():string {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
   constructor(@Inject(MAT_DIALOG_DATA) public data:any,public formBuilder:FormBuilder) {
     this.passwordConfirmed.addValidators((value:AbstractControl):ValidationErrors=>{
        if(this.passwordConfirmed.value!=this.password.value)
          return {"error":"Emails do not match"};
        return {};
     });

     this.options = this.formBuilder.group({
      email: this.email,
      passwordConfirmed: this.passwordConfirmed,
      password:this.password
    });

   }
   onSubmit():void{
      if(this.options.valid){
          this.isLoading=true;
      }
  }
}
