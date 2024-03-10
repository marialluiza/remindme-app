package com.remindme.api.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.remindme.api.models.Usuario;
import com.remindme.api.repositories.UsuarioRepository;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario autenticarUsuario(String username, String password) {
        Optional<Usuario> usuarioOptional = usuarioRepository.findByUsername(username);
        if (usuarioOptional.isPresent()) {
            Usuario usuario = usuarioOptional.get();
            // Realizar a verificação da senha, por exemplo
            if (usuario.getPassword().equals(password)) {
                return usuario;
            } else {
                throw new RuntimeException("Senha incorreta");
            }
        } else {
            throw new RuntimeException("Usuário não encontrado");
        }
    }

    public Usuario cadastrarUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }
    
    public List<Usuario> listarUsuarios() {
        return usuarioRepository.findAll();
    }

    public Optional<Usuario> listarUsuarioPorId(Long id) {
        return usuarioRepository.findById(id);
    }

    public Usuario atualizarUsuario(Long id, Usuario usuarioAtualizado) {
        Optional<Usuario> usuarioExistente = usuarioRepository.findById(id);
        if (usuarioExistente.isPresent()) {
            Usuario usuario = usuarioExistente.get();
            // Atualizar os campos do usuário com os novos valores
            usuario.setUsername(usuarioAtualizado.getUsername());
            usuario.setPassword(usuarioAtualizado.getPassword());
            // Salvar o usuário atualizado no repositório
            return usuarioRepository.save(usuario);
        } else {
            throw new RuntimeException("Usuário não encontrado");
        }
    }

    public void removerUsuario(Long id) {
        usuarioRepository.deleteById(id);
    }
}