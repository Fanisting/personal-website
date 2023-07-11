---
title: Behavioral Implications of Causal Misperceptions
description: Literature Note about "Behavioral Implications of Causal Misperceptions"
date: 2023-07-17
tags:
  - English
  - Literature Note
---

::: info
:tada: This review presents a framework for modeling imperfect causal reasoning in decisionmaking contexts. The model uses directed acyclic graph (DAG).

:::

### Summary

<aside>
😀 This review presents a framework for modeling imperfect causal reasoning in decisionmaking contexts. The model uses directed acyclic graph (DAG)

</aside>

### A Toy example

A seller sells the product with quantity $q$ and choose price $x$. The receives a partially informative signal $s$ regarding an underlying demand parameter $\theta$.

The seller chooses $x$ to maximize his profit $\pi(x, q)$ with respect to the conditional probability:

$$
\Pr(q\mid s,x)=\sum\limits_{\theta}\Pr(\theta\mid s)\cdot\Pr(q\mid x,\theta)
$$

- $Pr(\theta\mid s)$: given the signal, what is the underlying demand
- $Pr(q\mid x,\theta)$: the price effect of $x$ on $q$, given $\theta$
    - It is a **Causality question**.

A Graphical Structure

 ![](/behavior-causal-misperceptions/dag.png)

**Why do Standard Analysis do not consider the Casality**

Three assumptions about the whole reasoning process:

1. DM (decision-maker) reason in terms of a correctly specified model
2. the conditioning procedure (i.e. prior to posterior) follows rational patterns like Bayesian for the causal interpretation of probabilistic information
3. DM knows the prior joint distribution over all relevant variables—i.e., there are no hidden variables

**Four Questions when the assumptions are not satisfied**

1. Does the decision maker (DM) interpret empirical regularities in his environment through the prism of a subjective causal model?
2. Is this model correctly specified?
3. Do the observational data at the DM’s disposal enable the quantification of causal effects (especially the effect of his own actions on payoff-relevant consequences)?
4. Which methods for drawing such causal inferences does the DM employ?

### An Example: The Dieter's Dilemma

**Settings**

***Healthcare problem**. The DM decide to buy a drugs at a cost* $k>0$ to improve his health. Denote decision $a=1$ if DM buys the supplement, and denote the health outcome as binary variable: $b=1$ is healthy. The profits of DM’s strategy is:
$$
payoff(a) = b-ka
$$

A rational DM would not buy the drugs since it not works but costs.

***Misperceived Causality**
Suppose the decision* $a$ and the health $b$ are correlated with a third, payoff-irrelevant binary variable $c$, which is a signal of health like blood pressure, and follows:
$$
c = (1-a)(1-b)
$$

That is, the consumer’s health level is abnormal $(c=1)$ if and only if he is unhealthy and fails to take the supplement.

We assume there are some historical realizatiton of the decision, which forms the prior distribution:

$$
p(a=1) = \alpha
\\
p(b=1) = \frac{1}{2}
\\
p(c=(1-a)(1-b)\mid a, b) = 1
$$

The DM believes there is an underlying causal structure $G$:

$$
a \to c \to b
$$

That is, the drug buying decision affect the blood pressure and then affect the health. The form a quantitative belief based on the history information, he measure the conditional probability $p(c \mid a)$ and $p(b \mid c)$ , so his subjective belief is:

$$
p_G(b\mid a)=\sum\limits_c p(c\mid a)p(b\mid c),
$$

If the causal model is correct, it is correct to write down $p(b \mid a)$ and regrad it as the estimated casual effect.

***Reversed causality***

The true causality is:

$$
a \to c \gets b,
$$

where the causality link between $c$ and $b$ is reversed in DM’s subjective model.

***DM Behavior.***

The DM determines $a$ to maximize:

$$
payoff(a) = p_G(b=1 \mid \alpha) - ka
$$

The $\alpha$ is the consumption frequency in the population.

$$
\begin{aligned}
p(b=1\mid c=0)&=\frac{p(b=1)p(c=0\mid b=1)}{p(c=(1-a)(1-b)=0)} \\ 
&=\frac{p(b=1)p(c=0\mid b=1)}{p(a=1)+p(a=0)p(b=1)} \\
&=\frac1{1+\alpha},
\end{aligned}
$$

whereas we find
$$
p(b=1\mid c=1)=\frac{p(b=1)p(c=1\mid b=1)}{p(a=0)p(b=0)}=0
$$

We can write $p(c=1)$ as $p(a=1)+p(a=0)p(b=1)$ because the DM thinks $a$ and $b$ cause $c$ solely. A change in $\alpha$ can change $p(b \mid c)$.

***Equilibrium**.*

Define it as a personal equilibrium if the action strategy $\alpha = p(a=1)$ maximize the utility $p_G(b=1 \mid \color{red}{\alpha}) - ka$. And we got indifference condition here:

$$
p_G(b=1\mid a=1)-p_G(b=1\mid a=0)=k.
$$

This notion of equilibrium captures a steady state in the population of ex-ante identical consumers who face the same dieter’s dilemma.

we calculate:

$$
\begin{align*}
p_{G}(h& =1\mid a=1)  \\
&=p(c=1\mid a=1)p(b=1\mid c=1)+p(c=0\mid a=1)p(b=1\mid c=0) \\
&=1\cdot\frac{1}{1+\alpha}+0\cdot0=\frac{1}{1+\alpha},
\end{align*}
$$

and

$$
\begin{aligned}
p_G(b& =1\mid a=0)  \\
&=p(c=1\mid a=0)p(b=1\mid c=1)+p(c=0\mid a=0)p(b=1\mid c=0) \\
&=\frac12\cdot\frac1{1+\alpha}+\frac12\cdot0=\frac1{2(1+\alpha)}.
\end{aligned}
$$

when $k\in(1/4,1/2)$, the **unique personal equilibrium** is $\alpha=(1-2k)/2k$



***Error**.* 

**The consumer’s reverse causality error leads him to take the suboptimal action of consuming a useless product with positive probability. Remember the rational choice is not to take the product.**