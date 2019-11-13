<template>
  <Formik>
    <Field type="text" name="firstname" label="Prénom" />
    <Field type="number" name="phone" label="Numéro de téléphone" />
    <Field type="select" name="age" label="Couleur préférée">
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
    </Field>
    <Field type="textarea" name="comment" label="Commentaires" />
    <button type="submit">Submit</button>
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
