<template>
  <div @click="$emit('toggleModal')" id="modal-background"></div>
  <div id="modal-container">
    <h2>New List</h2>
    <h6>
      last list was : <i> {{ lastListName }} </i>
    </h6>
    <input type="text" v-model="listName" placeholder="new list name" />
    <input
      type="text"
      v-model="listDescription"
      placeholder="list description"
    />
    <button @click="createList">create</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listName: "",
      listDescription: "",
    };
  },
  emits: ["toggleModal"],
  computed: {
    lastListName() {
      let lists = this.$store.getters["termsLists"];
      console.log(lists);
      let listLength = lists.length;

      return lists[listLength - 1].listName;
    },
  },
  methods: {
    createList() {
      let data = {
        listName: this.listName,
        listDescription: this.listDescription,
      };
      this.$store.dispatch("addList", data);
    },
  },
};
</script>

<style lang="scss" scoped>
#modal-background {
  height: 100%;
  width: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.103);
  top: 0%;
  left: 0%;
}
#modal-container {
  position: fixed;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -30%);
  height: 20rem;
  width: 15rem;
  background: gold;
  padding: 1rem;
  border-radius: 10px;
  //   display: grid;
  //   grid-template-columns: 1fr 1fr 1fr;
  //   grid-template-rows: 1fr 1fr 1fr;
  //   grid-template-areas: "x x x" "y y y" "z z z";
}
</style>