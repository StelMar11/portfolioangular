import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit{
  habilidad: any;
  
  constructor(private datos:DatosService){}
  ngOnInit(): void {
    this.datos.getDatos().subscribe(data =>{
      this.habilidad=data.habilidades;
      
    })
    
  }

}
