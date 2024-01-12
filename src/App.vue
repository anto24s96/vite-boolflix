<script>
import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

import { store } from './store';

export default {
    components: {
        AppHeader,
        AppMain,
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getMoviesandSeries() {
            /* IMPORTAZIONE DEI FILM */
            let apiMovies = store.urlFilms;

            apiMovies += `${store.apiKey}&query=${store.search}`;

            axios.get(apiMovies).then((response) => {
                store.arrFilms = response.data.results;
                store.founded = true
            });

            /* IMPORTAZIONE DELLE SERIE TV */
            let apiSeries = store.urlSeries;

            apiSeries += `${store.apiKey}&query=${store.search}`;

            axios.get(apiSeries).then((response) => {
                store.arrSeries = response.data.results;
                store.founded = true
            });
        }
    },
}
</script>
<template lang="">
    <div>
        <AppHeader @perform_Search="getMoviesandSeries"></AppHeader>   
        <AppMain></AppMain>             
    </div>
</template>
<style lang="scss">
@use './styles/generals.scss' as *;
@use './styles/partials/variables' as *;
</style>