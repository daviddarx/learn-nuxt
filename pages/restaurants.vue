<template>
    <main class="container restaurant">
        <div class="restaurantheading">
            <h1>Restaurants</h1>
            <AppSelect
                :title="'What cuisine do you want?'"
                :options="filteringOptions"
                @change="filterRestaurant"
            />
        </div>

        <AppRestaurantInfo :datasource="filteredRestaurant" />
    </main>
</template>

<script>
import { mapState } from 'vuex'
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
            filteringOptions: ['tacos', 'pizza', 'dim sum'],
        }
    },
    computed: {
        ...mapState(['fooddata']),
        filteredRestaurant() {
            if (this.selectedRestaurant) {
                return this.fooddata.filter((el) => {
                    const name = el.name.toLowerCase()

                    return name.includes(this.selectedRestaurant)
                })
            }
            return this.fooddata
        },
    },
    methods: {
        filterRestaurant(restaurant) {
            this.selectedRestaurant = restaurant
        },
    },
}
</script>
