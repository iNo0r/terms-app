<template>
  <div id="project-nav">
    <!-- <div class="button_slide1 slide_down1" id="nav-item1">
      <router-link to="/document">Document</router-link>
    </div>

    <div class="button_slide2 slide_down2" id="nav-item2">
      <router-link to="/learn">Learn</router-link>
    </div>
    <div id="nav-instructions">
      Document - add new terms to memorise later. <br />
      Learn - to start practicing your new terms
    </div> -->
    <div class="button_slide1 slide_down1" id="nav-item1">
      <router-link to="/_document">Document</router-link>
    </div>

    <div class="button_slide2 slide_down2" id="nav-item2">
      <router-link to="/learn">Learn</router-link>
    </div>
    <div id="nav-instructions">
      Document - add new terms to memorise later. <br />
      Learn - to start practicing your new terms
    </div>
  </div>
</template>



<style lang="scss" scoped>
#project-nav {
  width: 70%;

  margin: auto;
  margin-top: 10%;
  font-family: Poppins, Monaco, monospace;
  font-size: 4vw;
  text-align: center;
  font-weight: 100;
  a,
  a:hover {
    color: inherit;
    text-decoration: none;
  }
  #nav-item1 {
    width: 50%;
  }
  #nav-item2 {
    width: 50%;
  }
  #nav-instructions {
    margin-top: 2vw;
    font-size: 1.2vw;
    text-align: left;
    color: #959090;
  }
}

.button_slide1 {
  color: #bd2828;
  border: 2px solid white;
  border-radius: 0px;
  //   padding: 18px 36px;
  padding: 1rem 2%;
  display: inline-block;
  //   font-family: "Lucida Console", Monaco, monospace;
  //   font-size: 14px;
  //   letter-spacing: 1px;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 #404e36;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;
  border-right: none;
  background: white;
}

.slide_down1:hover {
  box-shadow: inset 0 110px 0 0 #23291f;
  //   font-size: 2.5rem;
  letter-spacing: 0.4rem;
  color: white;
}

.button_slide2 {
  color: #fff;
  border: 2px solid #bd2828;
  border-radius: 0px;
  //   padding: 18px 36px;
  padding: 1rem 2%;
  display: inline-block;
  //   font-family: "Lucida Console", Monaco, monospace;
  //   font-size: 14px;
  //   letter-spacing: 1px;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 #404e36;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;
  background: #bd2828;
  border-left: none;
}

.slide_down2:hover {
  box-shadow: inset 0 100px 0 0 #23291f;
  letter-spacing: 0.4rem;
}
</style>