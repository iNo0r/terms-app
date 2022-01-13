<template>
  <div class="learning-method-c">
    <div class="list-info">
      <div class="list-name">English A1</div>
    </div>
    <div class="page-instruction">choose learning Method</div>
    <div class="methods-table">
      <div class="methods-item" @click="navTo('meaningTerm')">
        <div class="method-name">Meaning &lt;=&gt; Term</div>
        <div class="method-description">It is the regular way</div>
      </div>
      <div class="methods-item">
        <div class="method-name">Translation &lt;=&gt; Sentence</div>
        <div class="method-description">It is the regular way</div>
      </div>
      <div class="methods-item">
        <div class="method-name">Synonyms &lt;=&gt; Term</div>
        <div class="method-description">It is the regular way</div>
      </div>
      <div class="methods-item">
        <div class="method-name">All &lt;=&gt; All</div>
        <div class="method-description">It is the regular way</div>
      </div>
      <div class="methods-item">
        <div class="method-name">Custom &lt;=&gt; Custom</div>
        <div class="method-description">It is the regular way</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stringifiedList", "listIndex"],
  mounted() {},
  methods: {
    navTo(name) {
      this.$router.push({
        name: name,
        params: {
          stringifiedList: this.stringifiedList,
          listIndex: this.listIndex,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.learning-method-c {
  height: 100%;
  width: 100%;
  font-family: Poppins;
  .list-info {
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffffff;

    .list-name {
      font-size: 2rem;
    }
  }
  .page-instruction {
    height: 10%;
    color: #ffffff;
    font-size: 1.4rem;
    text-align: center;
    font-weight: 100;
  }
  .methods-table {
    height: 60%;
    display: flex;
    flex-wrap: wrap;
    gap: 3%;
    justify-content: center;
    align-items: center;
    .methods-item {
      cursor: pointer;
      width: 30%;
      height: 40%;
      background: #385036;
      display: flex;
      flex-direction: column;
      //   justify-content: space-around;
      align-items: center;
      text-align: center;
      -webkit-box-shadow: 5px 5px 15px 2px rgba(0, 0, 0, 0.25);
      box-shadow: 5px 5px 15px 2px rgba(0, 0, 0, 0.25);
      //   gap: 10%;
      .method-name {
        height: 40%;
        place-self: center;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #aafeae;
      }
      .method-description {
        // height: 60%;
        color: #9fc79c;
      }
      &:hover {
        background: #9fc79c;
        .method-name {
          color: #ffffff;
          transition: all 0.4s;
          font-size: 1.2rem;
        }
        .method-description {
          // height: 60%;
          color: #385036;
        }
      }
    }
  }
}
</style>