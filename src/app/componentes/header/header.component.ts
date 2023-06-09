import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{
  vinculo:any;
  constructor(private datos:DatosService){}
  ngOnInit(): void {
    this.datos.getDatos().subscribe(data=>{
      this.vinculo=data.vinculos
    }
      )
    
  }

}
 
  