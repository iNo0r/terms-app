<template>
  <div class="container">
    <form @submit.prevent="">
      <h2>ADD NEW TERM</h2>
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
      <button @click="submitTerm">submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  props: ["list"],
  methods: {
    submitTerm() {
      let updatedList = { ...this.list };
      let data = {
        term: this.term,
        meaning: this.meaning,
        synonyms: [this.synonym1, this.synonym2, this.synonym3],
        antonyms: [this.antonym1, this.antonym2, this.antonym3],
        examples: [this.example1, this.example2, this.example3],
        examplesTrans: [this.example1t, this.example2t, this.example3t],
        mastered: false,
      };
      updatedList.terms.push(data);
      this.$store.dispatch("editList", updatedList);
    },
  },
};
</script>


<style lang="scss" scoped>
.container {
  padding: 1rem;
  background: rgb(212, 164, 172);
}
</style>