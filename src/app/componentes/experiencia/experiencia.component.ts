import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  experiencia: any;
  
  constructor(private datos:DatosService){}
  ngOnInit(): void {
    this.datos.getDatos().subscribe(data =>{
      this.experiencia=data.experiencias;
      
    })
    
  }
}
