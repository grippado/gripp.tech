<template>
  <section :class="menuSelected">
    <Home />
    <About />
    <Exp />
    <Links />
    <div
      class="menu"
      :class="menuSelected"
    >
      <span @click="selectO">home</span>
      <span @click="selectS">me</span>
      <span @click="selectT">xp</span>
      <span @click="selectF">links</span>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      menuSelected: 'sel-1'
    }
  },
  methods: {
    selectO () {
      this.menuSelected = 'sel-1'
    },
    selectS () {
      this.menuSelected = 'sel-2'
    },
    selectT () {
      this.menuSelected = 'sel-3'
    },
    selectF () {
      this.menuSelected = 'sel-4'
    }
  }
}
</script>

<style lang="scss">
section {
  overflow: hidden;
  height: 100vh;
  transition: 0.21s all ease-in-out;
  &.sel-1 {
    transition: 0.21s all ease-in-out;
    .container.home {
      transition: 0.21s all ease-in-out;
      top: 0;
    }
    .container.about {
      transition: 0.21s all ease-in-out;
      top: 150vh;
    }
    .container.xp {
      transition: 0.21s all ease-in-out;
      top: 300vh;
    }
    .container.links {
      transition: 0.21s all ease-in-out;
      top: 450vh;
    }
  }
  &.sel-2 {
    transition: 0.21s all ease-in-out;
    .container.home {
      transition: 0.21s all ease-in-out;
      top: -150vh;
    }
    .container.about {
      transition: 0.21s all ease-in-out;
      top: 0;
    }
    .container.xp {
      transition: 0.21s all ease-in-out;
      top: 150vh;
    }
    .container.links {
      transition: 0.21s all ease-in-out;
      top: 300vh;
    }
  }
  &.sel-3 {
    transition: 0.21s all ease-in-out;
    .container.home {
      transition: 0.21s all ease-in-out;
      top: -300vh;
    }
    .container.about {
      transition: 0.21s all ease-in-out;
      top: -150vh;
    }
    .container.xp {
      transition: 0.21s all ease-in-out;
      top: 0;
    }
    .container.links {
      transition: 0.21s all ease-in-out;
      top: 150vh;
    }
  }
  &.sel-4 {
    transition: 0.21s all ease-in-out;
    .container.home {
      transition: 0.21s all ease-in-out;
      top: -450vh;
    }
    .container.about {
      transition: 0.21s all ease-in-out;
      top: -300vh;
    }
    .container.xp {
      transition: 0.21s all ease-in-out;
      top: -150vh;
    }
    .container.links {
      transition: 0.21s all ease-in-out;
      top: 0;
    }
  }
}
.menu {
  position: fixed;
  justify-content: space-around;
  right: 10px;
  bottom: 20px;
  width: calc(100% - 20px);
  height: 90px;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  span {
    color: #505050;
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.11s all ease-in-out;
    font-size: 18px;
    &:hover {
      color: #ffffff;
      cursor: pointer;
      transition: 0.11s all ease-in-out;
    }
  }
  &.sel-1 {
    transition: 0.11s all ease-in-out;
    span:nth-child(1) {
      background: #1c1c1c;
      color: #fff;
    }
    span:nth-child(2) {
      border-radius: 50px 0 0 50px;
      background-color: #000000;
    }
    span:nth-child(3) {
      background-color: #000000;
    }
    span:nth-child(4) {
      border-radius: 0 50px 50px 0;
      background-color: #000000;
    }
  }
  &.sel-2 {
    transition: 0.11s all ease-in-out;
    span:nth-child(1) {
      border-radius: 50px;
      background-color: #000000;
    }
    span:nth-child(2) {
      background: #1c1c1c;
      color: #fff;
    }
    span:nth-child(3) {
      border-radius: 50px 0 0 50px;
      background-color: #000000;
    }
    span:nth-child(4) {
      border-radius: 0 50px 50px 0;
      background-color: #000000;
    }
  }
  &.sel-3 {
    transition: 0.11s all ease-in-out;
    span:nth-child(1) {
      border-radius: 50px 0 0 50px;
      background-color: #000000;
    }
    span:nth-child(2) {
      border-radius: 0 50px 50px 0;
      background-color: #000000;
    }
    span:nth-child(3) {
      background: #1c1c1c;
      color: #fff;
    }
    span:nth-child(4) {
      border-radius: 50px;
      background-color: #000000;
    }
  }
  &.sel-4 {
    transition: 0.11s all ease-in-out;
    span:nth-child(1) {
      border-radius: 50px 0 0 50px;
      background-color: #000000;
    }
    span:nth-child(2) {
      border-radius: 0;
      background-color: #000000;
    }
    span:nth-child(3) {
      border-radius: 0 50px 50px 0;
      background-color: #000000;
    }
    span:nth-child(4) {
      background: #1c1c1c;
      color: #fff;
    }
  }
}
@media screen and (min-width: 1024px) {
  .menu {
    right: 50px;
    top: calc(50% - 300px);
    width: 150px;
    height: 600px;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    span {
      height: 25%;
      width: auto;
      font-size: 25px;
    }
    &.sel-1 {
      transition: 0.11s all ease-in-out;
      span:nth-child(1) {
        background: #1c1c1c;
        color: #fff;
      }
      span:nth-child(2) {
        border-radius: 50px 50px 0 0;
        background-color: #000000;
      }
      span:nth-child(3) {
        background-color: #000000;
      }
      span:nth-child(4) {
        border-radius: 0 0 50px 50px;
        background-color: #000000;
      }
    }
    &.sel-2 {
      transition: 0.11s all ease-in-out;
      span:nth-child(1) {
        border-radius: 50px;
        background-color: #000000;
      }
      span:nth-child(2) {
        background: #1c1c1c;
        color: #fff;
      }
      span:nth-child(3) {
        border-radius: 50px 50px 0 0;
        background-color: #000000;
      }
      span:nth-child(4) {
        border-radius: 0 0 50px 50px;
        background-color: #000000;
      }
    }
    &.sel-3 {
      transition: 0.11s all ease-in-out;
      span:nth-child(1) {
        border-radius: 50px 50px 0 0;
        background-color: #000000;
      }
      span:nth-child(2) {
        border-radius: 0 0 50px 50px;
        background-color: #000000;
      }
      span:nth-child(3) {
        background: #1c1c1c;
        color: #fff;
      }
      span:nth-child(4) {
        border-radius: 50px;
        background-color: #000000;
      }
    }
    &.sel-4 {
      transition: 0.11s all ease-in-out;
      span:nth-child(1) {
        border-radius: 50px 50px 0 0;
        background-color: #000000;
      }
      span:nth-child(2) {
        border-radius: 0;
        background-color: #000000;
      }
      span:nth-child(3) {
        border-radius: 0 0 50px 50px;
        background-color: #000000;
      }
      span:nth-child(4) {
        background: #1c1c1c;
        color: #fff;
      }
    }
  }
}
</style>
