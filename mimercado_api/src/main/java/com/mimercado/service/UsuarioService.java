package com.mimercado.service;

import org.springframework.stereotype.Service;

import com.mimercado.entity.Usuario;

@Service
public interface UsuarioService {
	
	Usuario registrar (Usuario usuario);
	Usuario login(Usuario usuario);

}
