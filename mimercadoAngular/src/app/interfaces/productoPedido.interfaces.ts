import { Producto } from "./producto.interface";

export interface ProductoPedido{
    producto:Producto;
    cantidad:number;
}