<template>
  <div id="document-c">
    <div id="side-content">
      <div id="side-content__title">Your Lists :</div>
      <div id="new-list-btn">
        <NewListModal> ADD </NewListModal>
      </div>
    </div>
    <div id="table-section">
      <ListsTable :listS="lists"></ListsTable>
    </div>
  </div>
</template>


<script>
//components
import NewListModal from "../components/_Document/new-list-modal.vue";
import ListsTable from "../components/_Document/Lists-table.vue";

export default {
  components: {
    NewListModal,
    ListsTable,
  },
  computed: {
    lists() {
      return this.$store.getters["termsLists"];
    },
  },
  methods: {},
  created() {
    this.$store.dispatch("loadData");
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300&family=Raleway&display=swap");
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
#document-c {
  height: 100%;
  display: flex;
  flex-direction: row;
  font-family: Poppins;
  font-weight: 100;
}

#side-content {
  width: 30%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  #side-content__title {
  }

  #new-list-btn {
    background: #bd2828;
    width: 10rem;
    height: 4rem;
  }
}
#table-section {
  width: 70%;
  height: 40%;
  margin: auto;
}
</style>

