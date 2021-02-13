import Nav from "./Nav";
import styles from "../styles/Layouts.module.css";
import Header from "./Header";

const Layouts = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layouts;
