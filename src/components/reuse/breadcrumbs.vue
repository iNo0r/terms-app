<template>
  <div id="breadcrumbs-c">
    <router-link
      class="breadcrumb-item"
      v-for="(route, index) in routes.names"
      :key="index"
      :to="routes.linkes[index]"
    >
      <!-- @click="navTo(route)"
      > -->
      / {{ route }}
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    routes() {
      let path = this.$route.path;
      let broken = path.split("/");
      //   because after splitting it will returns the first item ""
      let names = broken.filter((item) => item != "");
      let linkes = [];
      let routeBeforeIt = "";
      for (let i = 0; names[i]; i++) {
        linkes.push(routeBeforeIt + "/" + names[i]);
        routeBeforeIt = routeBeforeIt + "/" + names[i];
      }
      return { names, linkes };
    },
  },
};
</script>

<style lang="scss" scoped>
#breadcrumbs-c {
  //   display: flex;
  //   gap: 10px;
  .breadcrumb-item {
    text-decoration: none;
    font-family: Poppins;
    color: white;
    font-size: 0.8rem;
    margin-left: 0.7rem;
    padding: 0.3rem;

    &:hover {
      background: goldenrod;
      border-radius: 5px;
    }
  }
}
</style>