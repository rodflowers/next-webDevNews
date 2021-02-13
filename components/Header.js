import style from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={style.title}>
        <span>WebDev</span>News
      </h1>
      <p className={style.description}>
        Mantente informado con las últimas noticias del mundo del desarrollo web
      </p>
    </div>
  );
};

export default Header;
