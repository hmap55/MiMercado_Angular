import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import{FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './public/masterPage/header/header.component';
import { FooterComponent } from './public/masterPage/footer/footer.component';
import { NavComponent } from './public/masterPage/nav/nav.component';
import { RegistrarComponent } from './public/masterPage/registrar/registrar.component';
import { LoginComponent } from './public/masterPage/login/login.component';
import { InicioComponent } from './public/masterPage/inicio/inicio.component';
import { SeccionesComponent } from './public/masterPage/secciones/secciones.component';
import { AseoComponent } from './public/masterPage/aseo/aseo.component';
import { LicoresComponent } from './public/masterPage/licores/licores.component';
import { AbarrotesComponent } from './public/masterPage/abarrotes/abarrotes.component';
import { AseoPComponent } from './public/masterPage/aseo-p/aseo-p.component';
import { FarmaciaComponent } from './public/masterPage/farmacia/farmacia.component';
import { ProductoComponent } from './public/masterPage/producto/producto.component';
import { CarritoComponent } from './public/masterPage/carrito/carrito.component';
import { CerrarsesionComponent } from "./public/masterPage/cerrarsesion/cerrarsesion.component"




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    RegistrarComponent,
    LoginComponent,
    InicioComponent,
    SeccionesComponent,
    AseoComponent,
    LicoresComponent,
    AbarrotesComponent,
    AseoPComponent,
    FarmaciaComponent,
    ProductoComponent,
    CarritoComponent,
    CerrarsesionComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes,{useHash: true}),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
