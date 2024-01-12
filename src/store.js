import { reactive } from "vue";

export const store = reactive({
    urlFilms: 'https://api.themoviedb.org/3/search/movie?api_key=',
    urlSeries: 'https://api.themoviedb.org/3/search/tv?api_key=',
    apiKey: '43191dd8ed9d3a83087614928b2138c0',

    arrFilms: [],
    arrSeries: [],

    search: '',

    founded: false
})