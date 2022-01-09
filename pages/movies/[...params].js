import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({ params }) {
  const [title, id] = params;

  return (
    <div>
      <Seo title={title} />
      <h4>{title ?? "Loading..."}</h4>
      <h5>{id ?? "Loading..."}</h5>
    </div>
  );
}

/**
 * getServerSideProps()의 컨텍스트에서 router 데이터를 가져올 수 있음. 대박..
 */
export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
