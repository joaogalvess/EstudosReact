import "./App.css";
// Importando o componente HelloWorld da pasta components
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import List from "./components/List";
function App() {
  // Declara variaveis
  const nome = "João Gabriel";
  // cria um função que pode ser usada em varias partes do codigo
  // Constante usada na props
  const nomeprops = "GabrielJoao";

  function soma(a, b) {
    return a + b;
  }
  // atributos
  const url = "https://via.placeholder.com/150";
  // Função usada na props

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      {/* Para chamar variaveis declaradas utilizamos '{noveVariavel}'  */}
      <p>Olá, {nome}</p>
      {/* Utilizando funções em React */}
      <p>soma: {soma(1, 2)}</p>
      {/* Comentarios ctrl + / */}
      {/* adicionando a Imagem */}
      <img src={url} alt="Minha Imagem" />
      {/* ---------------------------------------------- */}
      {/* Componentes */}
      {/* Chamando o componente HelloWorld  */}
      <HelloWorld />
      {/* ---------------------------------------------- */}
      {/* Adicionando o props */}
      <SayMyName nome="João Gabriel" />
      <SayMyName nome="Ingrid" />
      <SayMyName nome={nomeprops} />
      {/* Adicionando mais props */}
      <Pessoa
        foto="https://via.placeholder.com/150"
        nome="João Gabriel"
        idade="18"
        profissao="Desenvolvedor"
      />
      {/* ---------------------------------------------- */}
      {/* Adicionando o CSS */}
      <h1>Teste de CSS em React</h1>
      {/* ---------------------------------------------- */}
      {/* Renderização de listas */}
      {/* Utilizando o componente List */}
      <List />
    </div>
  );
}
export default App;
