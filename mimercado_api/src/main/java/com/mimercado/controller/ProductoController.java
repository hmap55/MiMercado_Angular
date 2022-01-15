package com.mimercado.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mimercado.entity.Producto;
import com.mimercado.service.ProductoService;

@RestController
@RequestMapping("/productos")
public class ProductoController {
	
	@Autowired
	private ProductoService productoService;
	
	@GetMapping("/inventario")
	public List<Producto> getProducto(){
		return this.productoService.getProductos();
	}
	
	@GetMapping("/seleccionar/{id}")
	public ResponseEntity<?> seleccionar(@PathVariable Integer id){
		return ResponseEntity.status(HttpStatus.OK).body(productoService.seleccionarProducto(id));
	}
	
	@PostMapping("/save")
	public ResponseEntity<?> guardar(@RequestBody Producto producto){
		return ResponseEntity.status(HttpStatus.OK).body(productoService.guardar(producto));
	}
	
	@PutMapping("/actualizar/{id}")
	public ResponseEntity<?> actualizar(@PathVariable Integer id, @RequestBody Producto producto){
		return ResponseEntity.status(HttpStatus.OK).body(productoService.actualizar(id, producto));
	}
	
	@DeleteMapping("borrar/{id}")
	public ResponseEntity<?> borrar(@PathVariable Integer id){
		return ResponseEntity.status(HttpStatus.NO_CONTENT).body(productoService.borrar(id));
	}
	
	
	@GetMapping("/promos")
	public ResponseEntity<?> listarPromos(@RequestParam String promocion){
		return ResponseEntity.status(HttpStatus.OK).body(productoService.listarPromos(promocion));
	}
	
	@GetMapping("/seccion")
	public ResponseEntity<?> listarseccion(@RequestParam String seccion){
		return ResponseEntity.status(HttpStatus.OK).body(productoService.listarSeccion(seccion));
	}
	
	

}
