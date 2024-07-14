<template>
  <div>
    <TheNavigationVue />
    <div class="container">
      <router-view :key="$route.path"></router-view>
    </div>
  </div>
</template>
<script>
import TheNavigationVue from '../src/components/TheNavigation.vue'
export default {
  components:{
    TheNavigationVue
  }
}
</script>