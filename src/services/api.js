const API_KEY = 'c57cb1eb55509479c41be34d6339ea54';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    if (!response.ok) {
        throw new Error('Mashhur filmlarni olishda xatolik yuz berdi');
    }
    const data = await response.json();
    return data.results;
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    if (!response.ok) {
        throw new Error('Filmlarni qidirishda xatolik yuz berdi');
    }
    const data = await response.json();
    return data.results;
};
