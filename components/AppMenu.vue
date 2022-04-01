<template>
    <nav>
        <ul>
            <li>
                <nuxt-link exact to="/"><AppLogo /></nuxt-link>
            </li>
            <li><nuxt-link to="/restaurants">Restaurants</nuxt-link></li>
        </ul>
        <div v-if="totalCount > 0" class="smallnum">{{ totalCount }}</div>
        <nuxt-link to="/cart">Cart</nuxt-link>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import AppLogo from '@/components/AppLogo.vue'

export default {
    name: 'AppMenu',
    components: {
        AppLogo,
    },
    computed: {
        ...mapGetters(['totalCount']),
    },
}
</script>

<style lang="scss" scoped></style>
