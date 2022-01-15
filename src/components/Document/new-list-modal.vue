<template>
  <div id="always-visible" @click="toggleModal">
    <slot> </slot>
  </div>
  <div id="condtionally-visible" v-if="isVisible">
    <div id="main-oc" @click="toggleModal"></div>
    <div id="main-c">
      <div id="title">New List</div>

      <div>
        <label for="listname">List Name *</label>
        <input
          type="text"
          id="listname"
          v-model="listName"
          placeholder="new list name"
        />
      </div>
      <div>
        <label for="listdescription">List Description</label>
        <input
          type="text"
          id="listdescription"
          v-model="listDescription"
          placeholder="list description"
        />
      </div>
      <div>
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
      <!-- <div>
        <Success />
      </div> -->
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
  data() {
    return {
      isVisible: false,
      isLoading: false,
      isSuccessful: false,
      listName: "",
      listDescription: "",
    };
  },
  methods: {
    toggleModal() {
      this.isVisible = !this.isVisible;
    },
    async submit() {
      if (this.listName === "") {
        alert("List Name can not be empty");
        return;
      }
      this.isLoading = true;
      let data = {
        listName: this.listName,
        listDescription: this.listDescription,
      };
      await this.$store.dispatch("addList", data);
      this.listName = "";
      this.listDescription = "";
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
  width: 18rem;
  height: 20rem;
  background: #50664e;
  color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 0.8rem;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  user-select: none;
  > div:nth-child(1) {
    height: 25%;
    font-size: 1.5rem;
    font-weight: 200;

    // background: blue;
  }
  > div:nth-child(2) {
    // background: blue;
    height: 25%;
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
  > div:nth-child(3) {
    height: 25%;
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
  > div:nth-child(4) {
    height: 25%;
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
