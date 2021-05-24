<template>
  <div class="container links">
    sjvnsjan
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: calc(100vh - 120px);
  div:nth-child(1) {
    order: 2;
  }
  div:nth-child(2) {
    order: 1;
  }
  h2 {
    color: #fff;
    font-size: 55px;
  }
  span {
    color: #808080;
    font-size: 22px;
    display: block;
    text-align: center;
  }
}
img {
  width: 300px;
  clip-path: circle(150px at center);
}
@media screen and (min-width: 1024px) {
  .container {
    flex-direction: row;
    width: calc(100% - 250px);
    height: 100vh;
    div:nth-child(1) {
      order: 1;
    }
    div:nth-child(2) {
      order: 2;
    }
  }
  img {
    width: 445px;
    clip-path: circle(222.5px at center);
  }
}
</style>
