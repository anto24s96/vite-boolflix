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
                <div class="container_title text-white">
                    <h2 class="mb-0">BOOLFLIX</h2>
                </div>
            </div>
            <div class="col-6">
                <div class="container_searchbar_button text-white d-flex align-items-center justify-content-end">
                    <input class="form-control form-control-lg" type="text" placeholder="Ricerca" id="searchBar" v-model="store.search">
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

    #searchBar {
        width: 400px;
    }
}
</style>