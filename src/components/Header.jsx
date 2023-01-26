/* 
    Ao utilizar css modules deve-se atentar:
    - precisa ter ".module" no nome do arquivo css
    - é necessário utilizar classes
    - para importar, precisa dar um nome, pois irá utilizar como variável
    - para ativar a classe precisa acessar na importação o nome da classe, que contém como valor o nome da classe real(uma hash única para não dar conflito com outros módulos) 
*/
import styles from "./Header.module.css";
import igniteLogo from "../assets/ignite-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo do Ignite" />
    </header>
  );
}
