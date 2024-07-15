<template>
  <div>
    <TheNavigationVue />
    <div class="container">
      <router-view v-slot="{Component}">
        <transition name="slide" mode="out-in">
          <component :is="Component" :key="$route.path"></component>
        </transition>
        </router-view>
    </div>
  </div>
</template>
<script>
import TheNavigationVue from '../src/components/TheNavigation.vue'
export default {
  components:{TheNavigationVue}
}
</script>

<style lang="css">
.slide-enter-active,
.slide-leave-active{
  transition: opacity 0.3s,
}
.slide-enter,
.slide-leave-to{
  opacity: 0;
}
</style>