<template>
  <div id="main">
    <slot> </slot>
  </div>
</template>


<style lang="scss" scoped>
#main {
  background: #385036;
  width: 100%;
  height: 100%;
  -webkit-box-shadow: 5px 5px 16px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 5px 5px 16px 1px rgba(0, 0, 0, 0.26);
}
</style>