<template>
  <div>
    <h1>my invoices</h1>
  </div>
  </template>
  <script>
import {onBeforeRouteLeave} from 'vue-router'
  export default {
    setup(){
      onBeforeRouteLeave(()=>{
        const answer = window.confirm(
          'are you sure you want to leave? Invoinces are super awesome!'
        )
        if(!answer) return false
      })
    }
  }
</script>