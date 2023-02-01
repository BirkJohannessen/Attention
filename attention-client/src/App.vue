<template>
  <div class="pg">
  <router-view> </router-view>
  </div>
</template>

<style>
html,
body {
  width: 100vw;
  height: 90vh;
  margin: 0;
  -webkit-text-size-adjust: none; 
}
.pg {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

</style>
