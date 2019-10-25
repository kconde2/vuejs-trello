<template>
  <Modal :open="open" :onClose="onCancel" title="New Card">
    <div class="grid-row">
      <label for="title">Title :</label>
      <input id="title" v-model="name" />
    </div>
    <div class="grid-row">
      <label for="description">Description :</label>
      <input id="description" v-model="description" />
    </div>
    <div class="grid-row">
      <label for="velocity">Velocity :</label>
      <input id="velocity" v-model="velocity" />
    </div>
    <div class="grid-row">
      <RadioGroup
        v-model="status"
        name="status"
        label="Status"
        :choices="[{id: 'new', text: 'New'}, {id: 'done', text: 'Done'}]"
      />
    </div>
    <template slot="footer">
      <a v-on:click.prevent="handleSubmit">Submit</a>
    </template>
  </Modal>
</template>

<script>
import Modal from "./Modal";
import RadioGroup from "./RadioGroup";

export default {
  name: "NewCard",
  components: {
    Modal,
    RadioGroup
  },
  data: () => ({
    name: "plip",
    description: "plop",
    velocity: 0,
    status: "done"
  }),
  props: {
    onCancel: Function,
    open: Boolean
  },
  methods: {
    handleSubmit: function() {
      this.$emit("new-card", { ...this.$data });
    }
  }
};
</script>

<style scoped>
.grid-row {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
