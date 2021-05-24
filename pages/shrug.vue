
<template>
  <p
    type="text"
    class="shrug"
  >
    ¯\_(ツ)_/¯
  </p>
</template>

<style>
html {
  background: #000000;
  color: #ffffff;
}
body {
  text-align: center;
}
.shrug {
  margin: 0;
  font-size: 22vw;
  background: #000000;
  border: 0;
  color: #ffffff;
  width: 100vw;
  outline: none;
}
.shrug:hover,
.shrug:focus {
  cursor: pointer;
}
.full-banner {
  display: none;
}
.button {
  width: 160px;
  padding: 10px 0;
  text-transform: uppercase;
  color: #000000;
  font-weight: 700;
  font-size: 16px;
  border: 0;
  background-color: cornflowerblue;
}
@media (min-width: 970px) {
  .full-banner {
    display: block;
  }
}
</style>
