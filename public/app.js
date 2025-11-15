// Importando o formulário do html

const form = document.getElementById("usuarios_form");
const user_list = document.getElementById("user_list");

// Chamada da função

mostrarUsuarios();

// Associar o formulário a um evento

form.addEventListener("submit", (e) => {
  // Retirada do comportamento padrão do formulário, ou seja, ele não vai mais recarregar toda vez que o formulário for enviado

  e.preventDefault();

  // Coletando o nome

  const nome = document.getElementById("nome").value;

  // Coletando o email

  const email = document.getElementById("email").value;

  // Teste

  console.log(nome, email);

  // Ativar função de cadastrar usuário

  cadastrarUsuario(nome, email);
});

// Criação da funçã cadastrarUsuario

function cadastrarUsuario(nome, email) {
  // O fetch será usado para solicitar algo do frontend para o backend

  fetch("/api/users/ ", {
    method: "POST",

    // Informa que o objeto recebido do html será um JSON
    headers: { "Content-type": "application/json" },

    // Transforma a string do html em JSON
    body: JSON.stringify({ nome, email }),
  }).then(() => {
    // Limpa o formulário após o cadastro ser realizado

    form.reset();
    mostrarUsuarios();
  });
}

// Função de cadastrar usuário

//  Função assíncrona executa a função, mesmo sem a solicitação ter sido respondida. JavaScript é assíncrono por padrão

function mostrarUsuarios() {
  fetch("/api/users/")
    .then((res) => res.json())

    .then(data => {

      user_list.innerHTML = '';

      data.forEach((user) => {
        const linha = document.createElement('li');
        linha.innerHTML = `${user.nome} - ${user.email}
            <button onClick={atualizarUsuario(${user.id})}> Editar </button>
            <button onClick={excluirUsuario(${user.id})}> Excluir </button>`;
        user_list.append(linha);
      });
    });
}

// Função para editar o usuário

function atualizarUsuario(id) {
  const nome = prompt("Digite o novo nome: ");
  const email = prompt("Digite o novo email: ");

  fetch(`/api/users/${id}`, {
    method: 'PUT',

    // Informa que o objeto recebido do html será um JSON
    headers: { "Content-type": "application/json" },

    // Transforma a string do html em JSON
    body: JSON.stringify({ nome, email })

  })
    .then(() => {
    mostrarUsuarios();
  });
}
// Função para excluir o usuário

function excluirUsuario(id) {
  const confirmacao = confirm("Tem certeza que deseja excluir este usuário?");

  if (!confirmacao) {
    return;
  }

  fetch(`/api/users/${id}`, {
    method: 'DELETE',
  }).then(() => {
    mostrarUsuarios();
  });
}
