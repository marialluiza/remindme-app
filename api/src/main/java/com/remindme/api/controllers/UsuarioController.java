package com.remindme.api.controllers;

import java.util.List;
import java.util.Optional;

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
import org.springframework.web.bind.annotation.RestController;

import com.remindme.api.models.Usuario;
import com.remindme.api.services.UsuarioService;
import com.remindme.api.inputs.UsuarioInput;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UsuarioInput usuarioInput) {
        try {
            String username = usuarioInput.getUsername();
            String password = usuarioInput.getPassword();

            // Autentica o usuário
            Usuario usuario = usuarioService.autenticarUsuario(username, password);

            // Verifica se o login foi bem-sucedido
            if (usuario != null) {
                // Login bem-sucedido, retorna uma mensagem personalizada
                return ResponseEntity.ok("Login bem-sucedido para o usuário: " + usuario.getUsername());
            } else {
                // Login falhou, retorna uma mensagem de erro
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                        .body("Falha na autenticação: Usuário ou senha incorretos");
            }
        } catch (RuntimeException e) {
            // Ocorreu um erro durante a autenticação
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Falha na autenticação: " + e.getMessage());
        }
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<String> cadastrar(@RequestBody UsuarioInput usuarioInput) {
        try {
            Usuario usuario = new Usuario();
            usuario.setUsername(usuarioInput.getUsername());
            usuario.setPassword(usuarioInput.getPassword());
            Usuario novoUsuario = usuarioService.cadastrarUsuario(usuario);
            return ResponseEntity.ok("Usuário cadastrado com sucesso: " + novoUsuario.getUsername());
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Falha ao cadastrar usuário: " + e.getMessage());
        }
    }

    @GetMapping("/listar")
    public ResponseEntity<List<Usuario>> listarUsuarios() {
        List<Usuario> usuarios = usuarioService.listarUsuarios();
        return new ResponseEntity<>(usuarios, HttpStatus.OK);
    }

    @GetMapping("/listar/{id}")
    public ResponseEntity<Usuario> listarUsuarioPorId(@PathVariable Long id) {
        Optional<Usuario> usuario = usuarioService.listarUsuarioPorId(id);
        return usuario.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/atualizar/{id}")
    public ResponseEntity<String> atualizarUsuario(@PathVariable Long id, @RequestBody UsuarioInput usuarioInput) {
        try {
            // Converte o input em um objeto Usuario
            Usuario usuarioAtualizado = new Usuario();
            usuarioAtualizado.setUsername(usuarioInput.getUsername());
            usuarioAtualizado.setPassword(usuarioInput.getPassword());

            // Atualiza o usuário
            Usuario usuario = usuarioService.atualizarUsuario(id, usuarioAtualizado);

            // Retorna uma mensagem de sucesso
            return ResponseEntity.ok("Usuário atualizado com sucesso: " + usuario.getUsername());
        } catch (RuntimeException e) {
            // Retorna uma mensagem de erro caso ocorra uma exceção
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Falha ao atualizar usuário: " + e.getMessage());
        }
    }

    @DeleteMapping("/remover/{id}")
    public ResponseEntity<Void> removerUsuario(@PathVariable Long id) {
        usuarioService.removerUsuario(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}