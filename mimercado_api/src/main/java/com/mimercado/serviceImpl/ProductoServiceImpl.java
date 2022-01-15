package com.mimercado.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mimercado.entity.Producto;
import com.mimercado.repository.ProductoRepository;
import com.mimercado.service.ProductoService;

@Service
public class ProductoServiceImpl implements ProductoService {
	
	@Autowired
	private ProductoRepository prodcutoRepository;
	

	@Override
	public List<Producto> getProductos() {
		return this.prodcutoRepository.findAll();
	}


	@Override
	public List<Producto> listarPromos(String promocion) {
		List<Producto> productos = prodcutoRepository.getProductoByPromocion(promocion);
		return productos;
	}


	@Override
	public List<Producto> listarSeccion(String seccion) {
		List<Producto> productos = prodcutoRepository.getProductoBySeccion(seccion);
		return productos;
	}


	@Override
	public Producto guardar(Producto producto) {
		return this.prodcutoRepository.save(producto);
	}


	@Override
	public Producto actualizar(Integer id, Producto producto) {
		
		Optional<Producto> producto1 = prodcutoRepository.findById(id);
		Producto nProducto = producto1.get();
		nProducto = prodcutoRepository.save(producto);
		return nProducto;
	}


	@Override
	public Producto seleccionarProducto(Integer id) {
		
			Optional<Producto> producto = prodcutoRepository.findById(id);
			return producto.get();
		
	}


	@Override
	public Boolean borrar(Integer id) {
		if (prodcutoRepository.existsById(id)) {
			prodcutoRepository.deleteById(id);
			return true;
		}
		else {
			
			return false;
			
		}
	}
	

}
