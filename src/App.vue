<script>
import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import SelectProfile from './components/SelectProfile.vue';

import { store } from './store';

export default {
    components: {
        AppHeader,
        AppMain,
        SelectProfile
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getMoviesandSeries() {
            /* IMPORTAZIONE DEI FILM E SERIE */
            let moviesGet = store.urlFilms
            let seriesGet = store.urlSeries

            if (store.search !== '') {
                moviesGet += `&query=${store.search}`
                seriesGet += `&query=${store.search}`
            }

            /* CHIAMATA API */
            axios.get(moviesGet).then((response) => {
                this.store.arrFilms = response.data.results
                store.founded = true
            })

            axios.get(seriesGet).then((response) => {
                this.store.arrSeries = response.data.results
                store.founded = true
            })
        }
    },
}
</script>
<template lang="">
        <Transition>
            <div v-if="store.flagProfile" class="position-absolute overlay">
                <SelectProfile></SelectProfile>
            </div>
            <div v-else class="position-relative">
                <AppHeader @perform_Search="getMoviesandSeries"></AppHeader>   
                <AppMain></AppMain>             
            </div>
        </Transition>
</template>
<style lang="scss">
@use './styles/generals.scss' as *;
@use './styles/partials/variables' as *;

.overlay {
    top: 36%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.6s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>