<template>
    <div>
        <div class="grid-row">
            <label for="title">Title :</label>
            <input id="title" v-model="name"/>
        </div>
        <div class="grid-row">
            <label for="description">Description :</label>
            <input id="description" v-model="description"/>
        </div>
        <div class="grid-row">
            <label for="velocity">Velocity :</label>
            <input id="velocity" v-model="velocity"/>
        </div>
        <div class="grid-row">
            <label>Status:</label>
            <label>New <input type="radio" name="status" value="new" v-model="status"></label>
            <label>Done <input type="radio" name="status" value="done" v-model="status"></label>
        </div>
        <a v-on:click.prevent="handleSubmit">Submit</a>
    </div>
</template>

<script>
export default {
    name: "NewCard",
    data: () => ({
        name: "plip",
        description: "plop",
        velocity: 0,
        status: "done"
    }),
    methods: {
        handleSubmit: function(){
            this.$emit('new-card', this.$data);
        }
    },
}
</script>

<style scoped>
    .grid-row{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
</style>