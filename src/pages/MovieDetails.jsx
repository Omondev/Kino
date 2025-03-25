
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/MovieDetails.css"; 

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c57cb1eb55509479c41be34d6339ea54&append_to_response=videos`)
            .then(res => res.json())
            .then(data => {
                setMovie(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [id]);

    if (loading) return <p className="loading">Loading...</p>;

    if (!movie) return <p className="error-message">Movie not found!</p>;

    const trailer = movie.videos?.results.find(video => video.type === "Trailer");

    return (
        <div className="movie-details">
            <div className="movie-info">
                <h1 className="movie-title">{movie.title}</h1>
                <p className="movie-description">{movie.overview}</p>
                <p className="movie-release"><strong>Release Date:</strong> {movie.release_date}</p>
                <p className="movie-rating"><strong>Rating:</strong> {movie.vote_average}</p>
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="movie-poster"
                />
            </div>

            {trailer && (
                <div className="trailer">
                    <h3 className="trailer-title">Trailer</h3>
                    <iframe
                        className="trailer-video"
                        src={`https://www.youtube.com/embed/${trailer.key}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            )}
        </div>
    );
}

export default MovieDetails;
