<template>
  <div class="lists-container">
    <h2>lists</h2>
    <ul>
      <li class="list-title" v-for="list in termsLists" :key="list.listIndex">
        <span @click="$emit('loadList', list)">
          <span style="color: blue"> {{ list.listName }} </span> ||
          <span style="color: green"> {{ list.terms.length }} </span>
        </span>

        <button @click="deleteList(list._listId)">Delete</button>
        <EditListModal :list="list" />
      </li>
    </ul>
  </div>
</template>

<script>
import EditListModal from "./listEditModal.vue";
export default {
  components: {
    EditListModal,
  },
  emits: ["loadList"],
  computed: {
    termsLists() {
      let data = this.$store.getters["termsLists"];
      return data;
    },
  },
  methods: {
    deleteList(listId) {
      this.$store.dispatch("deleteList", listId);
    },
  },
};
</script>

<style lang="scss" scoped>
.lists-container {
  background: honeydew;
  .list-title {
    // background: gold;
    &:hover {
      background: fuchsia;
    }
  }
}
</style>