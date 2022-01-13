<template>
  <div class="lists-lean_table-c">
    <div class="lists-lean_table">
      <!-- <div
        v-for="(list) in groupToshow" -->
      <div
        v-for="(list, listIndex) in groupToshow"
        :key="listIndex"
        class="list-item"
        @click="chooseLearnMethod(list, listIndex)"
      >
        <!-- @click="chooseLearnMethod(list)"
      > -->
        <div class="title">{{ list.listName }}</div>
        <div class="description">
          {{ list.listDescription }}
        </div>
      </div>
      <!-- hi -->
      <!-- <div class="list-item">
        <div class="title">English A5</div>
        <div class="description">
          English advance terms, helpful in every day conversation
        </div>
      </div>
      <div class="list-item">
        <div class="title">English A5</div>
        <div class="description">
          English advance terms, helpful in every day conversation
        </div>
      </div>
      <div class="list-item">
        <div class="title">English A5</div>
        <div class="description">
          English advance terms, helpful in every day conversation
        </div>
      </div>
      <div class="list-item">
        <div class="title">English A5</div>
        <div class="description">
          English advance terms, helpful in every day conversation
        </div>
      </div>
      <div class="list-item">
        <div class="title">English A5</div>
        <div class="description">
          English advance terms, helpful in every day conversation
        </div>
      </div>
      <div class="list-item">
        <div class="title">English A5</div>
        <div class="description">
          English advance terms, helpful in every day conversation
        </div>
      </div>
      <div class="list-item">
        <div class="title">English A5</div>
        <div class="description">
          English advance terms, helpful in every day conversation
        </div>
      </div> -->
    </div>
    <div class="page-numbers">
      <div
        v-for="group in listCounts"
        :key="group"
        :class="{ 'active-page': groupToShowIndex === group }"
        @click="formatLists(group)"
      >
        {{ group }}
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      listCounts: 0,
      groupToshow: [],
      groupToShowIndex: 1,
    };
  },
  computed: {
    listS() {
      // console.log(this.$store.getters["termsLists"]);
      return this.$store.getters["termsLists"];
    },
  },
  methods: {
    chooseLearnMethod(list, listIndex) {
      this.$router.push({
        name: "learning-method",
        params: {
          stringifiedList: JSON.stringify(list),
          listIndex: listIndex,
        },
      });
    },
    formatLists(pageIndex = 1) {
      // console.log(this.listS);
      this.groupToShowIndex = pageIndex;
      let itemsCount = this.listS.length;
      // console.log(itemsCount);
      //   let reminder = itemsCount % 12;
      this.listCounts = Math.ceil(itemsCount / 9);
      let currentLists = [...this.listS];
      // console.log(currentLists);
      let start = (pageIndex - 1) * 9;
      let end = (pageIndex - 1) * 9 + 9;
      let sliced = currentLists.slice(start, end);
      console.log(sliced);
      this.groupToshow = sliced;
    },
  },
  created() {
    this.$store.dispatch("loadData");
  },
  mounted() {
    // console.log(this.listS);
    this.formatLists();
  },
  watch: {
    listS() {
      this.formatLists();
    },
  },
};
</script>

<style lang="scss" scoped>
.lists-lean_table-c {
  // background: red;
  height: 100%;
  .lists-lean_table {
    height: 90%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    // background: green;
    align-items: center;
    justify-items: center;
    user-select: none;
    // gap: 10px;
    .list-item {
      height: 80%;
      width: 90%;
      background: #385036;
      font-family: Poppins;
      font-weight: 100;
      cursor: pointer;

      .title {
        height: 40%;
        color: #aafeae;
        font-size: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .description {
        color: #9fc79c;
        height: 60%;
        // font-size: 0.6rem;
        display: flex;
        justify-content: start;
        padding: 0.5rem;
        font-size: 00.8rem;
        text-align: center;
        // align-items: flex-start;
      }
      &:hover {
        width: 95%;

        transition: all 0.8s;
        background: #9fc79c;
        .title {
          color: #ffffff;
          transition: all 0.8s;
          font-size: 1.4rem;
        }
        .description {
          // height: 60%;
          color: #010201;
        }
      }
    }
  }
  .page-numbers {
    height: 10%;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    color: white;
    font-family: Poppins;
    div {
      padding: 10px;
    }

    .active-page {
      background: red;
    }
  }
  // display: grid;
  // grid-template-columns: repeat(3, 1fr);
}
</style>
