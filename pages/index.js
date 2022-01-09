import { useState } from "react";
import Seo from "../components/Seo";

export default function Hello({ results }) {
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        <div key={movie.id} className="movie">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
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
