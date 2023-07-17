<template>
  <div class="content">
    <img 
      :src="avatarSrc" 
      @mouseover="changeAvatar" 
      @mouseout="resetAvatar" 
      width="135" 
      height="135" 
      class="avator"
    />
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { useData } from "vitepress";
  const { theme } = useData();
  const avatarSrc = ref(theme.avatar);

  const changeAvatar = () => {
    avatarSrc.value = 'giphy.gif'; // replace with your new gif's path
  };

  const resetAvatar = () => {
    avatarSrc.value = "avatar.png";
  };
</script>

<style scoped>
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
  }
  .avator {
    border-radius: 50%;
    border: 5px solid var(--vp-avatar-border);
  }

  @keyframes avatar-transform {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .avator:hover {
    animation: 5s linear 0s infinite avatar-transform;
  }
</style>




<!-- <template>
  <div class="content">
    <img :src="theme.avator" width="135" height="135" class="avator" />
  </div>
</template>
<script lang="ts" setup>
  import { useData } from "vitepress";
  const { theme } = useData();
</script>

<style scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
}
.avator {
  border-radius: 50%;
  border: 5px solid var(--vp-avator-border);
}

@keyframes avator-transform {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
.avator:hover {
  animation: 5s linear 0s infinite avator-transform;
}
</style> -->
