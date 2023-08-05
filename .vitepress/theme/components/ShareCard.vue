<template>
  <div class="shareCard">
    <h1 class="title">
      <span>Hi, I'm Xuhang Fan (Shawn) 👋</span>
    </h1>
    <p class="description">
      Master-level Economics student with passion for Quantitative Marketing and Behavioral Economics.
    </p>
  </div>
  <About />
</template>

<script lang="ts" setup></script>
<style scoped>
.shareCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
  text-align: center;
}
.title {
  display: flex;
  align-items: center;
  font-size: 2.2em;
  font-weight: bold;
}
.description {
  margin: 1em 0;
}
</style>
