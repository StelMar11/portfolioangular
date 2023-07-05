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
      text1:[' ', [Validators.required]],
      url1:[' ', [Validators.required]],
      text2:[' ', [Validators.required]],
      url2:[' ', [Validators.required]],

    })
  }
  ngOnInit(): void {}
    get Text1(){
      return this.form.get("text1");
      }
      get Url1(){
        return this.form.get("url1");
        }
        get Text2(){
          return this.form.get("text2");
          }
          get Url2(){
            return this.form.get("url2");
            }
  onEnviar(event:Event){
    event.preventDefault;
    if(this.form.valid){
      alert("Todo se envió correctamente")
    }
  }
    
    
  }


