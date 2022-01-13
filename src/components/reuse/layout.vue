<template>
  <div id="project-container">
    <div id="header-section">
      <div id="app-title">
        <router-link to="/">
          <slot name="app-title"></slot>
        </router-link>
      </div>
      <!-- breed crumbs  -->
      <div>
        <slot name="breadcrumbs"> </slot>
      </div>
    </div>
    <div id="content-section">
      <slot name="app-content"> </slot>
    </div>
  </div>
</template>



<style lang="scss" >
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300&family=Raleway&display=swap");
* {
  box-sizing: border-box;
  padding: 0%;
  margin: 0;
  //   color: white;
}

html {
  height: 100%;
}
body {
  background-color: #23291f;
  height: 100%;
}
#app {
  height: 100%;
}

#project-container {
  width: 90%;
  height: 95%;
  //   background: blue;

  margin: auto;
  display: grid;
  grid-template-rows: 20% 80%;
}

#header-section {
  // background: greenyellow;
  display: flex;
  align-items: flex-end;
  gap: 3%;
  #app-title {
    // background: red;
    font-family: Raleway;
    font-weight: 300;
    font-size: 4rem;
    color: #ffffff;
    //   position: absolute;
    //   bottom: 0;
    letter-spacing: 0.5rem;
    a,
    a:hover {
      color: inherit;
      text-decoration: none;
    }
  }
}

#content-section {
}
</style>