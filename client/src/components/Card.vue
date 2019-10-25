<template>
    <div class="card" draggable @dragstart="onDrag">
        <h1>{{ card.name }}</h1>
        <div class="waiting" v-if="card.waiting">
            waiting
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props:{
        card:Object,
        status:Boolean,
        onDrag:Function
    },

}
</script>

<style scoped>
.card {
    width: 100%;
    height:50px;
    background-color: grey;
}
</style>