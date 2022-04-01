<template>
    <main class="container cart">
        <div v-if="totalCount > 0">
            <h2>Cart</h2>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Add Ons</th>
                        <th>Amount</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in cart" :key="item.id">
                        <td>
                            {{ item.item }}
                            <span v-if="item.options"
                                >- {{ item.options }}</span
                            >
                        </td>
                        <td>
                            <span
                                v-for="addon in item.addOns"
                                :key="addon"
                                class="comma"
                            >
                                {{ addon }}</span
                            >
                        </td>
                        <td>{{ item.count }}</td>
                        <td>{{ item.combinedPrice }}</td>
                    </tr>
                    <tr>
                        <td colspan="3"></td>
                        <td class="total">
                            Total: ${{ totalPrice.toFixed(2) }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-else class="empty-cart">
            <h2>Your Cart is empty</h2>
            <nuxt-link to="/restaurants">
                <button>Fill it up!</button>
            </nuxt-link>
        </div>
    </main>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
    name: 'Cart',
    computed: {
        ...mapState(['cart']),
        ...mapGetters(['totalPrice', 'totalCount']),
    },
}
</script>

<style lang="scss" scoped>
.empty-cart {
    text-align: center;

    h2 {
        margin-bottom: 2em;
    }
}
</style>
