<script>
import { store } from '../store';

export default {
    name: 'SelectProfile',
    data() {
        return {
            store
        }
    },
    methods: {
        getProfile() {
            store.flagProfile = false
        }
    },
}
</script>
<template lang="">
    <div class="container-fluid p-3 d-flex flex-column align-items-center justify">
        <div class="logo-container">
            <img src="../assets/netflix logo.png" alt="logo-netflix-profile" class="mt-3 pointer">
        </div>
        <div class="profile-container text-white">
            <h2 class="text-center">Chi vuole guardare Netflix?</h2>
            <ul class="d-flex mt-5">
                <li v-for="item, index in store.arrProfile" :key="index" class="list-unstyled mx-3 pointer" @click="getProfile()">
                    <img :src="item.img" alt="logo-profile" class="rounded-2">
                    <div class="text-center mt-1">{{ item.name }}</div>
                </li>
            </ul>
        </div>
        <div class="addProfile-container pt-5">
            <span class="pointer">Gestisci i tuoi profili</span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.profile-container {
    margin-top: 150px;

    img {
        width: 170px;
    }
}

.addProfile-container {
    span {
        font-size: 22px;
        padding: 10px 20px;
        border: 2px solid grey;
        color: grey;
    }
}
</style>