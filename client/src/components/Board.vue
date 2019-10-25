<template>
  <div class="board">
    <div class="board-name">{{ name }}</div>
    <div class="board-list">
      <list
        v-for="list in lists"
        v-bind:key="list.id"
        v-bind:list="list"
        v-bind:onNewCard="handleNewCard"
      ></list>
    </div>
  </div>
</template>

<script>
import List from "./List.vue";
export default {
  name: "Board",
  components: {
    list: List
  },
  data: () => ({
    dragItem: null,
    lists: [
      {
        name: "1",
        cards: [
          { name: "test1", waiting: 1, status: "done" },
          { name: "test2", waiting: 0 }
        ]
      },
      {
        name: "2",
        cards: [{ name: "test3", waiting: 1 }, { name: "test4", waiting: 0 }]
      },
      {
        name: "3",
        cards: [{ name: "test5", waiting: 1 }, { name: "test6", waiting: 0 }]
      }
    ],
    name: "Board 1"
  }),
  methods: {
    handleNewCard: function(card, into) {
      console.log(this.lists);
      this.lists = this.lists.map(list => {
        if (into.name === list.name) {
          return { ...list, cards: [card, ...list.cards] };
        } else {
          return list;
        }
      });
      console.log(card);
    },
    onDrag: function(card, list) {
      console.log(this.dragItem);
      console.log(card);
      this.dragItem = {
        card,
        from: list
      };
    },
    onDrop: function(to) {
      const { card, from } = this.dragItem;
      this.lists = this.lists.map(list => {
        if (list.name === from.name) {
          list.cards = list.cards.filter(item => item.name !== card.name);
        }
        if (list.name == to.name) {
          list.cards = [card, ...list.cards];
        }
        return list;
      });
    }
  },
  provide: function() {
    return {
      onDrag: this.onDrag,
      onDrop: this.onDrop
    };
  }
};
</script>

<style scoped>
.board {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: green;
}
.board-name {
  width: 100%;
  text-align: center;
}
.board-list {
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
  background-color: red;
}
a {
  color: darkgreen;
}
</style>
