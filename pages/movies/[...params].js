import Seo from "../../components/Seo";

export default function Detail({ title, overview, releaseDate, voteAverage }) {
  return (
    <div>
      <Seo title={title} />
      <h3>{title}</h3>
      <div>{releaseDate}</div>
      <div>{overview}</div>
      <div>{voteAverage}</div>
    </div>
  );
}

/**
 * getServerSideProps()의 컨텍스트에서 router 데이터를 가져올 수 있음. 대박..
 */
export async function getServerSideProps({ params: { params } }) {
  const [title, id] = params;
  try {
    const response = await fetch(`http://localhost:3000/api/movies/${id}`);
    const json = await response.json();
    const { overview, release_date, vote_average } = json;

    return {
      props: {
        title: title,
        overview: overview,
        releaseDate: release_date,
        voteAverage: vote_average,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}
