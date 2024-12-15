<template>
  <div>
    <div class="name">
      <div class="text-animation">
        <h1 class="name_">
          Hey, I'm {{ name }}
        </h1>
      </div>
      <p>
        <span class="info"> I'm a software developer, I like coding cool stuff for cool
          people. I'm looking to develope my skills in the field.</span>
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  data() {
    return {
      name: 'Pradep'
    }
  },
  components: {

  },
  props: {
    msg: String
  }
}
</script>

<style scoped>
.name {
  padding-left: 10%;
  color: white;
  top: 28%;
  position: absolute;
}

.name_ {
  font-size: 50px;
}

.text-animation {
  color: white;
  border-right: 3px solid orangered;
  width: 0;
  white-space: nowrap;
  overflow: hidden;
  animation: typing steps(20, end)forwards infinite 8s
}

@keyframes typing {
  0% {
    width: 0;
  }

  50% {
    width: 100%;
  }
}

.info {
  width: 100%;
  position: absolute;
  line-height: 35px;
  padding-top: 5%
}

@media (max-width: 800px) {
  .info {
    width: 70%;
  }
}

@media (max-width: 425px) {
  .info {
    width: 80%;
    padding-top: 10%;
  }

  .name_ {
    font-size: 25px;
  }
}
</style>
