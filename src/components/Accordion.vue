<template>
  <div class="accordion mt-6">
    <div class="
          flex
          
          p-3
          bg-gray-200
          text-left
          rounded-tl rounded-tr
          cursor-pointer
          expheader
          grid grid-flow-col
        " @click="isOpen = !isOpen">
      <div class="col-span-6">
        <slot name="header"></slot>
      </div>
      <div class="col-span-5 end-content">
        <slot name="year"></slot>
      </div>
      <div class="col-span-1 end-content">
        <PlusIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" v-if="!isOpen" />
        <MinusIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" v-else />
      </div>
    </div>
    <div class="expbody p-2" :class="isOpen ? 'd-block' : 'hidden'">
      <div class="margin showOnMobile">
        <slot name="img"></slot>
      </div>

      <div class="grid grid-flow-col">
        <div class="col-span-9">
          <ul>
            <li>
              <span>
                <LocationMarkerIcon class="-mr-1 ml-2 h-5 w-5 location" />
                <slot name="location"></slot>
              </span>
              <LinkIcon class="-mr-1 ml-2 h-5 w-5 link-icon" />
              <slot name="url"></slot>
            </li>
          </ul>
          <br />
          <slot name="body"></slot>
          <slot name="skills"></slot>
        </div>
        <div class="col-span-3 hideOnMobile">
          <slot name="img"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
  
<style scoped>
.panel {
  padding: 1rem;
  border: solid 1px #e9e9e9;
}
</style>
  
<script>
import {
  PlusIcon,
  MinusIcon,
  LocationMarkerIcon,
  LinkIcon
} from '@heroicons/vue/solid';
export default {
  data: () => {
    return {
      isOpen: false,
    };
  },
  name: 'AccordionComponent',
  props: {
    heading: String,
  },
  components: {
    PlusIcon,
    MinusIcon,
    LocationMarkerIcon,
    LinkIcon
  },
};
</script>

<style scoped>
.expheader {
  background-color: #490C86DE;
  color: white;
  font-size: 16px;
  border-radius: 5px;
}

.end-content {
  display: flex;
  justify-content: flex-end;
}

.expbody {
  background-color: #241d41;
  color: white;
  margin-top: 10px;
  border-radius: 5px;
}

.location {
  display: inline-block;
  margin-right: 10px;
}

.link-icon {
  margin-left: 20px;
  display: inline-block;
  margin-right: 5px;
}

.hideOnMobile {
  align-items: center;
  display: flex;
}

.showOnMobile {
  display: block;
}

@media (max-width: 600px) {
  .hideOnMobile {
    display: none;
  }

}

@media (min-width: 601px) {
  .showOnMobile {
    display: none;
  }
}

.margin {
  margin: 10%;
}
</style>
  