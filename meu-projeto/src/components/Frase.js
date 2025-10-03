import styles from "./Frase.module.css";

function Frase() {
  return (
    <div className={styles.fraseContainer}>
      <h1> Importando para HelloWorld</h1>
      <p className={styles.fraseContent}>Este é o meu componente com CSS</p>
    </div>
  );
}

export default Frase;
