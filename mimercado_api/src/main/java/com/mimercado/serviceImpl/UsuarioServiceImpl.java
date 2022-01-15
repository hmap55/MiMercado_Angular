package com.mimercado.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mimercado.entity.Usuario;
import com.mimercado.repository.UsuarioRespository;
import com.mimercado.service.UsuarioService;

@Service
public class UsuarioServiceImpl implements UsuarioService {

	@Autowired
	private UsuarioRespository usuarioRepository;
	
	
	
	@Override
	public Usuario registrar(Usuario usuario) {
		return this.usuarioRepository.save(usuario);
		
	}
	

	@Override
	public Usuario login(Usuario usuario) {
		return this.usuarioRepository.getByNombreAndPassword(usuario.getNombre(), usuario.getPassword());
	}
	
	

}
