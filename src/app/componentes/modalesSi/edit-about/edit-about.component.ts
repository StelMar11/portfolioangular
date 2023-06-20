import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent  {
  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder){ 
    this.form= this.formBuilder.group({
       Text:['', [Validators.required]],
      })
   
      
}
}
