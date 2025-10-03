import Item from "./Item";
// Avançando em Props
import PropTypes from "prop-types";
function List() {
  return (
    <>
      <h1>Minha lista</h1>
      <ul>
        <Item marca="Ferrari" lancamento={1985} />
        <Item marca="Fiat" lancamento={2000} />
      </ul>
    </>
  );
}
export default List;
