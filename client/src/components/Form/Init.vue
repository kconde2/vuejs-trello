<template>
  <Formik>
    <Field type="text" name="firstname" label="Prénom" />
    <Field type="number" name="age"  label="Numéro de téléphone" />
  </Formik>
</template>

<script>
import Formik from "./Formik.vue";
import Field from "./Field.vue";

export default {
  components: {
    Formik,
    Field
  }
};
</script>

<style>
</style>
