import { moneyFormat } from "../helpers";
const SingleItem = ({ price, type, id, eliminarItem, editItem }) => {
  const HandleDelete = (e) => {
    e.preventDefault();
    const answer = window.confirm(`Borrar suscripcion a${type}`);
    if (answer) {
      eliminarItem(id);
    }
  };

  const HandleEdit = (e) => {
    e.preventDefault();
    const answer = window.confirm(`Estas seguro de Editar a${type}`);
    if (answer) {
      editItem(id);
    }
  };

  const urlImage = `/src/images/${type}.png`;
  return (
    <div className="single-item">
      <img src={urlImage} alt="Services" />
      <h3>Precio:{moneyFormat(Number(price))}</h3>
      <a href="" className="delete" onClick={HandleDelete}>
        Borrar
      </a>
      <a href="" className="edit" onClick={HandleEdit}>
        Editar
      </a>
    </div>
  );
};
export default SingleItem;
