<template>
  <div>
    <p class="name"> <span class="name_"> Hey, I'm <b>{{ name }} </b> </span> <br />
      <span class="info"> I'm a software developer, I like coding cool stuff for cool
        people. I'm looking to develope my skills in the field.</span>
    </p>
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

  .name {
    width: 60%;
  }
}
</style>
