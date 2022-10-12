<script setup lang="ts">
import SmartSearchComponent from "@/components/SmartSearchComponent.vue";
</script>
<template>
  <nav>
    <div class="links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/collection">My collection</RouterLink>
    </div>
    <div class="search">
      <SmartSearchComponent />
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import "../assets/global.scss";

nav {
  background: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

a {
  @extend .body-font;
  font-size: 1.4rem;
  text-decoration: none;
  color: #fff;
  margin-right: 2rem;

  &.router-link-active {
    color: orange;
  }
}
</style>
