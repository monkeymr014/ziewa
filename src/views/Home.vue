<template>
  <div class="home">
    <full-page ref="fullpage" :options="options" id="fullpage">
        <transition name="fade">
      <div class="section">
          <div id="center">
            <h1>ZieWa</h1>

            <p>
              Qui mollit non consectetur deserunt. Dolore magna et ex do sunt
              nostrud. Laboris reprehenderit enim magna amet sunt commodo
              excepteur sint adipisicing minim sit fugiat eu. Sit ex velit
              occaecat ex minim irure deserunt excepteur eu nisi nostrud. Nulla
              ullamco magna officia eu labore aute magna do sunt non eu aute
              reprehenderit reprehenderit.
            </p>
          </div>
      </div>
        </transition>
      <div class="section"><HelloWorld msg="Welcome to Your Vue.js App" /></div>
    </full-page>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
<style  >
body {
  background: linear-gradient(120deg, #9c27b0, #090772);
}
h1 {
  color: #fff;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 10em;
  font-weight: normal;
}
#center {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}
p {
  margin: 0%;
  max-width: 60%;
  color: #fff;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 2em;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>