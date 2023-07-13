import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-banner',
  templateUrl: './edit-banner.component.html',
  styleUrls: ['./edit-banner.component.css']
})
export class EditBannerComponent implements OnInit{
  public form: FormGroup;
  constructor (private formBuilder: FormBuilder){
    this.form= this.formBuilder.group({
      url:[' ', ],
      text:[' ',]
  })
}
  ngOnInit(): void {}
  
get Url(){
      return this.form.get("url");
      }
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
