<template>
  <div :class="'field field-' + type">
    <label v-if="inputTypes.indexOf(type) >= 0">
      <span>{{ label }}</span>
      <input :type="type" :name="name" />
    </label>

    <label v-if="type == 'select'">
      <span>{{ label }}</span>
      <select :name="name">
        <slot></slot>
      </select>
    </label>

    <label v-if="type == 'textarea'">
      <span>{{ label }}</span>
      <textarea :name="name"></textarea>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    name: String,
    label: String
  },
  data: () => ({
    inputTypes: ["text", "number"],
    fieldTypes: ["text", "number", "textarea"]
  }),
  mounted: () => {
    console.log("beforeCreate");
    // console.log(this.fieldTypes);
    // if (this.fieldTypes.indexOf(type) < 0) {
    //   throw new Error("[Fied Component]");
    // }
  }
};
</script>

<style>
</style>
