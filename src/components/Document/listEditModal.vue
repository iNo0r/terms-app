<template>
  <div>
    <button @click="toggleModal">Edit</button>

    <div v-if="isModal">
      <div @click="toggleModal" id="modal-background"></div>
      <div id="modal-container">
        <h2>Edit List</h2>
        <!-- <h6>
      last list was : <i> {{ lastListName }} </i>
    </h6> -->
        <input type="text" v-model="listName" placeholder="new list name" />
        <input
          type="text"
          v-model="listDescription"
          placeholder="list description"
        />
        <button @click="submitEdit">submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listName: "",
      listDescription: "",
      isModal: false,
    };
  },
  props: ["list"],
  methods: {
    toggleModal() {
      this.isModal = !this.isModal;
    },
    populteData() {
      this.listName = this.list.listName;
      this.listDescription = this.list.listDescription;
    },
    submitEdit() {
      // console.log(this.list);

      let updatedList = { ...this.list };
      updatedList.listName = this.listName;
      updatedList.listDescription = this.listDescription;

      // let data = {
      //   list: updatedList,
      //   _listId: this.list._listId,
      // };
      this.$store.dispatch("editList", updatedList).then(() => {
        this.isModal = false;
      });
    },
  },
  created() {
    this.populteData();
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
  // height: 20rem;
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