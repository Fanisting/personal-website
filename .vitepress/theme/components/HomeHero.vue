<template>
  <div class="content">
    <div class="avatar"></div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { useData } from "vitepress";
  const { theme } = useData();
  const avatarSrc = "avatar.png";

  const changeAvatar = () => {
    avatarSrc.value = 'avatar.png'; // replace with your new gif's path
  };

  const resetAvatar = () => {
    avatarSrc.value = "giphy.gif";
  };
</script>

<style scoped>
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
  }
  .avatar {
    width: 135px;
    height: 135px;
    border-radius: 50%;
    border: 5px solid var(--vp-avatar-border);
    background: url('avatar.png') center center no-repeat; /* Original avatar */
    background-size: cover;
}

  .avatar:hover {
    background: url('giphy.gif') center center no-repeat; /* New gif when hovered */
    background-size: cover;
    animation: 5s linear 0s infinite avatar-transform;
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