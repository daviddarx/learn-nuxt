<template>
    <main class="container">
        <AppHeader />
        Test
        <AppRestaurantInfo :datasource="fooddata" />
    </main>
</template>

<script>
import { mapState } from 'vuex'
import AppHeader from '@/components/AppHeader.vue'
import AppRestaurantInfo from '@/components/AppRestaurantInfo.vue'

export default {
    name: 'IndexPage',
    components: {
        AppHeader,
        AppRestaurantInfo,
    },
    computed: {
        ...mapState(['fooddata']),
    },
}
</script>
