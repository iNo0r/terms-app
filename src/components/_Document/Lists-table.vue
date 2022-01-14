<template>
  <div id="table-c">
    <div id="list-addition" v-if="hasAddButton">
      <NewListModal> + </NewListModal>
    </div>
    <div id="table-content" v-if="hasData">
      <div
        class="list-name-c"
        v-for="(list, index) in groupToshow"
        :key="index"
      >
        <div
          class="list-name"
          @click="setChoosenList(list, index)"
          :class="{ choosenList: choosenListIndex === index }"
        >
          {{ list.listName }}
        </div>
      </div>
    </div>
    <div v-else>you have no lists to be shown</div>
    <div id="page-numbers">
      <div
        v-for="pageIndex in listCounts"
        :key="pageIndex"
        @click="formatLists(pageIndex)"
        :class="{ redBacground: pageIndex === groupToShowIndex }"
      >
        {{ pageIndex }}
      </div>
    </div>
  </div>
</template>


<script>
import { concat } from "lodash";
import NewListModal from "./new-list-modal.vue";
export default {
  components: {
    NewListModal,
  },
  props: {
    hasAddButton: {
      default: false,
    },
    listS: {
      default() {
        return [
          {
            listName: "tester 1",
          },
          {
            listName: "tester 1",
          },
        ];
      },
    },
    currentPageIndex: {
      default: 1,
    },
    choosenListIndex: {
      default: null,
    },
  },
  data() {
    return {
      listCounts: 0,
      groupToshow: [],
      groupToShowIndex: 1,
    };
  },
  computed: {
    hasData() {
      return this.listS.length > 0;
    },
  },

  methods: {
    formatLists(pageIndex = 1) {
      this.groupToShowIndex = pageIndex;
      let itemsCount = this.listS.length;
      //   let reminder = itemsCount % 12;
      this.listCounts = Math.ceil(itemsCount / 12);
      let currentLists = [...this.listS];
      let start = (pageIndex - 1) * 12;
      let end = (pageIndex - 1) * 12 + 12;
      let sliced = currentLists.slice(start, end);
      this.groupToshow = sliced;
    },
    setChoosenList(choosenList, index) {
      this.$router.push({
        name: "list",
        params: {
          choosenList: JSON.stringify(choosenList),
          listIndex: index,
        },
      });
    },
  },
  mounted() {
    this.formatLists();
    console.log("mounted !!!");
    // console.log(this.$route.params.list.listName);
  },
  watch: {
    listS() {
      this.formatLists(1);
    },
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
#table-c {
  //   flex-grow: 3;
  background: #385036;
  width: 100%;
  height: 100%;
  align-self: center;
  position: relative;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 5px 5px 16px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 5px 5px 16px 1px rgba(0, 0, 0, 0.26);
  #list-addition {
    position: absolute;
    width: 2rem;
    height: 4rem;
    left: -2rem;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  #table-content {
    height: 80%;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 1rem;
    // align-content: center;
    // align-items: space-around;
    align-content: space-around;
    justify-content: space-around;
    // align-items: space-around;

    .list-name-c {
      color: #aafeae;
      min-width: 25%;
      padding: 0.2rem;
      user-select: none;
    }
    .list-name {
      color: #aafeae;
      display: inline-block;
      padding: 0 15%;
      cursor: pointer;
    }
    .list-name:hover {
      background: #aafeae;
      //   color: #385036;
      // margin: auto;

      color: #23291f;
    }
  }
  #page-numbers {
    height: 20%;
    // background: red;
    color: white;
    place-self: center;
    display: flex;
    gap: 1rem;
    place-self: center;
    div {
      cursor: pointer;
      padding: 0.5rem;
    }
  }
}

.redBacground {
  background: red;
}

.choosenList {
  background: #aafeae;
  color: #23291f !important;
}
</style>

