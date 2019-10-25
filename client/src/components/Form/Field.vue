<template>
  <label>
    <span>{{ label }}</span>
    <input :type="type" :name="name" />
  </label>
</template>

<script>
export default {
  props: {
    type: String,
    name: String,
    label: String
  }
};
</script>

<style>
</style>
