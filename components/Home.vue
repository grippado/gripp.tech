<template>
  <div class="container home">
    <div>
      <h2>gabriel gripp</h2>
      <span>tech lead @ SAE Digital</span>
    </div>
    <div>
      <img src="/img/profile-bw.jpg">
    </div>
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
  div:nth-child(1) {
    order: 2;
  }
  div:nth-child(2) {
    order: 1;
  }
  h2 {
    color: #fff;
    font-size: 40px;
  }
  span {
    color: #808080;
    font-size: 18px;
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
    h2 {
      font-size: 55px;
    }
    span {
      font-size: 24px;
    }
  }
  img {
    width: 445px;
    clip-path: circle(222.5px at center);
  }
}
</style>
