import { reactive } from "vue";

export const store = reactive({
    urlFilms: 'https://api.themoviedb.org/3/search/movie?api_key=43191dd8ed9d3a83087614928b2138c0&language=it-IT',
    urlSeries: 'https://api.themoviedb.org/3/search/tv?api_key=43191dd8ed9d3a83087614928b2138c0&language=it-IT',

    arrFilms: [],
    arrSeries: [],
    search: '',
    posterPath: 'https://image.tmdb.org/t/p/w342',

    founded: false,
    flagProfile: true,
    activeUser: null,

    arrProfile: [
        {
            name: 'Geralt',
            img: 'https://i.imgur.com/KclrcPw.png',
        },
        {
            name: 'Yennefer',
            img: 'https://i.imgur.com/cxjXa7S.png',
        },
        {
            name: 'Tokyo',
            img: 'https://i.imgur.com/ih6xvXa.png',
        },
        {
            name: 'Billy',
            img: 'https://i.imgur.com/GqJYXyv.png',
        }
    ],
})