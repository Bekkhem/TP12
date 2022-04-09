<template>
  <div class="frem">
    <h2>{{ msg1 }}</h2>
    <h5>The page you are looking for not available</h5>
    <a v-bind:href="msg3">{{ msg2 }}</a>
  </div>
</template>

<script>
export default {
  layout: "empty",
  name: "PageAuth",
  props: {
    msg1: String,
    msg2: String,
    msg3: String,
  },
};
</script>

<style >

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* .login-page,
header{
  display: none;
} */

.frem {
  width: 150vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url("/src/assets/gif.gif");
  background-repeat: no-repeat;
}

.frem h2 {
  position: absolute;
  bottom: 8rem;
  font-size: 30px;
  color: #fff1f1;
}

.frem h5 {
  position: absolute;
  bottom: 6rem;
  color: #0e0d0d;
}

.frem a {
  position: absolute;
  bottom: 1rem;
  background: linear-gradient(45deg, #45b46a, #32c925);
  padding: 7px;
  color: white;
  text-decoration: none;
  font-size: 23px;
  border-radius: 13px;
}
</style>
