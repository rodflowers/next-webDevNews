import style from "../styles/Articulo.module.css";
import ArticuloItem from "./ArticuloItem";

const ArticuloLista = ({ articulos }) => {
  return (
    <div className={style.grid}>
      {articulos.map((a) => (
        <ArticuloItem key={a.id} articulo={a} />
      ))}
    </div>
  );
};

export default ArticuloLista;
