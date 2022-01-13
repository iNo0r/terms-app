<template>
  <div id="main-c">
    <div id="lists-c">
      <div id="side-content">
        <div id="raw-1">
          <div id="side-content__title">{{ list.listName }}</div>
          <div class="my-icon-c">
            <EditListModal :list="list">
              <IconEdit size="2" />
            </EditListModal>
          </div>
        </div>
        <div id="raw-2">
          <div id="side-content_description">
            general terms are used on everyday conversations
          </div>
          <div class="my-icon-c" @click="deleteList(list._listId)">
            <IconDelete size="4" />
          </div>
        </div>
      </div>
      <div id="lists-content">
        <ListTable :hasAddButton="true" :listS="lists" />
      </div>
    </div>
    <div id="list-details-c">
      <div id="term-addition">
        <NewTermModal :list="list"> + </NewTermModal>
      </div>

      <div class="list-details-content">
        <!-- <div id="list-details-content"> -->
        <div id="lists-deatils-content__header">
          <div class="term-index-header">#</div>
          <div class="term-name-header">term</div>
          <div class="term-meaning-header">meaning</div>
          <div class="term-synonyms-header">synonyms</div>
          <div class="term-antonyms-header">antonyms</div>
          <div class="term-example-header">example</div>
        </div>
        <div class="list-details-content" v-if="!hasTerms">
          <div>the list is empty, add some terms</div>
        </div>
        <div v-else id="lists-deatils-content__body">
          <template v-for="(term, index) in terms" :key="index">
            <div class="term-index-value">{{ index + 1 }}</div>
            <div class="term-name-value">{{ term.term }}</div>
            <div class="term-meaning-value">{{ term.meaning }}</div>
            <div class="term-synonyms-value">
              <div>{{ term.synonyms[0] }}</div>
              <div>{{ term.synonyms[1] }}</div>
              <div>{{ term.synonyms[2] }}</div>
            </div>
            <div class="term-antonyms-value">
              <div>{{ term.antonyms[0] }}</div>
              <div>{{ term.antonyms[1] }}</div>
              <div>{{ term.antonyms[2] }}</div>
            </div>
            <div class="term-example-value">
              <div v-if="term.examples">
                <div>
                  {{ term.examples[0] }}
                </div>
                <div>
                  <i>{{ term.examplesTrans[0] }}</i>
                </div>

                <div style="color: #d7edd8">
                  {{ term.examples[1] }}
                </div>
                <div>
                  <i>{{ term.examplesTrans[1] }}</i>
                </div>

                <div>
                  {{ term.examples[2] }}
                </div>
                <div>
                  <i>{{ term.examplesTrans[2] }}</i>
                </div>
              </div>
            </div>
            <div class="control-buttons">
              <div>
                <EditTermModal :list="list" :termIndex="index">
                  <IconEdit size="2" />
                </EditTermModal>
              </div>
              <div>
                <IconDelete @click="deleteTerm(index)" size="4" />
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import IconEdit from "../../components/reuse/icon-edit.vue";
import IconDelete from "../../components/reuse/icon-delete.vue";

import ListTable from "../../components/_Document/Lists-table.vue";
import NewTermModal from "../../components/_Document/new-term-modal.vue";
import EditTermModal from "../../components/_Document/edit-term-modal.vue";
import EditListModal from "../../components/_Document/edit-list-modal.vue";
export default {
  components: {
    IconEdit,
    IconDelete,
    ListTable,
    NewTermModal,
    EditListModal,
    EditTermModal,
  },
  props: {
    choosenList: {
      required: true,
    },
  },
  data() {
    return {
      listCounts: 0,
      groupToshow: [],
      groupToShowIndex: 1,
      isNewList: false,
      // list: [],
    };
  },
  computed: {
    lists() {
      return this.$store.getters["termsLists"];
    },
    list() {
      return JSON.parse(this.choosenList);
    },
    terms() {
      try {
        return this.list.terms;
      } catch {
        return [];
      }
    },
    hasTerms() {
      return this.terms.length > 0;
    },
  },
  methods: {
    checkListsEmpty() {
      if (!this.lists.length) {
        this.$router.replace({
          name: "document",
        });
      }
    },
    deleteList(listId) {
      this.$store.dispatch("deleteList", listId);
    },
    deleteTerm(termIndex) {
      let updatedList = { ...this.list };
      updatedList.terms.splice(termIndex, 1);

      this.$store.dispatch("editList", updatedList);
    },
  },
  created() {
    this.checkListsEmpty();
    console.log("created", this.lists);
  },
  mounted() {
    // this.checkListsEmpty();
    // console.log(this.$route.params);
  },
  updated() {},
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300&family=Raleway&display=swap");

$my-grid-columns: 4% 10% 20% 16% 16% 30% 4%;
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#main-c {
  height: 100%;
  // background: cornflowerblue;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  // justify-items: space-between;
}
#lists-c {
  //   background: rgb(122, 71, 71);
  height: 40%;
  // background: chocolate;
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

  #raw-1 {
    display: flex;
    flex-direction: raw;
    width: 100%;

    #side-content__title {
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .my-icon-c {
      display: flex;
      justify-content: center;
      align-items: center;
      place-self: flex-end;
    }
  }
  #raw-2 {
    display: flex;
    flex-direction: raw;
    width: 100%;
    // background: green;

    // justify-content: space-between;

    #side-content_description {
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 0.8rem;
    }
    #my-icon-c {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

//  ------- populating list names
#lists-content {
  height: 80%;
  width: 70%;

  // if you want to center it
  // margin: auto;
}

#list-details-c {
  // background: cadetblue;
  position: relative;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(80, 102, 78, 1);
  width: 100%;
  padding: 0.4rem;
  padding-bottom: 0;

  #term-addition {
    font-family: Poppins;
    font-weight: 100;
    position: absolute;
    width: 2rem;
    height: 4rem;
    left: -2rem;
    top: 0;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  .list-details-content {
    width: 100%;
    height: 100%;
    font-family: Poppins;
    font-weight: 100;
  }
  #lists-deatils-content__header {
    display: grid;
    grid-template-columns: $my-grid-columns;
    height: 10%;
    align-content: center;
    color: white;
  }
  #lists-deatils-content__body {
    display: grid;
    grid-template-columns: $my-grid-columns;
    height: 90%;
    overflow: scroll;
    color: #aafeae;
  }

  .control-buttons {
    // cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > div {
      cursor: pointer;
      &:hover {
        background: rgb(145, 134, 76);
      }

      &:active {
        background: rgb(190, 174, 83);
        //   color: red;
      }
    }
  }
}
</style>

