<template>
    <main class="container restaurant">
        <div class="restaurantheading">
            <h1>Restaurants</h1>
            <AppSelect
                :title="'What cuisine do you want?'"
                @change="filterRestaurant"
            />
        </div>

        <AppRestaurantInfo />
    </main>
</template>

<script>
import AppRestaurantInfo from '@/components/AppRestaurantInfo.vue'
import AppSelect from '@/components/AppSelect.vue'

export default {
    name: 'IndexPage',
    components: {
        AppRestaurantInfo,
        AppSelect,
    },
    data() {
        return {
            selectedRestaurant: '',
        }
    },
    methods: {
        filterRestaurant(restaurant) {
            this.selectedRestaurant = restaurant
        },
    },
}
</script>
