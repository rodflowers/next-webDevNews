import axios from "axios";
import Head from "next/head";
import ArticuloLista from "../components/ArticuloLista";

export default function Home({ articulos }) {
  console.log(articulos);
  return (
    <div>
      <Head>
        <title>Rod Flow</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      <h1>Welcome to Next</h1>
      <ArticuloLista articulos={articulos} />
    </div>
  );
}

export const getStaticProps = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );

  return {
    props: {
      articulos: data,
    },
  };
};

export const getStaticPath = async () => {
  const { data } = axios.get(`http://jasonplaceholder.typicode.com/posts`);

  const ids = data.map((a) => a.id);
  const paths = ids.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
