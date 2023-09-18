<template>
  <div class="container">
    <div class="about-me">
      <br>
      <h2 class="title">Working Papers</h2>
      <hr>
      <div style="align-items: center">
        <br>
          <!-- Paper 1 -->
          <h2>> Online Shopping Addiction — Evidence from a Field experiment</h2>
          <div class="authors">
            with Prof. <a href="https://www.stern.nyu.edu/faculty/bio/xiao-liu">Xiao Liu (NYU)</a>,
            Prof. <a href="https://www.zijunshi.com/">Zijun (June) Shi (HKUST)</a>, and Chen Cao
          </div>
          <br>
          <b><span style="background-color: rgba(215, 149, 69, 0.3);">Introduction</span></b>
          
          <p>In this paper, I architected a pioneering online-based field experiment aimed at dissecting and quantifying addictive online shopping behavior. Utilizing theoretical frameworks such as Rational Addiction and Temptation models, this experiment sheds light on previously uncharted behavioral dimensions. Concurrently, I have also engaged in structural estimation practices, rigorously applying the Digital Addiction model as propounded by Allcott, Gentzkow, and Song (2022) to estimate salient parameters like Habit Formation and Temptation. A simulation study serves as a validation of the model in question. On the technological front, my endeavors in software development have produced a cross-system scraper that leverages the capabilities of Playwright, accompanied by a user-friendly Python Graphical User Interface (GUI). This toolkit significantly facilitates the collection of shopping history data, thereby serving as a critical resource in the operationalization of my research projects. Lastly, my expertise in survey design has enabled the creation of nuanced, targeted questionnaires for my experiments, ensuring data collection is both efficient and methodologically sound.</p>
          
          <b><span style="background-color: rgba(215, 149, 69, 0.3);">Acknowledgements</span></b>
          <p>I really appreciate the chance from both Professors who are generous enough to let me participate the project. </p>
          
          <!-- Paper 2 -->
          <br>
          
          <h2> > Fixing Moral Blindspots: The Role of Uncertainty and AI agent</h2>

          <div class="authors">
            <p>Solo-authored, advised by <a href="https://www.preshidi.com/">Pëllumb Reshidi (Duke)</a></p>
          </div>
          <br>
          <b><span style="background-color: rgba(215, 149, 69, 0.3);">Abstract</span></b>
          <p>Deception regulation becomes annoying and costly when the detection is infeasible,
            which means that potential approaches such as a moral reminder and social-norm
            nudging fail to overcome people's over-protected selfishness. The purpose of this
            study is to investigate the practicality of fostering honesty by enforcing subjective
            moral considerations, introducing uncertainty and AI agent to
            modify the payoffs following a deceitful decision. Through a pre-registered online
            experiment, we have discovered evidence that people are significantly responsive to cheating payoffs, and uncertain changes in payoffs can
            reduce undetectable dishonest behavior. Furthermore, we did additional analysis
            and find that participants appear to learn from the ambiguous payoff adjustments
            and demonstrate a superstitious form of honesty. We conclude by acknowledging
            the limitations of our experimental findings and proposing potential avenues for
            future research.</p>

          <br>

          <!-- Paper 3 -->
          <h2>> Sabermetrics, Recruitment, and Salaries: Unraveling the Moneyball Effect</h2>
          <div class="authors">
            <p>with Prof. <a href="https://juliadhur.com/">Julia Hur (NYU)</a></p>
          </div>
    
          <br>

          <b><span style="background-color: rgba(215, 149, 69, 0.3);">Introduction</span></b>
          <p>In my research, I have focused on data science applications to sports analytics, and utilized fancy deep learning techniques to strengthen data analysis. I scraped and cleaned headshots and statistics of MLB players from 1988-2019, forming a comprehensive dataset. I replicated a deep convolutional neural network model by Wu et al. (2018) for race classification. Using Fixed Effects OLS, I estimated the impact of sabermetrics on team recruitment and salaries. My ongoing work involves applying a staggered Difference-in-Differences model to player-level data. </p>

          <br>

          <!-- Paper 4 -->
          <h2>> Uncertainty, Moral Cost, and Deception</h2>
          <p>Solo-authored</p>
          <br>
          <b><span style="background-color: rgba(215, 149, 69, 0.3);">Introduction</span></b>
          <p> This is a Behavioral Economic research that I am proud of. I conducted a lab experiment examining the role of moral cost as a coordinating factor in the uncertainty puzzle, specifically its impact on both honest and deceptive behaviors. This experiment employed risk and ambiguity as forms of uncertainty and yielded findings explained through a modified casual state space model. Technologically, I developed a multi-stage, two-player cheap talk game using o-Tree to facilitate this research. Analytically, I employed Ordinary Least Squares (OLS) regression to investigate the moderation effects of moral cost and perceived forms of uncertainty on deceptive behaviors.</p>

          <br>
      </div>
    </div>
  </div>
</template>
  
  <style scoped>
body {
  font-family: Arial, sans-serif;
}
.paper-title h3{
  font-weight: bold;
}
.container {
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}

h2 {
  font-size: 1.2em;
  margin-bottom: 10px;
}

.authors a {
  text-decoration: none;
  color: blue;
}

.details {
  list-style-type: disc;
  margin-left: 20px;
}

  </style>
  