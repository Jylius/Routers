<template>
  <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/brazil">brazil</router-link>
      <router-link to="/hawaii">hawaii</router-link>
      <router-link to="/jamaica">jamaica</router-link>
      <router-link to="/panama">panama</router-link>
  </div>

  <div class="container">
    <router-view></router-view>
  </div>
</template>
