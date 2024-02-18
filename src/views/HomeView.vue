<template>
  <div class="parallax"></div>
  <Home id="home" msg="Welcome to Your Vue.js App" />
  <ExperienceView  id="experience"/>
  <ProjectView id="projects" />
  <!-- <div style="height:1000px;background-color:red;font-size:36px">
    This div is just here to enable scrolling.
    Tip: Try to remove the background-attachment property to remove the scrolling effect.
  </div>

  <div class="parallax"></div> -->
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home'
import ExperienceView from '@/views/ExperienceView';
import ProjectView from '@/views/ProjectView'

export default {
  name: 'HomeView',
  components: {
    Home,
    ExperienceView,
    ProjectView
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {

  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}

.parallax {
  min-height: 100vh;
  background-image: url('../assets/Background1.jpg');


  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  filter: blur(2px);
  -webkit-filter: blur(2px);
}

/* @media only screen and (max-device-width: 1366px) {
  .parallax {
    background-attachment: scroll;
  }
} */
</style>