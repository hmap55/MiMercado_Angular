import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarComponent } from './public/masterPage/registrar/registrar.component';
import { LoginComponent } from './public/masterPage/login/login.component';
import {InicioComponent} from './public/masterPage/inicio/inicio.component'
import {SeccionesComponent} from './public/masterPage/secciones/secciones.component'
import {AbarrotesComponent} from './public/masterPage/abarrotes/abarrotes.component'
import {AseoComponent} from './public/masterPage/aseo/aseo.component'
import {AseoPComponent} from './public/masterPage/aseo-p/aseo-p.component'
import {CarritoComponent} from './public/masterPage/carrito/carrito.component'
import {FarmaciaComponent} from './public/masterPage/farmacia/farmacia.component'
import {LicoresComponent} from './public/masterPage/licores/licores.component'
import {ProductoComponent} from './public/masterPage/producto/producto.component'
import {CerrarsesionComponent} from './public/masterPage/cerrarsesion/cerrarsesion.component'


export const routes: Routes = [
  {path:"registro", component: RegistrarComponent},
  {path:"login", component: LoginComponent},
  {path: "inicio", component: InicioComponent},
  {path: "secciones", component: SeccionesComponent},
  {path: "abarrotes", component: AbarrotesComponent},
  {path: "aseo", component: AseoComponent},
  {path: "aseoP", component: AseoPComponent},
  {path: "carrito", component: CarritoComponent},
  {path: "farmacia", component: FarmaciaComponent},
  {path: "licores", component: LicoresComponent},
  {path: "producto/:id", component: ProductoComponent},
  {path: "cerrar", component: CerrarsesionComponent},
  {path: "", pathMatch:"full", redirectTo:"registro"},
  {path: "**", pathMatch:"full", redirectTo:"registro"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
