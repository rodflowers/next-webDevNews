import Link from "next/link";
import styles from "../styles/Articulo.module.css";

const ArticuloItem = ({ articulo }) => {
  return (
    <Link href="/articulo/[id]" as={`/articulo/${articulo.id}`}>
      <a className={styles.card}>
        <h3>{articulo.title} &rarr;</h3>
        <p>{articulo.body}</p>
      </a>
    </Link>
  );
};

export default ArticuloItem;
