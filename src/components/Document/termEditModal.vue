<template>
  <div @click="$emit('closeModal')" class="container-background"></div>
  <div class="container">
    <form @submit.prevent="">
      <h2>Edit TERM</h2>
      <div>
        <input type="text" v-model="term" placeholder="term" />
        <input type="text" v-model="meaning" placeholder="meaning" />
      </div>
      <br />
      <div>
        <input type="text" v-model="synonym1" placeholder="synonym1" />
        <input type="text" v-model="synonym2" placeholder="synonym2" />
        <input type="text" v-model="synonym3" placeholder="synonym3" />
      </div>
      <br />
      <div>
        <input type="text" v-model="antonym1" placeholder="antonym1" />
        <input type="text" v-model="antonym2" placeholder="antonym2" />
        <input type="text" v-model="antonym3" placeholder="antonym3" />
      </div>

      <br />
      <div>
        <input type="text" v-model="example1" placeholder="example1" />
        <input
          type="text"
          v-model="example1t"
          placeholder="example1 translation"
        />
      </div>
      <br />
      <div>
        <input type="text" v-model="example2" placeholder="example2" />
        <input
          type="text"
          v-model="example2t"
          placeholder="example2 translation"
        />
      </div>
      <br />
      <div>
        <input type="text" v-model="example3" placeholder="example3" />
        <input
          type="text"
          v-model="example3t"
          placeholder="example3 translation"
        />
      </div>
      <button @click="editTerm">submit</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["termIndex", "list"],
  emits: ["closeModal"],
  data() {
    return {
      termsLists: [],
      term: "",
      meaning: "",
      synonym1: "",
      synonym2: "",
      synonym3: "",
      antonym1: "",
      antonym2: "",
      antonym3: "",
      example1: "",
      example1t: "",
      example2: "",
      example2t: "",
      example3: "",
      example3t: "",
    };
  },
  methods: {
    editTerm() {
      let updatedList = { ...this.list };
      let data = {
        term: this.term,
        meaning: this.meaning,
        synonyms: [this.synonym1, this.synonym2, this.synonym3],
        antonyms: [this.antonym1, this.antonym2, this.antonym3],
        examples: [this.example1, this.example2, this.example3],
        examplesTrans: [this.example1t, this.example2t, this.example3t],
      };

      updatedList.terms[this.termIndex] = data;
      this.$store.dispatch("editList", updatedList);
      // this.$store.dispatch("editTerm", data);
    },
    populateTermData() {
      let currentTerm = this.list.terms[this.termIndex];
      // console.log(currentTerm);
      try {
        this.term = currentTerm.term;

        this.meaning = currentTerm.meaning;

        this.synonym1 = currentTerm.synonyms[0];

        this.synonym2 = currentTerm.synonyms[1];

        this.synonym3 = currentTerm.synonyms[2];

        this.antonym1 = currentTerm.antonyms[0];

        this.antonym2 = currentTerm.antonyms[1];

        this.antonym3 = currentTerm.antonyms[2];

        this.example1 = currentTerm.examples[0];
        this.example2 = currentTerm.examples[1];
        this.example3 = currentTerm.examples[2];

        this.example1t = currentTerm.examplesTrans[0];
        this.example2t = currentTerm.examplesTrans[1];
        this.example3t = currentTerm.examplesTrans[2];
      } catch (e) {
        console.log("cant poplute , termEditModal");
        // console.log(e);
      }
    },
  },
  computed: {},
  created() {
    this.populateTermData();
  },
};
</script>


<style lang="scss" scoped>
.container-background {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.329);
}
.container {
  padding: 1rem;
  background: rgb(212, 164, 172);
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>