import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
 public form: FormGroup;
 
 constructor (private formBuilder: FormBuilder){
    this.form= this.formBuilder.group({
      url:[' ', [Validators.required]],
      text:[' ', [Validators.required]],
      date:['', [Validators.required]]
      
      
    })
  }
  ngOnInit(): void {}
  
   
    get Text(){
      return this.form.get("text");
      }
    get Url(){
        return this.form.get("url");
        }
    get Date(){
      return this.form.get("date");
    }


  onEnviar(event:Event){
    event.preventDefault;
    if(this.form.valid){
      alert("Todo se envió correctamente")
    }
  }
    
    
  }


