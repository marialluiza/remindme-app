package com.remindme.api.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data //gera getters e setters
@Entity
@Table(name = "pessoa")
public class Pessoa {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //gera ids de forma automática (autoincremento)
    @Column(name = "id_pessoa")
    private long idPessoa; //'long' não permite valor nulo - 'Long' permite

    private String nome;

    private String email;

    private String senha;

}

