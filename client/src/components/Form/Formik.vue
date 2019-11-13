<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  props: {
    initialValues: Object
  },
  data: () => ({}),
  methods: {
    // submit
  }
};
</script>

<style>
</style>
