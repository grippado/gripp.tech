<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: "Helvetica", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #1c1c1c;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.container {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: calc(100vh - 200px);
  transition: 0.21s all ease-in-out;
}
.container.home {
  padding-top: 20px;
}
.container.about,
.container.xp,
.container.links {
  padding: 20px;
  color: #fff;
}
@media screen and (min-width: 1024px) {
  .container {
    justify-content: space-evenly;
  }
  .container.about,
  .container.xp,
  .container.links {
    padding: 50px;
    color: #fff;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
  }
  .container.about .title,
  .container.xp .title,
  .container.links .title {
    font-size: 33px;
    margin-bottom: 30px;
  }
}
</style>
