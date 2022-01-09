import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../components/Seo";

export default function Hello({ results }) {
  const router = useRouter();

  const goToMoviesDetail = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };

  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        <div
          className="movie"
          key={movie.id}
          onClick={() => goToMoviesDetail(movie.id, movie.original_title)}
        >
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <Link href={`/movies/${movie.title}/${movie.id}`}>
            <a>
              <h4>{movie.original_title}</h4>
            </a>
          </Link>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
          justify-items: center;
        }
        .movie {
          display: flex;
          width: 50%;
          flex-direction: column;
          justify-items: center;
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
    // `http://localhost:3000/api/movies/`
  );
  const { results } = await response.json();

  return {
    props: {
      results,
    },
  };
}
