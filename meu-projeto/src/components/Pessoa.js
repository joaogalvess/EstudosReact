// Para evitar uma repetição de props ex.:       <img src={props.foto} alt={props.nome} />
// podemos usar desestruturação de props
// Nesse caso, passamos as props direto na função
// Exemplo: function Pessoa({foto, nome, idade, profissao}) {
function Pessoa({ nome, foto, idade, profissao }) {
  return (
    <div>
      <img src={foto} alt={nome} />
      <h2>Nome: {nome}</h2>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissao}</p>
    </div>
  );
}
export default Pessoa;
