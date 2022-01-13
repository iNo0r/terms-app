<template>
  <div class="meaning-term-c" v-if="allDataIsThere">
    <!-- 1st row of meaning-term-c -->
    <div class="page-info">
      <!-- 1st col of page-info -->
      <div class="method-title">Meaning &lt;=&gt; Term</div>
      <!-- 2nd col of page-info -->
      <div class="list-name">{{ list.listName }}</div>
      <!-- 3rd col of page-info -->
      <div class="mastered-toggle">
        <span>learned ? </span>
        <label class="switch">
          <input
            :checked="currentTerm.mastered"
            type="checkbox"
            @input="tester($event)"
          />
          <span class="slider"></span>
        </label>
        <div>
          <EditTermModal :list="list" :termIndex="currenTermIndex">
            <IconEdit size="2" />
          </EditTermModal>
        </div>
      </div>
    </div>
    <!-- 2nd row of meaning-term-c -->
    <div class="content">
      <!-- 1st row of content  -->
      <div class="cards">
        <!-- the car on the left  -->
        <div class="card1">
          <div class="card-title">Meaning</div>
          <div class="card-content">{{ currentTerm.meaning }}</div>
        </div>
        <!-- the card on the right, has 2 states , static(folded) and programmatic(unfolded) -->
        <!-- static card -->
        <div v-if="!showTerm" class="card2 static" @click="showTerm = true">
          <div>?</div>
          <div>Term</div>
          <div>press space to reveal</div>
        </div>
        <!-- programmatic card -->
        <div v-else class="card2 programmatic" @click="showTerm = false">
          {{ currentTerm.term }}
        </div>
      </div>
      <!-- 2nd row of content  -->
      <div class="progress-bar-c">
        <div class="item-proportion">
          {{ this.currenTermIndex + 1 + " " }} / {{ "" + termsLength }}
        </div>
        <div class="progress-bar">
          <div
            class="bar-inner-line"
            :style="{ width: progressBarWidth + '%' }"
          ></div>
        </div>
      </div>
      <!-- 3rd row of content  -->
      <div class="arrows">
        <div class="arrow-backward" @click="toggleTermIndex('backward')">
          <svg
            width="20"
            height="36"
            viewBox="0 0 20 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.5804 0.406735C19.4477 0.277806 19.2901 0.175515 19.1166 0.10572C18.9431 0.0359261 18.7571 0 18.5692 0C18.3814 0 18.1954 0.0359261 18.0219 0.10572C17.8483 0.175515 17.6907 0.277806 17.5581 0.406735L0.419588 17.0202C0.286585 17.1488 0.181061 17.3015 0.109062 17.4697C0.0370617 17.6379 0 17.8183 0 18.0004C0 18.1825 0.0370617 18.3628 0.109062 18.531C0.181061 18.6992 0.286585 18.8519 0.419588 18.9806L17.5581 35.594C17.8262 35.8539 18.19 36 18.5692 36C18.9485 36 19.3122 35.8539 19.5804 35.594C19.8486 35.334 19.9993 34.9814 19.9993 34.6138C19.9993 34.2461 19.8486 33.8936 19.5804 33.6336L3.45024 18.0004L19.5804 2.36712C19.7134 2.23852 19.8189 2.08574 19.8909 1.91754C19.9629 1.74935 20 1.56903 20 1.38693C20 1.20482 19.9629 1.02451 19.8909 0.856312C19.8189 0.688115 19.7134 0.535339 19.5804 0.406735Z"
              fill="#B9CBB8"
            />
          </svg>
        </div>
        <div class="arrow-forward" @click="toggleTermIndex('forward')">
          <svg
            width="20"
            height="36"
            viewBox="0 0 20 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.419589 0.406735C0.552257 0.277806 0.709861 0.175515 0.883374 0.10572C1.05689 0.0359261 1.2429 0 1.43076 0C1.61862 0 1.80463 0.0359261 1.97814 0.10572C2.15166 0.175515 2.30926 0.277806 2.44193 0.406735L19.5804 17.0202C19.7134 17.1488 19.8189 17.3015 19.8909 17.4697C19.9629 17.6379 20 17.8183 20 18.0004C20 18.1825 19.9629 18.3628 19.8909 18.531C19.8189 18.6992 19.7134 18.8519 19.5804 18.9806L2.44193 35.594C2.17375 35.8539 1.81002 36 1.43076 36C1.0515 36 0.687768 35.8539 0.419589 35.594C0.15141 35.334 0.000747762 34.9814 0.000747762 34.6138C0.000747762 34.2461 0.15141 33.8936 0.419589 33.6336L16.5498 18.0004L0.419589 2.36712C0.286585 2.23852 0.18106 2.08574 0.10906 1.91754C0.0370602 1.74935 0 1.56903 0 1.38693C0 1.20482 0.0370602 1.02451 0.10906 0.856312C0.18106 0.688115 0.286585 0.535339 0.419589 0.406735Z"
              fill="#B9CBB8"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import _ from "lodash";

import IconEdit from "../../../components/reuse/icon-edit.vue";
import EditTermModal from "../../../components/_Document/edit-term-modal.vue";
export default {
  components: {
    IconEdit,
    EditTermModal,
  },
  props: {
    stringifiedList: {
      //   required: true,
    },
    listIndex: {},
  },

  data() {
    return {
      showTerm: false,
      currenTermIndex: 0,
      allDataIsThere: false,
    };
  },
  computed: {
    list() {
      return this.listS[this.currentListIndex];
    },
    currentListIndex() {
      if (this.listIndex) {
        localStorage.setItem("listIndex", this.listIndex);
        return this.listIndex;
      } else {
        let storgedListIndex = localStorage.getItem("listIndex");
        return storgedListIndex;
      }
    },
    currentTerm() {
      //   console.log(this.list);
      return this.list.terms[this.currenTermIndex];
    },
    termsLength() {
      return this.list.terms.length;
    },
    // style property, to genrate a dynamic width value of the progress bar
    progressBarWidth() {
      return ((this.currenTermIndex + 1) * 100) / this.list.terms.length;
    },
    // for the sake of testing
    listS() {
      // console.log(this.$store.getters["termsLists"]);
      return this.$store.getters["termsLists"];
    },
  },
  methods: {
    // to increase or decrease the index of current index, therefore will display another term
    toggleTermIndex(option) {
      this.showTerm = true;

      // to trigger the re-animation when switching between cards
      setTimeout(() => {
        this.showTerm = false;
      }, 1);
      if (option === "forward") {
        if (this.currenTermIndex < this.list.terms.length - 1) {
          this.currenTermIndex++;
        } else {
          this.currenTermIndex = 0;
        }
      } else if (option === "backward") {
        if (this.currenTermIndex > 0) {
          this.currenTermIndex -= 1;
        } else {
          this.currenTermIndex = this.list.terms.length - 1;
        }
      }
    },
    // to switch between the cards -( unfold or fold the term)
    toggleTerm() {
      this.showTerm = !this.showTerm;
    },
    async tester(event) {
      //   console.log(this.currentListIndex);
      let updatedList = { ...this.list };
      let data = { ...this.currentTerm };
      data.mastered = event.target.checked;
      updatedList.terms[this.currenTermIndex] = data;
      await this.$store.dispatch("editList", updatedList);
      //   console.log(this.listS);
      console.log(this.list);
      this.update = !this.update;
      setTimeout(() => {
        this.update = !this.update;
      }, 1);
      console.log(this.currentTerm);
    },
  },
  async created() {
    // this.listS is a computed property that will be updated when load data is finished
    if (_.isEmpty(this.listS)) {
      await this.$store.dispatch("loadData");

      return (this.allDataIsThere = true);
    }
    this.allDataIsThere = true;
  },

  mounted() {
    let that = this;
    // ----- when space is clicked
    window.addEventListener("keyup", function (event) {
      if (event.keyCode === 32) {
        that.toggleTerm();
      }
    });
    // ----- when left arrow is clicked
    window.addEventListener("keyup", function (event) {
      if (event.keyCode === 37) {
        that.toggleTermIndex("backward");
      }
    });
    // ----- when right arrow is clicked
    window.addEventListener("keyup", function (event) {
      if (event.keyCode === 39) {
        that.toggleTermIndex("forward");
      }
    });
  },
  watch: {
    list: {
      deep: true,
      handler() {
        console.log("changed");
      },
    },
    stringifiedList: {
      deep: true,
      handler() {
        console.log("changed");
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.meaning-term-c {
  height: 100%;
  .page-info {
    height: 15%;
    display: flex;
    font-family: Poppins;
    .method-title {
      width: 25%;
      color: #aafeae;

      font-weight: 100;
      padding-top: 1rem;
    }
    .list-name {
      width: 50%;

      color: white;
      font-size: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .mastered-toggle {
      height: 100%;
      width: 25%;
      display: flex;
      color: white;
      justify-content: flex-start;
      align-items: flex-end;
      gap: 5%;
      font-size: 0.8rem;
      //   background: fuchsia;
      //   background: red;
    }
  }
  .content {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    .cards {
      height: 80%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-family: Poppins;
      .card1 {
        background: #385036;
        animation: Slide-vertically 0.7s;
        width: 35%;
        height: 90%;
        position: relative;
        padding: 2%;
        display: flex;
        justify-content: center;
        align-items: center;
        .card-title {
          position: absolute;
          top: 2%;
          left: 2%;
          font-size: 0.8rem;
          font-weight: 100%;
          color: #aafeae63;
        }
        .card-content {
          color: #9fc79c;
        }
      }
      .card2 {
        background: #879f85;
        width: 35%;
        height: 90%;
        color: #d8f9d5;

        cursor: pointer;
      }
      .card2.static {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        animation: Slide-vertically 0.7s;

        div:nth-child(1) {
          font-size: 7rem;
          font-family: serif;
          color: white;
        }
        div:nth-child(2) {
          font-size: 2rem;
        }
        div:nth-child(3) {
          position: absolute;
          bottom: 0;
          left: 0;
          //   background: olive;
          color: #edf8f096;
          font-size: 0.6rem;
          padding-left: 0.3rem;
          padding-bottom: 0.3rem;
        }
      }
      .card2.programmatic {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #879f85;
        animation: Slide-horizontally 0.5s;
      }
    }
    .progress-bar-c {
      height: 15%;
      display: flex;
      color: white;
      font-family: poppins;
      align-items: center;
      justify-content: flex-start;
      gap: 10%;
      flex-direction: column;
      font-size: 0.8rem;
      .item-proportion {
        height: 40%;
      }
      .progress-bar {
        width: 30%;
        height: 10%;
        background: rgb(194, 141, 152);
        border-radius: 10px;
        overflow: hidden;
        .bar-inner-line {
          width: 70%;
          height: 100%;
          background: crimson;
          transition: all 0.5s;
        }
      }
    }
    .arrows {
      height: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8rem;
      .arrow-backward,
      .arrow-forward {
        cursor: pointer;
        &:hover {
          background: rgba(202, 228, 154, 0.281);
          border-radius: 20%;
        }
      }
    }
  }
}

@keyframes Slide-horizontally {
  from {
    opacity: 0;
    transform: translateY(-2rem);
    // transform: rotate(-90deg);
    // transform: scale3d(2.5, 1.2, 0.3);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
    // transform: rotate(0deg);
    // transform: scale3d(0, 0, 0);
  }
}
@keyframes Slide-vertically {
  from {
    opacity: 0;
    transform: translateX(-2rem);
    // transform: rotate(-90deg);
    // transform: scale3d(2.5, 1.2, 0.3);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
    // transform: rotate(0deg);
    // transform: scale3d(0, 0, 0);
  }
}

// ------ mastered toggle (copied from w3)
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_switch
.switch {
  display: inline-block;
  position: relative;
  width: 4rem;
  height: 1rem;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #b0c0af;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 5px;
}

.slider::after {
  //   content: "mastered";
  content: "";
  position: absolute;
  left: 5%;
  top: 0;
  font-size: 0.8rem;
}

.slider:before {
  position: absolute;
  content: "";
  height: 80%;
  width: 40%;
  left: 5%;
  bottom: 9%;
  background-color: white;
  border-radius: 5px;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: goldenrod;
}

input:focus + .slider {
  box-shadow: 0 0 1px goldenrod;
}

input:checked + .slider:before {
  -webkit-transform: translateX(120%);
  -ms-transform: translateX(120%);
  transform: translateX(120%);
}
</style>