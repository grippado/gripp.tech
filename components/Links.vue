<template>
  <div class="container links">
    <p class="title">
      Links
    </p>
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
}
img {
  width: 300px;
  clip-path: circle(150px at center);
}
@media screen and (min-width: 1024px) {
  .container {
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
