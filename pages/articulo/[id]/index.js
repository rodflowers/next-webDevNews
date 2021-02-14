import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

const articulo = ({ articulo }) => {
  // const router = useRouter();
  // const { id } = router.query;
  return (
    <>
      <h2>{articulo.title}</h2>
      <p>{articulo.body}</p>
      <br />
      <Link href="/">Volver</Link>
    </>
  );
};

export const getServerSideProps = async (context) => {
  console.log("CONTEXT =>", context);
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  return {
    props: {
      articulo: data,
    },
  };
};

export default articulo;
