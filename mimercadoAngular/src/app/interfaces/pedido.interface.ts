import { EstadoPedido } from "./estadoPedido";
import { ProductoPedido } from "./productoPedido.interfaces";
import { Usuario } from "./usuario.interface";

export interface Pedido{
   id:number;
   usuario:Usuario;
   productos: ProductoPedido [];
   precioTotal:number;
   estado:EstadoPedido;
   fecha:Date;

}