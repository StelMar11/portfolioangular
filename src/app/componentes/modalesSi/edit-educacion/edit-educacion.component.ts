import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  form: FormGroup;
  constructor (private formBuilder: FormBuilder){
    this.form= this.formBuilder.group({
      text:[' ', [Validators.required]],

    })
  }
  ngOnInit(): void {}
    get Text(){
      return this.form.get("text");
      }
  onEnviar(event:Event){
    event.preventDefault;
    if(this.form.valid){
      alert("Todo se envió correctamente")
    }
  }
    
    
  }


