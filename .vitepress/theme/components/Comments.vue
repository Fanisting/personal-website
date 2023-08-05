<template>
  <div id="gitalk-container"></div>
</template>
<script lang="ts" setup>
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";
import { onContentUpdated, useRouter } from "vitepress";

// const { route, go } = useRouter();
function deleteChild() {
  const element = document.querySelector("#gitalk-container");
  let child = element?.lastElementChild;
  while (child) {
    element?.removeChild(child);
    child = element?.lastElementChild;
  }
}
onContentUpdated(() => {
  // reset gittalk element for update
  deleteChild();
  const gitalk = new Gitalk({
    clientID: "5fff7e64759372e8dd5e",
    clientSecret: "c28cabd8a981d10f3870f497c1f7d1a6afda8f42",
    repo: "personal-gittalk",
    owner: "Fanisting",
    admin: ["Fanisting"],
    id: location.pathname.substring(0, 50), // Ensure uniqueness and length less than 50
    language: "en", // "zh-CN"
    distractionFreeMode: true, // Facebook-like distraction free mode
    createIssueManually: true, 
  });
  gitalk.render("gitalk-container");
});
</script>
<style scoped></style>
