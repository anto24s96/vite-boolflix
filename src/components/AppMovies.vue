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
        },

        getVote(vote) {
            let reviews = vote.toFixed() / 2
            return reviews
        }
    },
}
</script>
<template lang="">
    <div class="col-6 col-sm-4 col-lg-3">
        <div class="card-container my-3">
            <div class="theCard">
                <div class="front">
                    <img :src="getCover(films.poster_path)" alt="cover_copertina">
                </div>
                <div class="back">
                    <div>
                        <span class="fw-bolder">Titolo:</span> 
                        {{ films.title }}</div>
                    <div class="mt-2">
                        <span class="fw-bolder">Titolo Originale:</span> 
                        {{ films.original_title }}</div>
                    <div class="mt-3">
                        <span class="fw-bolder">Lingua:</span>
                        <img :src="flagUrl" alt="films.original_language">
                    </div>
                    <div class="mt-3">
                        <i class="fas fa-star" :class="getVote(films.vote_average) >= 1 ? 'reviewed' : ''"></i>
                        <i class="fas fa-star" :class="getVote(films.vote_average) >= 2 ? 'reviewed' : ''"></i>
                        <i class="fas fa-star" :class="getVote(films.vote_average) >= 3 ? 'reviewed' : ''"></i>
                        <i class="fas fa-star" :class="getVote(films.vote_average) >= 4 ? 'reviewed' : ''"></i>
                        <i class="fas fa-star" :class="getVote(films.vote_average) == 5 ? 'reviewed' : ''"></i>
                    </div>
                    <div class="mt-3"> 
                        {{ films.overview }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/card.scss' as *;

.front {
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>