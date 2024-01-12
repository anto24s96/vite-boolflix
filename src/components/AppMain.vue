<script>
import MoviesContainer from './MoviesContainer.vue';

import { store } from '../store.js';

export default {
    name: 'AppMain',
    components: {
        MoviesContainer
    },
    data() {
        return {
            store
        }
    },
}
</script>
<template lang="">
    <div class="container">
        <MoviesContainer></MoviesContainer>
    </div>
</template>
<style lang="">
    
</style>