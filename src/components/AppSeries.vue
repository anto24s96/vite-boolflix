<script>
import { store } from '../store.js';

export default {
    name: 'AppSeries',
    props: {
        series: Object
    },
    data() {
        return {
            store
        }
    },
    computed: {
        flagUrl() {
            if (this.series.original_language.toUpperCase() == 'JA') {
                return `https://flagsapi.com/JP/shiny/24.png`;
            }
            else if (this.series.original_language.toUpperCase() == 'KO') {
                return `https://flagsapi.com/KR/shiny/24.png`;
            }
            else if (this.series.original_language.toUpperCase() == 'EN') {
                return `https://flagsapi.com/GB/shiny/24.png`;
            }
            else if (this.series.original_language.toUpperCase() == 'ZH') {
                return `https://flagsapi.com/CN/shiny/24.png`;
            }
            else {
                return `https://flagsapi.com/${this.series.original_language.toUpperCase()}/shiny/24.png`
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
        <img :src="getCover(series.poster_path)" alt="cover_copertina" class="img-fluid">
        <div>{{ series.name }}</div>
        <div>{{ series.original_name }}</div>
        <img :src="flagUrl" alt="series.original_language">
        <div>{{ series.vote_average }}</div>
    </div>
</template>
<style lang="">
    
</style>