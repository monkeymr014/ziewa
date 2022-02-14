<template>
  <div class="home">
    <full-page ref="fullpage" :options="options" id="fullpage">
        <div class="section">
          <Section1 class="s_1"  />
        </div>
        <div  class="section">
          <Section2 data-aos="fade-up"  class="s_2" />
        </div>
        <div class="section">
          <Section3 class="s_3" />
        </div>
        <div class="section">
          <Section4 class="s_4" />
        </div>
        <div class="section">
          <Section5 class="s_5" />
        </div>
    </full-page>
  </div>
</template>

<script>
import Section1 from "@/components/Section1.vue";
import Section2 from "@/components/Section2.vue";
import Section3 from "@/components/Section3.vue";
import Section4 from "@/components/Section4.vue";
import Section5 from "@/components/Section5.vue";

export default {
  name: "Home",
  components: {
    Section1,
    Section2,
    Section3,
    Section4,
    Section5
  },

};
</script>
<style  >
.section {
  position: relative;
  margin: 0%;
  padding: 0%;
}
.s_1 {
  background: linear-gradient(120deg, #ff0000, #3634dd);
}
.s_2 {
  background: linear-gradient(120deg, #000000, #3634dd);
}
.s_3 {
  background: linear-gradient(120deg, #000000, #0a7e1a);
}
.s_4 {
  background: linear-gradient(120deg, #cc7e09, #3634dd);
}
.s_5 {
  background: linear-gradient(120deg, #000000, #8281e0);
}
h1 {
  color: #fff;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 10em;
  font-weight: normal;
}
p {
  margin: 0%;
  max-width: 60%;
  color: #fff;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 2em;
}

</style>