function Form() {
  // Função para o evento de submit utilizando o 'e' para previnir o comportamento padrão do form
  function cadastrarUsuario(e) {
    // para o comportamento do html

    e.preventDefault();
    console.log("Usuário cadastrado");
  }
  return (
    <div>
      <h1>Meu Formulario</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <input type="text" name="nome" placeholder="Digite seu nome" />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
}
export default Form;
