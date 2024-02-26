import React, { useState } from 'react';

export default function Form() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const cadastrarUsuario = await fetch('http://localhost:8080/salvar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email, senha }),
      });

      if (cadastrarUsuario.ok) {
        alert('Usuário cadastrado com sucesso!');
        // Limpar os campos do formulário após o cadastro
        setNome('');
        setEmail('');
        setSenha('');
      } else {
        alert('Ocorreu um erro ao cadastrar o usuário.');
      }
    } catch (error) {
      console.error('Erro ao enviar requisição:', error);
      alert('Ocorreu um erro ao cadastrar o usuário.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          id="senha"
          name="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
