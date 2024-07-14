<template>
    <div id="nav">
      <router-link id="logo" to="/">sa</router-link>
      <router-link 
      v-for="destination in destinations"
      :key="destination.id"
      :to="{name : 'destination.show', params:{id: destination.id, slug:destination.slug}}"
      >
      <h2>{{ destination.name }}</h2>
    </router-link>
  </div>
  </template>
<script>
import sourceData from '../data.json'
export default {
data(){
  return{
    destinations: sourceData.destinations
  }
}


}
</script>