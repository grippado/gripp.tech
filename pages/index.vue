<template>
<article class="content">
  <a href="https://github.com/grippado/gripp.tech">
    <img class="forkmeongh" src="https://s3.amazonaws.com/github/ribbons/forkme_right_white_ffffff.png" alt="Fork me on GitHub">
  </a>
  <section class="card">
    <img v-bind:src="image">
    <h1>
      {{ name }}
    </h1>
    <h2>
      {{ title }}
    </h2>
    <p>
      {{about}}
    </p>
    <ul>
      <li class="linkedin">
        <a v-bind:href="links.linkedin" title="Linkedin">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
      </li>
      <li class="github">
        <a v-bind:href="links.github" title="Github"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
      </li>
      <li class="facebook">
        <a v-bind:href="links.facebook" title="Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </a>
      </li>
    </ul>
  </section>
</article>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      name: 'gabriel gripp',
      title: 'developer',
      image: '/img/profile.jpg',
      about: '❤️ vue & javascript ❤️',
      links: {
        linkedin: 'https://www.linkedin.com/in/grippado/',
        github: 'https://github.com/grippado/',
        facebook: 'https://www.facebook.com/grippado/',

      },
      vue: `
          -------   MADE WItH VUE AND ❤️  -------
          ----------------------------------------
          ((((((((%%%%%%%%@@@@@@@@@%%%%%%%((((((((
          @@((((((((%%%%%%%@@@@@@@%%%%%%%((((((((@
          @@@((((((((%%%%%%%%@@@%%%%%%%%((((((((@@
          @@@@@((((((((%%%%%%%@%%%%%%%((((((((@@@@
          @@@@@@((((((((%%%%%%%%%%%%%((((((((@@@@@
          @@@@@@@@((((((((%%%%%%%%%((((((((@@@@@@@
          @@@@@@@@@((((((((%%%%%%%((((((((@@@@@@@@
          @@@@@@@@@@((((((((%%%%((((((((&@@@@@@@@@
          @@@@@@@@@@@@((((((((%((((((((@@@@@@@@@@@
          @@@@@@@@@@@@@(((((((((((((((@@@@@@@@@@@@
          @@@@@@@@@@@@@@@(((((((((((@@@@@@@@@@@@@@
          @@@@@@@@@@@@@@@@(((((((((@@@@@@@@@@@@@@@
          @@@@@@@@@@@@@@@@@@(((((@@@@@@@@@@@@@@@@@
          @@@@@@@@@@@@@@@@@@@(((@@@@@@@@@@@@@@@@@@
          ----------------------------------------
          ----------     gripp.tech     ----------
      `
    }
  },
  mounted() {
    console.log(this.vue)
  }
})
</script>

<style>
* {
  font-family: 'Ubuntu', sans-serif;
  font-size: 20px;
  list-style: none;
  overflow: hidden;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: #565656;
}

.forkmeongh {
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
}

header {
  background: #808080;
}

body {
  background-image: url("/img/fullbg.jpg");
  background-size: cover;
  background-position: center center;
}

.content {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content:before {
  content: "";
  filter: blur(4px);
  opacity: 0.8;
  position: fixed;
  left: -10px;
  top: -10px;
  z-index: -1;
  display: block;
  width: calc(100vw + 20px);
  height: calc(100vh + 20px);
}

.card {
  max-width: 300px;
  width: 100%;
  height: auto;
  background: #fff;
  border-radius: 2px;
  padding: 10px 20px 20px;
  box-shadow: 0px 0px 5px 0 #fff;
}

.card img {
  margin: 0 auto 10px;
  display: block;
  width: 200px;
}

.card h1 {
  font-size: 22px;
  margin-bottom: 5px;
  text-align: center;
}

.card h2 {
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 5px;
  text-align: center;
}

.card p {
  font-weight: 200;
  font-size: 16px;
  text-align: center;
}

.card ul {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}

.card ul li {
  margin-right: 15px;
  box-shadow: inset 0px 0px 0px 0.2px #565656;
  border-radius: 5px;
  transition: 0.2s all ease;
}

.card ul li:last-child {
  margin-right: 0;
}

.card ul li a {
  width: 40px;
  height: 40px;
  padding: 5px;
  display: block;
}

.card ul li a svg {
  fill: currentColor;
  stroke: none;
  width: 30px;
  height: 30px;
  transition: 0.3s all ease;
}

.card ul li:hover {
  background-color: currentColor;
}

.card ul li:hover a svg {
  fill: #fff;
}

@media screen and (max-height: 460px) {
  body .card {
    max-width: 500px;
    width: 100%;
    height: 240px;
    padding: 20px;
  }

  body .card img {
    float: left;
  }
}
</style>
