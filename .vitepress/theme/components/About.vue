<template>
    <div class="about-me">
      <h2>About Me</h2>
      <div class="profile">
        <img src="" alt="Profile Image" />
        <div class="info">
          <h3>{{ name }}</h3>
          <p>{{ bio }}</p>
        </div>
      </div>
      <h3>Interests</h3>
      <ul>
        <li v-for="interest in interests" :key="interest">{{ interest }}</li>
      </ul>
      <h3>Contact</h3>
      <p>Email: {{ email }}</p>
      <p>Phone: {{ phone }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: 'Your Name',
        bio: 'Write a brief description about yourself.',
        interests: ['Interest 1', 'Interest 2', 'Interest 3'],
        email: 'your-email@example.com',
        phone: '123-456-7890',
      };
    },
  };
  </script>
  
  <style scoped>
  .about-me {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .profile {
    display: flex;
    align-items: center;
  }
  
  .profile img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 20px;
  }
  
  .profile .info h3 {
    margin-top: 0;
  }
  
  ul {
    list-style: disc;
    margin-left: 20px;
    margin-bottom: 20px;
  }
  </style>
  