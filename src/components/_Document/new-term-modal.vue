<template>
  <div id="always-visible" @click="toggleModal">
    <slot> </slot>
  </div>
  <div id="condtionally-visible" v-if="isVisible">
    <div id="main-oc" @click="toggleModal"></div>
    <div id="main-c">
      <div id="sec-t">New Term</div>

      <div id="sec-a">
        <div>
          <label for="term">Term *</label>
          <input type="text" id="term" v-model="term" placeholder="new term " />
        </div>
        <div>
          <label for="meaning">Meaning *</label>
          <input
            type="text"
            id="meaning"
            v-model="meaning"
            placeholder="the meaning of the term"
          />
        </div>
      </div>
      <div id="sec-b">
        <div>
          <label for="synonym1">Synonyms</label>
          <div>
            <label for="synonym1"># 1 </label>
            <input
              type="text"
              id="synonym1"
              v-model="synonym1"
              placeholder="synonym 1 "
            />
          </div>
          <div>
            <label for="synonym2"># 2 </label>
            <input
              type="text"
              id="synonym2"
              v-model="synonym2"
              placeholder="synonym2"
            />
          </div>
          <div>
            <label for="synonym3"># 3 </label>
            <input
              type="text"
              id="synonym3"
              v-model="synonym3"
              placeholder="list description"
            />
          </div>
        </div>
        <div>
          <label for="antonym1">Antonyms</label>
          <div>
            <label for="antonym1"># 1 </label>
            <input
              type="text"
              id="antonym1"
              v-model="antonym1"
              placeholder="list description"
            />
          </div>
          <div>
            <label for="antonym2"># 2 </label>
            <input
              type="text"
              id="antonym2"
              v-model="antonym2"
              placeholder="list description"
            />
          </div>
          <div>
            <label for="antonym3"># 3 </label>
            <input
              type="text"
              id="antonym3"
              v-model="antonym3"
              placeholder="list description"
            />
          </div>
        </div>
      </div>
      <div id="sec-c">
        <div>
          <label for="example1">Examples</label>
          <div>
            <label for="example1"># 1.a </label>
            <input
              type="text"
              id="example1"
              v-model="example1"
              placeholder="list description"
            />
          </div>
          <div>
            <label for="example1t"># 1.b </label>
            <input
              type="text"
              id="example1t"
              v-model="example1t"
              placeholder="list description"
            />
          </div>
          <div>
            <label for="example2"># 2.a </label>
            <input
              type="text"
              id="example2"
              v-model="example2"
              placeholder="list description"
            />
          </div>
          <div>
            <label for="example2t"># 2.b </label>
            <input
              type="text"
              id="example2t"
              v-model="example2t"
              placeholder="list description"
            />
          </div>
          <div>
            <label for="example3"># 3.a </label>
            <input
              type="text"
              id="example3"
              v-model="example3"
              placeholder="list description"
            />
          </div>
          <div>
            <label for="example3t"># 3.b </label>
            <input
              type="text"
              id="example3t"
              v-model="example3t"
              placeholder="list description"
            />
          </div>
        </div>
      </div>
      <div id="sec-d">
        <div
          id="add-button"
          v-if="!isLoading && !isSuccessful"
          @click="submit"
          role="button"
          tabindex="0"
        >
          ADD
        </div>
        <Spinner v-if="isLoading && !isSuccessful" />
        <Success v-if="isSuccessful && !isLoading" />
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from "../reuse/anim-spinner.vue";
import Success from "../reuse/anim-success.vue";
export default {
  components: {
    Spinner,
    Success,
  },
  props: {
    list: {
      required: true,
    },
  },
  data() {
    return {
      isVisible: false,
      isLoading: false,
      isSuccessful: false,
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
    toggleModal() {
      this.isVisible = !this.isVisible;
    },
    resetState() {
      this.term = "";
      this.meaning = "";
      this.synonym1 = "";
      this.synonym2 = "";
      this.synonym3 = "";
      this.antonym1 = "";
      this.antonym2 = "";
      this.antonym3 = "";
      this.example1 = "";
      this.example1t = "";
      this.example2 = "";
      this.example2t = "";
      this.example3 = "";
      this.example3t = "";
    },
    async submit() {
      if (this.listName === "") {
        alert("List Name can not be empty");
        return;
      }
      this.isLoading = true;
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
      //   console.log(updatedList);
      await this.$store.dispatch("editList", updatedList);
      console.log("done");
      //   await this.$store.dispatch("editList", data);
      //   this.listName = "";
      //   this.listDescription = "";
      this.isLoading = false;
      this.isSuccessful = true;

      setTimeout(() => {
        this.isSuccessful = false;
        this.isLoading = false;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
#always-visible {
  background: #bd2828;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  border-radius: inherit;
  user-select: none;
  font-size: 1.5rem;
  cursor: pointer;
}
#always-visible:hover {
  background: rgb(145, 134, 76);

  //   color: #bd2828;
}
#always-visible:active {
  background: rgb(190, 174, 83);
  //   color: #bd2828;
}

#condtionally-visible {
  //   z-index: 99;
}
#main-oc {
  position: fixed;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.342);
  top: 0;
  left: 0;
  z-index: 99;
}

#main-c {
  z-index: 99;
  width: 90%;
  height: 25rem;
  background: #50664e;
  color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0.8rem;
  user-select: none;
  //   display: flex;
  //   flex-direction: column;
  display: grid;
  grid-template-columns: repeat(5, 20%);
  grid-template-areas: "t t t t t" "a a c c c" "b b c c c" "d d d d d";
  > #sec-t {
    grid-area: t;
    font-size: 1.5rem;
    font-weight: 200;

    // background: blue;
  }
  > #sec-a {
    grid-area: a;
    // background: blue;
    // height: 25%;
    display: flex;
    flex-direction: row;
    > div {
      width: 50%;
      > label {
        display: block;
      }
      > input {
        width: 100%;
        font-size: 0.8rem;
        padding: 0.2rem;
        font-family: Poppins;
        color: #50664e;
        outline-color: #42a139;
        &::placeholder {
          /* Chrome, Firefox, Opera, Safari 10.1+ */
          color: #858a84;
          opacity: 0.5; /* Firefox */
        }
      }
    }
  }
  > #sec-b {
    grid-area: b;
    display: flex;
    > div {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      //   background: chocolate;
      > label {
        display: block;
      }
      > div {
        display: flex;
        height: 20%;
        // background: chocolate;
        justify-content: space-between;
        // gap: 4%;
        > input {
          width: 80%;
          //   flex-grow: 1;
          //   height: 2rem;
          font-size: 0.8rem;
          padding: 0.2rem;
          font-family: Poppins;
          color: #50664e;
          outline-color: #42a139;
          &::placeholder {
            /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: #858a84;
            opacity: 0.5; /* Firefox */
          }
        }
      }
    }
  }
  > #sec-c {
    grid-area: c;
    width: 100%;
    padding-left: 1rem;
    > div {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      //   background: chocolate;
      > div {
        display: flex;
        // flex-direction: column;
        justify-content: space-between;
        // background: chocolate;
        // gap: 4%;
        > input {
          width: 92%;
          //   flex-grow: 1;
          //   height: 2rem;
          font-size: 0.8rem;
          padding: 0.2rem;
          font-family: Poppins;
          color: #50664e;
          outline-color: #42a139;
          &::placeholder {
            /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: #858a84;
            opacity: 0.5; /* Firefox */
          }
        }
      }
    }
  }
  > #sec-d {
    grid-area: d;
    // height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    //button
    > #add-button {
      background: #bd2828;
      width: 50%;
      text-align: center;
      padding: 0.5rem;
      cursor: pointer;
    }
    > #add-button:hover {
      background: rgb(145, 134, 76);
    }
    > #add-button:active {
      background: rgb(190, 174, 83);
      //   color: red;
    }

    // background: blue;
  }
}
</style>
