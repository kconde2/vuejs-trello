<template>
  <input name="message" v-on:change="setMessage" />
</template>

<script>
export default {
  name: 'InputMessage',
  props: {
    setMessage: Function
  }
}
</script>