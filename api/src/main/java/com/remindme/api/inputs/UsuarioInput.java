package com.remindme.api.inputs;

import lombok.Data;

@Data
public class UsuarioInput {

    private long idUsuario;

    private String username;

    private String password;

}