<template>
  <Layout>
    <template v-slot:app-title> TERMA </template>
    <template v-slot:breadcrumbs>
      <Breadcrumbs />
    </template>
    <template v-slot:user-section>
      <Logout />
    </template>
    <template v-slot:app-content>
      <router-view />
    </template>
  </Layout>
</template>

<script>
import Layout from "./components/reuse/layout.vue";
import Breadcrumbs from "./components/reuse/breadcrumbs.vue";
import Logout from "./components/reuse/logout.vue";

export default {
  components: {
    Layout,
    Breadcrumbs,
    Logout,
  },
  data() {
    return {};
  },
  methods: {},
  created() {
    this.$store.dispatch("setIsAuth");
  },
};
</script>
<style lang="scss">
</style>
