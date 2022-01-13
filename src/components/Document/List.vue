<template>
  <div>
    <AddTerm :list="list" />

    <div>List Name : {{ list.listName }}</div>
    <div>
      <span style="color: red"> List Description : </span>
      {{ list.listDescription }}
    </div>
    <div>
      <div class="list-container">
        <div class="list-row">
          <div>index</div>
          <div>Term</div>
          <div>meaning</div>
          <div>synonyms</div>
          <div>antonyms</div>
          <div>examples</div>
          <div>examples</div>
        </div>
        <div class="list-row" v-for="(term, index) in terms" :key="term">
          <div style="color: green">
            {{ index + 1 }}
          </div>
          <div>{{ term.term }}</div>
          <div style="color: purple">
            {{ term.meaning }}
          </div>
          <div v-if="term.synonyms">
            <div>{{ term.synonyms[0] }}</div>
            <div>{{ term.synonyms[1] }}</div>
            <div>{{ term.synonyms[2] }}</div>
          </div>
          <div v-if="term.antonyms">
            <div>{{ term.antonyms[0] }}</div>
            <div>{{ term.antonyms[1] }}</div>
            <div>{{ term.antonyms[2] }}</div>
          </div>
          <div>
            <div v-if="term.examples">
              <div>
                <i>{{ term.examples[0] }}</i>
              </div>
              <div>
                <i>{{ term.examplesTrans[0] }}</i>
              </div>

              <div>
                <i>{{ term.examples[1] }}</i>
              </div>
              <div>
                <i>{{ term.examplesTrans[1] }}</i>
              </div>

              <div>
                <i>{{ term.examples[2] }}</i>
              </div>
              <div>
                <i>{{ term.examplesTrans[2] }}</i>
              </div>
            </div>
          </div>
          <div>
            <button @click="activeEditModal(index)">edit</button>
            <button @click="deleteTerm(index)">delete</button>
          </div>
        </div>
        <hr />
      </div>
      <TermEditModal
        v-if="isEditModal"
        :termIndex="termIndex"
        :list="list"
        @closeModal="isEditModal = false"
      />
      <!-- <div>{{ term }}</div> -->
    </div>
  </div>
</template>


<script>
import AddTerm from "./addTerm.vue";
import TermEditModal from "./termEditModal.vue";
export default {
  data() {
    return {
      isEditModal: false,
      termIndex: 0,
    };
  },
  components: {
    AddTerm,
    TermEditModal,
  },
  props: ["list"],
  computed: {
    terms() {
      // console.log(this.list);
      return this.list.terms;
    },
  },
  methods: {
    activeEditModal(termIndex) {
      this.isEditModal = true;
      this.termIndex = termIndex;

      // console.log("edit modal activated");
    },
    deleteTerm(termIndex) {
      // let data = {
      //   termIndex: termIndex,
      //   _listId: this._listId,
      // };

      let updatedList = { ...this.list };
      updatedList.terms.splice(termIndex, 1);

      this.$store.dispatch("editList", updatedList);
    },
  },
};
</script>

<style lang="scss" scoped>
.list-row {
  display: grid;
  grid-template-columns: 0.5fr 2fr 3fr 1fr 1fr 5fr 0.5fr;
  grid-auto-flow: row;
  margin-bottom: 1rem;
  padding: 1rem;
}
</style>