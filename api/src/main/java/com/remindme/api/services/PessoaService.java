package com.remindme.api.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.remindme.api.models.Pessoa;
import com.remindme.api.repositories.PessoaRepository;

@Service
public class PessoaService {

    @Autowired
    private PessoaRepository pessoaRepository;

    public Pessoa cadastrarPessoa(@RequestBody Pessoa pessoaInput) {
        return pessoaRepository.save(pessoaInput);
    }

    public List<Pessoa> listarPessoas() {
        return pessoaRepository.findAll();
    }

    public Optional<Pessoa> listarPessoaPorId(Long id) {
        return pessoaRepository.findById(id);
    }

    public Pessoa atualizarPessoa(Long id, Pessoa pessoaInput) {
        Optional<Pessoa> pessoaExistenteOptional = pessoaRepository.findById(id);
        if (pessoaExistenteOptional.isPresent()) {
            Pessoa pessoaExistente = pessoaExistenteOptional.get();
            // Atualiza os campos da pessoa existente com os dados da pessoa de entrada
            pessoaExistente.setName(pessoaInput.getName());
            pessoaExistente.setEmail(pessoaInput.getEmail());
            pessoaExistente.setPassword(pessoaInput.getPassword());
            // Salva e retorna a pessoa atualizada
            return pessoaRepository.save(pessoaExistente);
        } else {
            throw new RuntimeException("Pessoa com o ID fornecido não encontrada.");
        }
    }

    public void removerPessoa(Long id) {
        pessoaRepository.deleteById(id);
    }

}