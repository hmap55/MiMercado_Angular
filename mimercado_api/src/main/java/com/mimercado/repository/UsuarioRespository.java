package com.mimercado.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mimercado.entity.Usuario;

@Repository
public interface UsuarioRespository extends JpaRepository <Usuario, Integer>{
	
	Usuario getByNombreAndPassword(String nombre, String password);

}
