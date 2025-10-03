// criar uma função é basicamente criar um componente
// importantando componente Frase
import Frase from "./Frase";

function HelloWorld() {
  return (
    <div>
      // componente Frase
      <Frase />
      <h1>Olá Mundo</h1>
      <p>Meu primeiro componente</p>
    </div>
  );
}

export default HelloWorld;
