package com.mimercado.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mimercado.entity.Usuario;
import com.mimercado.filter.RequestFilter;
import com.mimercado.service.UsuarioService;
import com.mimercado.util.UsuarioUtil;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {
	
	@Autowired
	private UsuarioService usuarioService;
	
	@PostMapping("/registrar")
	private Usuario addUsuario(@RequestBody Usuario usuario) {
		return this.usuarioService.registrar(usuario);
		
	}
	
	@PostMapping("/login")
	private UsuarioUtil login(@RequestBody Usuario usuario) {
		Usuario nuevo = this.usuarioService.login(usuario);
		
		if (nuevo == null) {
			return new UsuarioUtil();
		}
		else {
			UsuarioUtil usuarioUtil = new UsuarioUtil();
			usuarioUtil.setId(nuevo.getId());
			usuarioUtil.setCedula(nuevo.getCedula());
			usuarioUtil.setNombre(nuevo.getNombre());
			usuarioUtil.setApellido(nuevo.getApellido());
			usuarioUtil.setCorreo(nuevo.getCorreo());
			usuarioUtil.setCelular(nuevo.getCelular());
			
			long tiempo = System.currentTimeMillis();
			
			String token = Jwts.builder()
					           .signWith(SignatureAlgorithm.HS256, RequestFilter.KEY)
					           .setSubject(nuevo.getNombre())
					           .setIssuedAt(new Date(tiempo))
					           .setExpiration(new Date (tiempo + 900000))
					           .claim("nombre", nuevo.getNombre())
					           .claim("id", nuevo.getId())
					           .claim("correo", nuevo.getCorreo())
					           .compact();
			
			usuarioUtil.setToken(token);
			
			return usuarioUtil;
		}
	}
	
	
	
	

}
