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
    <main class="container-fluid pb-5">
        <MoviesContainer></MoviesContainer>
    </main>

</template>
<style lang="scss" scoped></style>