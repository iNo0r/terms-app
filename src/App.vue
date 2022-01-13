<template>
  <Layout>
    <template v-slot:app-title> TERMA </template>
    <template v-slot:breadcrumbs>
      <Breadcrumbs />
    </template>
    <template v-slot:app-content>
      <router-view />
    </template>
  </Layout>
</template>

<script>
import Layout from "./components/reuse/layout.vue";
import Breadcrumbs from "./components/reuse/breadcrumbs.vue";

export default {
  components: {
    Layout,
    Breadcrumbs,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss">
</style>
