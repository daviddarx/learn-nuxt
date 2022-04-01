<template>
    <div>
        <label :for="title">{{ title }}</label>
        <select :id="title" :name="title" @change="emitChange">
            <option value="">Please select...</option>
            <option v-for="option in options" :key="option" :value="option">
                {{ option }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'AppSelect',
    props: {
        title: {
            type: String,
            default: 'Select title',
        },
        options: {
            type: Array,
            default: () => ['option 1', 'option 2', 'option 3'],
        },
    },
    methods: {
        emitChange(e) {
            this.$emit('change', e.target.value)
        },
    },
}
</script>

<style lang="scss" scoped></style>
