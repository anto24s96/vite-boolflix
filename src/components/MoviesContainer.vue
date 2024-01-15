<script>
import AppMovies from './AppMovies.vue';
import AppSeries from './AppSeries.vue';

import { store } from '../store.js';

export default {
    name: 'MoviesContainer',
    components: {
        AppMovies,
        AppSeries
    },
    data() {
        return {
            store
        }
    },
}
</script>
<template lang="">
    <div class="row">
        <h2 class="mt-5 text-white" v-if="store.arrFilms != 0 ? true : false">Film</h2>
        <AppMovies v-for="films, index in store.arrFilms" :key="index" :films="films"></AppMovies>

        <h2 class="mt-5 text-white" v-if="store.arrSeries != 0 ? true : false">Serie Tv</h2>
        <AppSeries v-for="series, index in store.arrSeries" :key="index" :series="series"></AppSeries>
    </div>
</template>
<style lang="">
    
</style>