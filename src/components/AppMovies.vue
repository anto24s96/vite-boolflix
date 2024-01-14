<script>
import { store } from '../store.js';

export default {
    name: "AppMovies",
    props: {
        films: Object
    },
    data() {
        return {
            store
        }
    },
    computed: {
        flagUrl() {
            if (this.films.original_language.toUpperCase() == 'JA') {
                return `https://flagsapi.com/JP/shiny/24.png`;
            }
            else if (this.films.original_language.toUpperCase() == 'KO') {
                return `https://flagsapi.com/KR/shiny/24.png`;
            }
            else if (this.films.original_language.toUpperCase() == 'EN') {
                return `https://flagsapi.com/GB/shiny/24.png`;
            }
            else if (this.films.original_language.toUpperCase() == 'ZH') {
                return `https://flagsapi.com/CN/shiny/24.png`;
            }
            else {
                return `https://flagsapi.com/${this.films.original_language.toUpperCase()}/shiny/24.png`
            }
        }
    }
}
</script>
<template lang="">
    <div class="col-3 my-3">
        <div class="cover_container">
            <div class="front"></div>
            <div class="back"></div>
            <img :src="`https://image.tmdb.org/t/p/w342/${films.poster_path}`" alt="cover" class="copertina">
            <div>{{ films.title }}</div>
            <div>{{ films.original_title }}</div>
            <img :src="flagUrl" alt="films.original_language">
            <div>{{ films.vote_average }}</div>
        </div>
    </div>
</template>
<style lang="scss" scoped></style>