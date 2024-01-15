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
    },
    methods: {
        getCover(path) {
            let imgPath = store.posterPath + path
            return imgPath
        }
    },
}
</script>
<template lang="">
    <div class="my-3">
        <img :src="getCover(films.poster_path)" alt="cover_copertina" class="img-fluid">
        <div>{{ films.title }}</div>
        <div>{{ films.original_title }}</div>
        <img :src="flagUrl" alt="films.original_language">
        <div>{{ films.vote_average }}</div>
    </div>
</template>
<style lang="scss" scoped></style>