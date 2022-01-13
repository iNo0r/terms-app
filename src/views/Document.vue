<template>
  <div>
    <h2>Documenting section</h2>
    <!-- add new list  -->
    <button @click="toggleModal">new List ?</button>
    <New-list-modal v-if="isModal" @toggleModal="toggleModal"></New-list-modal>

    <!-- to prevernt having erros when no data existed  -->
    <div v-if="hasLists">
      <!-- All Lists-->
      <Lists @loadList="loadList" />

      <!-- picked List -->
      <List :list="choosenList" />
    </div>
  </div>
</template>

<script>
import NewListModal from "../components/Document/newListModal.vue";
import Lists from "../components/Document/ListsManu.vue";
import List from "../components/Document/List.vue";

export default {
  components: { NewListModal, Lists, List },
  data() {
    return {
      isModal: false,
      choosenList: "0",
    };
  },
  methods: {
    loadList(list) {
      this.choosenList = list;
    },
    toggleModal() {
      this.isModal = !this.isModal;
    },
  },
  computed: {
    termsLists() {
      let data = this.$store.getters["termsLists"];
      return data;
    },
    hasLists() {
      console.log(this.termsLists.length > 0);
      return this.termsLists.length > 0;
    },
  },
  beforeCreate() {
    this.$store.dispatch("loadData");
  },
};
</script>

