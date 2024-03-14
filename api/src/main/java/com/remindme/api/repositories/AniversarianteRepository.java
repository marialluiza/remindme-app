package com.remindme.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.remindme.api.models.Aniversariante;

public interface AniversarianteRepository extends JpaRepository<Aniversariante, Long>, AniversarianteRepositoryCustom {
    
}