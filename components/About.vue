<template>
  <div class="container about">
    <p class="title">
      Sobre
    </p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dicta quaerat voluptatem eum doloribus saepe vero facere iusto ut! Corporis cum, nesciunt dolores minus recusandae porro provident distinctio perferendis laboriosam.
  </div>
</template>

<style lang="scss">
.container {
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
