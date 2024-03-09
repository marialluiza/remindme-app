package com.remindme.api.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.remindme.api.models.Aniversariante;
import com.remindme.api.models.Pessoa;
import com.remindme.api.repositories.AniversarianteRepository;
import com.remindme.api.repositories.PessoaRepository;

@Service
public class AniversarianteService {

    @Autowired
    private AniversarianteRepository aniversarianteRepository;

    @Autowired
    private PessoaRepository pessoaRepository;

    public Aniversariante cadastrarAniversariante(Aniversariante aniversariante) {
        Long idPessoa = aniversariante.getPessoa().getIdPessoa();
        Optional<Pessoa> pessoaOptional = pessoaRepository.findById(idPessoa);
        if (pessoaOptional.isPresent()) {
            Pessoa pessoa = pessoaOptional.get();
            aniversariante.setPessoa(pessoa);
            return aniversarianteRepository.save(aniversariante);
        } else {
            throw new RuntimeException("Pessoa com o ID fornecido não encontrada.");
        }
    }

    public List<Aniversariante> listarAniversariantes() {
        return aniversarianteRepository.findAll();
    }

    public Optional<Aniversariante> listarAniversariantePorId(Long id) {
        return aniversarianteRepository.findById(id);
    }

    public Aniversariante atualizarAniversariante(Long id, Aniversariante aniversarianteAtualizado) {
        Optional<Aniversariante> aniversarianteExistente = aniversarianteRepository.findById(id);
        if (aniversarianteExistente.isPresent()) {
            Aniversariante aniversariante = aniversarianteExistente.get();
            aniversariante.setNome(aniversarianteAtualizado.getNome());
            aniversariante.setDataNascimento(aniversarianteAtualizado.getDataNascimento());
            return aniversarianteRepository.save(aniversariante);
        } else {
            return null; // Ou você pode lançar uma exceção indicando que o aniversariante não foi
                         // encontrado
        }
    }

    public void removerAniversariante(Long id) {
        aniversarianteRepository.deleteById(id);
    }

}
