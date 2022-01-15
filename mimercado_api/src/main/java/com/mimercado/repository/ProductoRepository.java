package com.mimercado.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mimercado.entity.Producto;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Integer> {
	
	List<Producto> getProductoByPromocion(String promocion);
	List<Producto> getProductoBySeccion(String seccion);

}
