function Item({ marca, lancamento }) {
  return (
    <>
      <li>
        {marca} - {lancamento}
      </li>
    </>
  );
}
// Item.propTypes = {
//   // Avançando em Props
//   // isRequired torna o props obrigatório
//   marca: PropTypes.string.isRequired,
//   // number torna obrigatório o props do tipo numero
//   lancamento: PropTypes.number,
// };

Item.defaultProps = {
  marca: "Marca não informada",
  lancamento: 0,
};

export default Item;
