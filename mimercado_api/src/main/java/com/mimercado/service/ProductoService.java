package com.mimercado.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mimercado.entity.Producto;


@Service
public interface ProductoService {
	
	List<Producto> getProductos();
	Producto guardar(Producto producto);
	Producto actualizar(Integer id, Producto producto);
	Producto seleccionarProducto(Integer id);
	Boolean borrar(Integer id);
	List<Producto> listarPromos(String promocion);
	List<Producto> listarSeccion(String seccion);
	

}
