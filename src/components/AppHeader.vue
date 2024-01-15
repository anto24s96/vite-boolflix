<script>
import { store } from '../store.js';

export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    },
}
</script>
<template lang="">
    <header class="container-fluid px-5 py-4">
        <div class="row align-items-center">
            <div class="col-6">
                <div class="container_title text-white d-flex align-items-center">
                    <img src="../assets/netflix logo.png" alt="netflix-logo" class="pointer">
                    <ul class="list-unstyled d-flex mb-0 mx-5">
                        <li class="me-3 pointer">Home</li>
                        <li class="me-3 pointer">Serie TV</li>
                        <li class="me-3 pointer">Film</li>
                        <li class="me-3 pointer">Original</li>
                        <li class="me-3 pointer">Aggiunti di recente</li>
                        <li class="me-3 pointer">La mia lista</li>
                    </ul>
                </div>
                
            </div>
            <div class="col-6">
                <div class="container_searchbar_button text-white d-flex align-items-center justify-content-end">
                    <input class="form-control form-control-md" type="text" placeholder="Ricerca" id="searchBar" v-model="store.search" @keyup.enter="$emit('perform_Search')">
                    <button type="button" class="btn btn-danger mx-4" @click="$emit('perform_Search')">SEARCH</button>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
@use '../styles/partials/variables' as *;

header {
    background-color: $black_color;

    .container_title {
        img {
            width: 150px;
        }
    }

    #searchBar {
        width: 280px;
    }
}
</style>