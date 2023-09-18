<template>
  <div class="main">
    <p>Hi, I am endeavoring to be a researcher with open-sourced spirit. Here you can find two kinds of resources. When the blog title corresponds to a paper's name, you'll gain access to my shared literature notes. These notes will provide you with an in-depth exploration of the paper's main concepts and an overarching view of the "big picture". In some cases, you'll even find supplementary comments or slides to enhance your understanding. </p>
    <br>
    <p>Additionally, I'd like to highlight my collaboration with a highly skilled technician in o-Tree, Gansong Luo, who holds a PhD from Zhejiang University. Together, we aim to provide a <a style="color: blue;" href="https://xuhang.link/posts/otree-crash-course">Crash Course</a> about o-Tree learning. It is still written in Chinese, but hopefully we can transformed it into English version. </p>
    <br>
    <div v-for="yearList in data" class="yearItem">
      <div class="year">
        {{ yearList[0].frontMatter.date.split("-")[0] }}
      </div>
      <a
        :href="withBase(article.regularPath)"
        v-for="(article, index) in yearList"
        :key="index"
        class="article"
      >
      
        <div class="title">
          <div class="title-o"></div>
          {{ article.frontMatter.title }}
        </div>
        
        <div class="date">{{ article.frontMatter.date.slice(5) }}</div>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useData, withBase } from "vitepress";
import { computed } from "vue";
import { useYearSort } from "../utils";

const { theme } = useData();
const data = computed(() => useYearSort(theme.value.posts));
</script>

<style scoped>
.main {
  margin: 0 auto;
  padding: 0.5rem 1.5rem 4rem;
  max-width: 54rem;
}
.yearItem {
  border-bottom: 1px dashed #c7c7c7;
}
.yearItem:last-child {
  border: none;
}
.year {
  padding: 16px 0 8px 0;
  font-size: 1.2rem;
  font-weight: 600;
}

.article {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 10px;
  color: var(--vp-c-text-2);
  transition: border 0.3s ease, color 0.3s ease;
}
.article:hover {
  text-decoration: none;
  color: var(--vp-c-brand);
}
.date {
  font-family: Georgia, sans-serif;
}
</style>
