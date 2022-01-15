import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/servicios/sesion.service';

@Component({
  selector: 'app-cerrarsesion',
  templateUrl: './cerrarsesion.component.html',
  styleUrls: ['./cerrarsesion.component.css']
})
export class CerrarsesionComponent implements OnInit {

  constructor(private router:Router, private sesionService:SesionService) { 

    this.sesionService.resetUsuario();
    this.router.navigate(["registro"]);


  }

  ngOnInit(): void {
  }

}
