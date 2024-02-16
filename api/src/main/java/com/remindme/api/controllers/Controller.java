package com.remindme.api.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
    
    @GetMapping("")
    public String mensagem(){
        return "ta funfando 2";
    }
    
}
