<template>
  <figure class="center-figure">
    <img src="/snk-light.svg" class="center-svg">
    <!-- <figcaption>My GitHub Contribution</figcaption> -->
  </figure>
  <br>
  <footer>
    Thanks to 
    <a href="https://github.com/clark-cui/" target="_blank" title="作者"
      >clark-cui</a
    > for the nice theme
  </footer>
</template>

<script lang="ts" setup>
  const date = new Date().getFullYear();
</script>
<style scoped>
/* styles about the snk svg */
.center-svg {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 30%;  /* You can change this as per your requirements */
    }

    .center-figure {
      text-align: center;
    }

footer {
  text-align: center;
  position: absolute;
  width: 100%;
  bottom: 20px;
  padding: 0 20px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text);
}
a {
  color: var(--vp-c-brand);
  font-weight: bold;
}
a:hover {
  text-decoration: none;
  color: var(--vp-c-hover);
}
</style>
