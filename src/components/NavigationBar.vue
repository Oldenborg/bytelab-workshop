<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/collection">My collection</RouterLink>
  </nav>
</template>

<style lang="scss" scoped>
@import "../assets/global.scss";

nav {
  background: #333;
  display: flex;
  justify-content: flex-start;
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
