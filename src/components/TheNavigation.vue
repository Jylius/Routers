<template>
  <div id="nav">
    <AppLink id="logo" to="/">sa</AppLink>
    <AppLink 
      v-for="destination in destinations"
      :key="destination.id"
      :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }"
    >
      <h2>{{ destination.name }}</h2>
    </AppLink>
    <AppLink :to="{ name: 'protected' }">Dashboard</AppLink>
  </div>
</template>

<script>
import sourceData from '../data.json';
import AppLink from './AppLink.vue';

export default {
  components: {
    AppLink
  },
  data() {
    return {
      destinations: sourceData.destinations
    };
  }
};
</script>