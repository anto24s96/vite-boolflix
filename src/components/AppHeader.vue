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
                    <div class="input-group" id="searchBar">
                        <span class="input-group-text left-searchbar" id="basic-addon1"><i class="fa-solid fa-magnifying-glass"></i></span>
                        <input type="text" class="form-control right-searchbar" placeholder="Ricerca" v-model="store.search" @keyup.enter="$emit('perform_Search')">
                    </div>
                    <button type="button" class="btn btn-danger mx-4" @click="$emit('perform_Search')">SEARCH</button>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
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

        .left-searchbar {
            border-right: none;
            background-color: $black_color;

            i {
                color: grey;
            }
        }

        .right-searchbar {
            border-left: none;
            background-color: $black_color;
        }
    }
}
</style>