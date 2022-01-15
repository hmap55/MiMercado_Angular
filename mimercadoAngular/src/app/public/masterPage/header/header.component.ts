import { Component, OnInit } from '@angular/core';
import { SesionService } from 'src/app/servicios/sesion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public sesionService:SesionService) { }

  ngOnInit(): void {
  }

}
