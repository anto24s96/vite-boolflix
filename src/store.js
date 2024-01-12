import { reactive } from "vue";

export const store = reactive({
    urlFilms: 'https://api.themoviedb.org/3/search/movie',
    urlSeries: 'https://api.themoviedb.org/3/search/tv',
    apiKey: '?api_key=43191dd8ed9d3a83087614928b2138c0',
})