<template>
  <div>
    <div id="logout-btn" v-if="isAuth" @click="logOut">Log out</div>
  </div>
</template>

<script>
export default {
  computed: {
    isAuth() {
      return this.$store.getters["isAuth"];
    },
  },
  methods: {
    async logOut() {
      await this.$store.dispatch("logOut");
      await this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
#logout-btn {
  background: #bd2828;
  color: white;
  font-weight: 100;
  padding: 0.1rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
}
</style>