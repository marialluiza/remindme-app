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

import com.remindme.api.models.Aniversariante;
import com.remindme.api.services.AniversarianteService;

@RestController
@RequestMapping("/aniversariantes")
public class AniversarianteController {

    @Autowired
    private AniversarianteService aniversarianteService;

    @PostMapping("/cadastrar")
    public ResponseEntity<Aniversariante> cadastrarAniversariante(@RequestBody Aniversariante aniversariante) {
        Aniversariante novoAniversariante = aniversarianteService.cadastrarAniversariante(aniversariante);
        return new ResponseEntity<>(novoAniversariante, HttpStatus.CREATED);
    }

    @GetMapping("/listar")
    public ResponseEntity<List<Aniversariante>> listarAniversariantes() {
        List<Aniversariante> aniversariantes = aniversarianteService.listarAniversariantes();
        return new ResponseEntity<>(aniversariantes, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Aniversariante> listarAniversariantePorId(@PathVariable Long id) {
        Optional<Aniversariante> aniversariante = aniversarianteService.listarAniversariantePorId(id);
        return aniversariante.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Aniversariante> atualizarAniversariante(@PathVariable Long id,
            @RequestBody Aniversariante aniversarianteAtualizado) {
        Aniversariante aniversarianteAtualizadoEntity = aniversarianteService.atualizarAniversariante(id,
                aniversarianteAtualizado);
        if (aniversarianteAtualizadoEntity != null) {
            return new ResponseEntity<>(aniversarianteAtualizadoEntity, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> removerAniversariante(@PathVariable Long id) {
        aniversarianteService.removerAniversariante(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}