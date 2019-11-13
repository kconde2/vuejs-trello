<template>
  <div class="list" @dragover.prevent @drop="onDrop(list)">
    <button @click="goToList">Select Me</button>
    <h1>{{ list.name }} {{ list.cards|countDone }}</h1>
    <div class="list-cards">
      <card
        v-for="card in list.cards"
        v-bind:key="card.id"
        v-bind:card="card"
        :onDrag="handleDragCard(card)"
      />
    </div>
    <a v-on:click.prevent="toggleForm" href="http://google.fr">+ add card</a>
    <NewCard :open="showForm" @new-card="handleNewCard" :onCancel="toggleForm" />
  </div>
</template>

<script>
import Card from "./Card.vue";
import NewCard from "./NewCardPlusPlus.vue";
export default {
  name: "List",
  components: {
    card: Card,
    NewCard
  },
  props: {
    list: Object,
    onNewCard: Function
  },
  data: () => ({
    showForm: false
  }),
  filters: {
    countDone: function(cards) {
      return cards.filter(card => card.status && card.status === "done").length;
    }
  },
  inject: ["onDrag", "onDrop"],
  methods: {
    toggleForm: function() {
      this.showForm = !this.showForm;
    },
    handleNewCard: function(card) {
      this.toggleForm();
      this.onNewCard(card, this.list);
    },
    handleDragCard: function(card) {
      return () => this.onDrag(card, this.list);
    },
    goToList: function() {
      this.$router.push({
        name: "listHome",
        params: {
          listid: this.list.name
        }
      });
    }
  }
};
</script>

<style scoped>
.list {
  width: 20%;
  min-width: 20%;
  max-width: 20%;
  max-height: 100%;
  display: flex;
  flex-direction: columns;
  background-color: orange;
}
a {
  color: #fff;
}
a:hover {
  color: #efefef;
}
</style>
