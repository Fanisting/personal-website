<template>
    <div class="about-me">
      <br>
      <h2 class="title">About Me</h2>
      <hr>
      <div style="align-items: center">
        <b><span style="background-color: rgba(215, 149, 69, 0.3);">Education</span></b>
        <p><b>Duke University (<i>Economics</i>)</b></p>
        <div style="display: flex; justify-content: space-between;">
            <span>M.A. Economics program</span>
            <span>2022 - present</span>
        </div>
        <!-- <br> -->
        <b>Zhejiang University (<i>Economics</i>, with distinction)</b>
        <br>
        <div style="display: flex; justify-content: space-between;">
            <span>Experimental Class of Social Science</span>
            <span>2018 - 2022</span>
        </div>
      </div>
      <br>

      <b><span style="background-color: rgba(215, 149, 69, 0.3);">Research Interest</span></b>
      <p class = "des">
      <span >My research interests include deception, morality, and belief bias in behavioral research, as well as market design in marketing research. In recent projects, I have utilized both Field/Lab experiments for data generation and structural modeling for analysis.</span>
      </p>
      <br>
      <p>Wanna know more about me? Click and check my <b><a href="archives">blogs</a></b> and <b><a href="cv">CV</a>.</b></p>
      <p class="keywords">
      <b><span>Skills: </span></b> 
      <span v-for="(skill, index) in skills" :key="index" class="skill-item">{{ skill }}</span>
      </p>
      <hr>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        skills: ["Python/R/Stata", "Matlab", "o-Tree/Qualtrics"]
      };
    }
  };
</script>

  <style scoped>

  .des {
    text-align: justify;
  }


.skill-item {
  background-color: rgba(162, 123, 92, 0.25); /* Grey background */
  border: none; /* Remove borders */
  color: black; /* Black text color */
  padding: 2px 10px; /* Some padding */
  margin: 5px; /* Some margin */
  text-align: center; /* Centered text */
  display: inline-block;
  font-size: 15px; /* Increase font-size */
  border-radius: 25px;
}

.keyword {
  background-color: yellow;
  padding: 2px 5px;
  margin-right: 5px;
  font-weight: bold;
}

  hr {
    border: none;
    height: 1.5px;
    width: 100%;
    background-color: black;
    margin: 20px 0;
  }

  .title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  font-weight: bold;
}

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
  