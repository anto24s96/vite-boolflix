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
    <div class="row my-row">
        <h2 class="mt-5 text-white" v-if="store.arrFilms != 0 ? true : false">Film</h2>
        <div class="d-flex slider-container">
            <AppMovies v-for="films, index in store.arrFilms" :key="index" :films="films"></AppMovies>
        </div>

        <h2 class="mt-5 text-white" v-if="store.arrSeries != 0 ? true : false">Serie Tv</h2>
        <div class="d-flex slider-container">
            <AppSeries v-for="series, index in store.arrSeries" :key="index" :series="series"></AppSeries>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.my-row {
    padding: 10px 100px;

    .slider-container {
        overflow-x: auto;
    }

}
</style>