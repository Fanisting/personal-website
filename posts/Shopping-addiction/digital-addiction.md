---
title: Digital Addiction
description: Literature Note about "Digital Addiction"
date: 2023-06-23
tags:
  - English
  - Literature Note
---

# Digital Addiction

### Question

1.  why don’t just use total mobile time but choose FITSBY time?

### Note

*   control the time usage of web brwoser? impossible
*   addiction = habit formation (rantion addiction) + self-control problem (temptation)

> “Sections 3–5 detail the experimental design, data, and model-free results. Section 6 presents the model estimation strategy and parameter estimates, and Section 7 presents the modeled effects of temptation on time use”

### Temptation (Banerjee and Mullainathan, 2010)

consumer choose $x_t$ to max utility at period $t$

$$
u_t\left(x_t;s_t,p_t\right)+\gamma x_t
$$

*   $x$ is a temptation goods

*   $\gamma\geq0$ reflects the amout of temptation


### **naitve in misperceiving temptation**

$$
u_t\left(x_t;s_t,p_t\right)+\tilde{\gamma}x_t
$$

*   fully naiive if $\tilde{\gamma}=0$


### **Utility function: quadratic flow utility**

$$
u_t(x_t;s_t,p_t)=\frac{\eta}{2}x_t^2+\zeta x_t s_t+\phi s_t+(\xi_t-p_t)x_t
$$

*   $\eta$ measures the demand slope ($\eta < 0$)

*   $\zeta$ regulates the extent of habit formation

*   $\xi_t$ is a deterministic period-specific demand shifter


### Projection Bias

follow Loewenstein, O’Donoghue, and Rabin (2003)

consumer maximize a weighted average of:

*   utility given current habit stock $s_t$

*   utility given predicted habit stock $\tilde{s_r}$


$$
\begin{gathered}
\alpha\sum_{r=t+1}^T\delta^{r-t}u_r(\tilde{x}_r^*(s_t,\tilde{\gamma},p_r);s_t,p_r) \\
+(1-\alpha)\sum_{r=t+1}^{T}\delta^{r-t}u_{r}\left(\tilde{x}_{r}^{*}\left(\tilde{s}_{r},\tilde{\gamma},\boldsymbol{p}_{r}\right);\tilde{s}_{r},p_{r}\right) 
\end{gathered}
$$

Predicted habit stock $\tilde{s_r}$:

$$
\tilde{s}_{r+1}=\rho\left(\tilde{s}_r+\tilde{x}_r^*\left(\tilde{s}_r,\tilde{\gamma},\boldsymbol{p}_r\right)\right)
$$

### Combine them up
$$
x_{t}^{*}\left(s_{t}, \gamma, \boldsymbol{p}_{t}\right)=\arg \max _{x_{t}} u_{t}\left(x_{t} ; s_{t}, p_{t}\right)+\gamma x_{t}+\left[\begin{array}{c}\alpha \sum_{r=t+1}^{T} \delta^{r-t} u_{r}\left(\tilde{x}_{r}^{*}\left(s_{t}, \tilde{\gamma}, \boldsymbol{p}_{r}\right) ; s_{t}, p_{r}\right) \\ +(1-\alpha) \sum_{r=t+1}^{T} \delta^{r-t} u_{r}\left(\tilde{x}_{r}^{*}\left(\tilde{s}_{r}, \tilde{\gamma}, \boldsymbol{p}_{r}\right) ; \tilde{s}_{r}, p_{r}\right)\end{array}\right]
$$

## Experimental Design

### Treatments

*   2\*2 design: whether provide Bonus and whether provide limit (a committment device to control screen usage)

*   MPL(0.2%): randomly choose to pay for the chosen row

    *   make them believe the design

![\<img alt="" data-attachment-key="CX2T49Z3" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fgroups%2F5065262%2Fitems%2FJYG6QJHY%22%2C%22annotationKey%22%3A%229293WEAQ%22%2C%22color%22%3A%22%23ffd400%22%2C%22pageLabel%22%3A%2240%22%2C%22position%22%3A%7B%22pageIndex%22%3A40%2C%22rects%22%3A%5B%5B195.1785687037877%2C463.7857115609305%2C453.92856870378773%2C542.5357115609305%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fgroups%2F5065262%2Fitems%2FY4WS2TFI%22%5D%2C%22locator%22%3A%2240%22%7D%7D" width="431" height="131" src="attachments/CX2T49Z3.png" ztype="zimage">](/digital-addiction/CX2T49Z3.png)

### How do each treatment work

**Habit formation in Bonus treatment**

People reduce FITSBY usage when receiving incentives, and continue to do so after the incentives are gone. (56 to 19 mins per day)

**Self-control in Limit Treatment**

eliminate share $\omega$ (initial = 1) of self-control problems with apps

### **Bonus Treatment**

**Goal**: identify projection bias ($\alpha$), actual habit formation ($\rho$ and $\zeta$), and the curvature of utility ($\eta$)

**Payment**: paid by 50\$ per hour reduced in average daily FITSBY usage below a Bonus Benchmark hours ( = period 1 average FITSBY usage)

**Treatment**: Bonus treatment provides the money but Bonus Control do not.

**Measurement**

*   projection bias $\alpha$: anticipatory response to the bonus in period 2 (before the incentive was in effect)

*   price response parameter $\eta$: actual response in period 3 (while the incentive was in effect)

*   long-term effects: screen usage in periods 4 and 5 (after the incentive had ended)

### Limit Treatment

**Goal**: understand self-control problems and estimate $\gamma$

**Treatment**:

*   limit FITSBY usage through optional app notification

*   The participants can have extra time once after a delay, and the time is randomly assigned with $(0, 2, 5, 20)$

    *   this data serves for another paper

**Measurement**

*   use of the limits as evidence of perceived self-control problems ($\tilde{\gamma}> 0$)


### Bonus and Limit Valuations

> help identify perceived temptation $\tilde{\gamma}$

**MPL (incentive-compatible multiple price list)**

*   certain income or Bonus (\$150 to \$0)
*   **Incentive compatible**: participants in MPL treatment (0.2%) received what they chose

### **Predicted Usage**

> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fgroups%2F5065262%2Fitems%2FJYG6QJHY%22%2C%22pageLabel%22%3A%2212%22%2C%22position%22%3A%7B%22pageIndex%22%3A12%2C%22rects%22%3A%5B%5B72%2C120.285%2C199.243%2C130.447%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fgroups%2F5065262%2Fitems%2FY4WS2TFI%22%5D%2C%22locator%22%3A%2212%22%7D%7D" ztype="zhighlight"><a href="zotero://open-pdf/groups/5065262/items/JYG6QJHY?page=13">identify the degree of naivete</a></span>: <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fgroups%2F5065262%2Fitems%2FJYG6QJHY%22%2C%22pageLabel%22%3A%2212%22%2C%22position%22%3A%7B%22pageIndex%22%3A12%2C%22rects%22%3A%5B%5B377.725%2C120.285%2C495.394%2C130.447%5D%2C%5B490.064%2C120.285%2C498.18%2C129.972%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fgroups%2F5065262%2Fitems%2FY4WS2TFI%22%5D%2C%22locator%22%3A%2212%22%7D%7D" ztype="zhighlight"><a href="zotero://open-pdf/groups/5065262/items/JYG6QJHY?page=13">difference between </a></span>$\gamma$ and $\tilde{\gamma}$

Survey 2 informed participants of past usage and let them predict:

*   usage over the next period (3 weeks)
*   reduced time over the next three weeks

### Survey Outcome Variables

In Survey 1, 3 and 4, ask questions about:

*   addiction attitudes (Ideal use change; Addiction scale; SMS addiction scale; Phone makes life better)
*   subjective well-being

***Ideal use change***

For people who said they used their smartphone “too much” or “too little,” ask about the time they wanna change

***Addiction scale***

modified from Mobile Phone Problem Use Scale (Bianchi and Phillips 2005) and the Bergen Facebook Addiction Scale (Andreassen et al. 2012)

***SMS addiction scale***

another scale, includes some questions in addiction scale

***Phone makes life better***

-5 (“Makes my life worse”) through 0 (“Neutral”) to +5 (“Makes my life better”)

*   Surveys 1, 3, and 4 asked questions designed to measure participants’ perceptions of their addiction and subjective well-being (SWB)
*   nine weeks between survey 1 and 4, sent three text messages per week with a subset of questions

***Subjective well-being***

earlier work (Allcott, Braghieri, Eichmeyer, and Gentzkow 2020)

### Experimental Procedure

**Survey 1**

*   baseline demographics, and drop “bad” participants

*   balanced randomization by:

    *   above- versus below-median baseline FITSBY use
    *   restriction index
    *   addiction index

*

![\<img alt="" data-attachment-key="WCKQRV68" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fgroups%2F5065262%2Fitems%2FJYG6QJHY%22%2C%22annotationKey%22%3A%22ASRS3FQ6%22%2C%22color%22%3A%22%23ffd400%22%2C%22pageLabel%22%3A%2240%22%2C%22position%22%3A%7B%22pageIndex%22%3A40%2C%22rects%22%3A%5B%5B106.875%2C298.87499999999994%2C498.28124999999994%2C705.7499999999999%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fgroups%2F5065262%2Fitems%2FY4WS2TFI%22%5D%2C%22locator%22%3A%2240%22%7D%7D" width="652" height="678" src="attachments/WCKQRV68.png" ztype="zimage">](/digital-addiction/WCKQRV68.png)

## Model-Free Results

### **Treatment Effect Estimating Equation**

$$
Y_{it}=\tau_t^B B_i + \tau_t^L L_i + \beta_t X_{i1} + \nu_{it} + \epsilon_{it}.
$$

*   $Y_{it}$ outcome var: FITSBY usage at $t \in \{3, 4\}$

*   $B_i$: dummy var in treatment Bonus

*   $L_i$: dummy var in treatment Limit

*   $X_{i1}$: baseline usage in period 1 and a dummy when

    $Y_{it}$is a survey outcome


### Bonus Treatment and Habit Formation

![\<img alt="" data-attachment-key="W7NCWLHU" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fgroups%2F5065262%2Fitems%2FJYG6QJHY%22%2C%22annotationKey%22%3A%22WMAAYKCK%22%2C%22color%22%3A%22%23ffd400%22%2C%22pageLabel%22%3A%2242%22%2C%22position%22%3A%7B%22pageIndex%22%3A42%2C%22rects%22%3A%5B%5B68.438%2C357.469%2C545.156%2C704.344%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fgroups%2F5065262%2Fitems%2FY4WS2TFI%22%5D%2C%22locator%22%3A%2242%22%7D%7D" width="795" height="578" src="attachments/W7NCWLHU.png" ztype="zimage">](/digital-addiction/W7NCWLHU.png)

### Limit Treatment and Temptation

***Limit tightness***. document whether the participant have touched the setting limit of each app. Higher score = more temptation for  that app

### Substitution

**data issue**: people not use on phones but then use other devices

Survey 4: asked participants to **estimate their FITSBY use** on other devices in period 3 compared to the three weeks before they joined the study

***Results***. Bonus treatment *reduce* usage on other devices by 8.1 mins/day but Limit treatment *increase* on other devices by 4.8

###

This paper shows that the treatment decrease the FITSBY use, however, increase the usage of other apps.

![\<img alt="" data-attachment-key="XKQCXFTI" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fgroups%2F5065262%2Fitems%2FJYG6QJHY%22%2C%22annotationKey%22%3A%22T2V6CU93%22%2C%22color%22%3A%22%23ffd400%22%2C%22pageLabel%22%3A%2243%22%2C%22position%22%3A%7B%22pageIndex%22%3A43%2C%22rects%22%3A%5B%5B82.969%2C469.18749761581415%2C525.469%2C708.562%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fgroups%2F5065262%2Fitems%2FY4WS2TFI%22%5D%2C%22locator%22%3A%2243%22%7D%7D" width="738" height="399" src="attachments/XKQCXFTI.png" ztype="zimage">](/digital-addiction/XKQCXFTI.png)

### Predicted versus Actual Use

**winsorize** predicted use at no more than 60 minutes per day more or less than actual use in the corresponding period

**left-most in red**: actual usage

**other in right**: predicted in different surveys

We can see that prediction is underestimated.

![\<img alt="" data-attachment-key="8758DR6P" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fgroups%2F5065262%2Fitems%2FJYG6QJHY%22%2C%22annotationKey%22%3A%22DVDRB22I%22%2C%22color%22%3A%22%23ffd400%22%2C%22pageLabel%22%3A%2244%22%2C%22position%22%3A%7B%22pageIndex%22%3A44%2C%22rects%22%3A%5B%5B52.969%2C288.562%2C546.094%2C706.688%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fgroups%2F5065262%2Fitems%2FY4WS2TFI%22%5D%2C%22locator%22%3A%2244%22%7D%7D" width="822" height="697" src="attachments/8758DR6P.png" ztype="zimage">](/digital-addiction/8758DR6P.png)

> people correctly predict that the bonus will reduce their consumption in period 3 and that this reduction will persist even after the incentive is no longer in effect

![\<img alt="" data-attachment-key="EA9W2CUG" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fgroups%2F5065262%2Fitems%2FJYG6QJHY%22%2C%22annotationKey%22%3A%22IU4XV9KC%22%2C%22color%22%3A%22%23ffd400%22%2C%22pageLabel%22%3A%2245%22%2C%22position%22%3A%7B%22pageIndex%22%3A45%2C%22rects%22%3A%5B%5B54.844%2C328.875%2C547.031%2C715.125%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fgroups%2F5065262%2Fitems%2FY4WS2TFI%22%5D%2C%22locator%22%3A%2245%22%7D%7D" width="820" height="643.75" src="attachments/EA9W2CUG.png" ztype="zimage">](/digital-addiction/EA9W2CUG.png)

### Bonus and Limit Valuations

On the survey 3 multiple price list, the average Limit group participant was willing to give up a \$4.20 fixed payment for three weeks of access to the limit functionality

![\<img alt="" data-attachment-key="9HRIZWTL" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fgroups%2F5065262%2Fitems%2FF825BTTP%22%2C%22annotationKey%22%3A%22ZSDN5HW2%22%2C%22color%22%3A%22%23ffd400%22%2C%22pageLabel%22%3A%2271%22%2C%22position%22%3A%7B%22pageIndex%22%3A22%2C%22rects%22%3A%5B%5B50.625%2C359.812%2C546.563%2C713.25%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fgroups%2F5065262%2Fitems%2FY4WS2TFI%22%5D%2C%22locator%22%3A%2271%22%7D%7D" width="827" height="589" src="attachments/9HRIZWTL.png" ztype="zimage">](/digital-addiction/9HRIZWTL.png)

### Effects on Survey Outcomes

both interventions reduced self-reported measures of addiction

![\<img alt="" data-attachment-key="BNNC6LZC" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fgroups%2F5065262%2Fitems%2FJYG6QJHY%22%2C%22annotationKey%22%3A%22IJN7JVIY%22%2C%22color%22%3A%22%23ffd400%22%2C%22pageLabel%22%3A%2246%22%2C%22position%22%3A%7B%22pageIndex%22%3A46%2C%22rects%22%3A%5B%5B70.781%2C368.25%2C539.531%2C711.844%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fgroups%2F5065262%2Fitems%2FY4WS2TFI%22%5D%2C%22locator%22%3A%2246%22%7D%7D" width="781" height="572" src="attachments/BNNC6LZC.png" ztype="zimage">](/digital-addiction/BNNC6LZC.png)

## Structual Estimation

![\<img alt="" data-attachment-key="XV23CYUM" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fgroups%2F5065262%2Fitems%2FJYG6QJHY%22%2C%22annotationKey%22%3A%22FKSYYLBR%22%2C%22color%22%3A%22%23ffd400%22%2C%22pageLabel%22%3A%2247%22%2C%22position%22%3A%7B%22pageIndex%22%3A47%2C%22rects%22%3A%5B%5B70.78125%2C376.84374761581404%2C546.5625%2C704.4999976158142%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fgroups%2F5065262%2Fitems%2FY4WS2TFI%22%5D%2C%22locator%22%3A%2247%22%7D%7D" width="793" height="546" src="attachments/XV23CYUM.png" ztype="zimage">](/digital-addiction/XV23CYUM.png)

## Counterfactuals

> how steady-state consumption would change in counterfactuals where we eliminate self-control problems
