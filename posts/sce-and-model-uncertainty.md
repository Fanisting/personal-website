---
title: Self-Confirming Equilibrium and Model Uncertainty
description: Literature Note about "Self-Confirming Equilibrium and Model Uncertainty"
date: 2023-05-06
tags:
  - English
  - Literature Note
---

::: info

💡 This paper extended the traditional SCE model to insert *ambiguity aversion* and find that ambiguity aversion **enlarges** the set of SCE. The intuition is that the aversion to payoffs with unknown distributions mitigates the potential “experimentation“ of other alternative strategies, and thus makes decision-makers stick to the former path.

:::



### Setting

**A randomly matched society**. Use <u>large populations (or Nash’s mass action) scenario</u>: many individuals play the game $G$ recurrently with roles $i$, and players are drawn at random and matched to play $G$ for many times.

**Learning issue: Misbeliefs in SCE and Partial Identification**. Many underlying distributions are possible to explain the empirical frequencies they observe (i.e. patterns learned from evidence). Players use accumulated evidence as dataset to evaluate the outcome distribution associated with each choice. There is intrinsic limitations to the available evidence: can only know the terminal node of the sequential game, and mostly his own payoff instead of others’.

**Ambiguity in Opponents’ strategies**. Players cannot infer the distribution of strategy profiles adopted by the opponents, because it is not possible to know from the long-run frequency stats, which thus results in the fundamental inference problem.

### Objective and Subjective uncertainty

For state-space $S$, there is a set $\Sigma \subseteq \Delta(S)$ of possible probabilistic models that the agent posits, and each model $\sigma \in \Sigma$ specifies the obj probability. Plus the action space $a$, the player maximize von-Newmann utility $U(a, \sigma)$ and uncertain about the true model $\sigma$ (i.e. a distribution of strategies in the population of opponents).

**Utility under Ambiguity**. do not use the maxmin utility function $max_{a}min_{\sigma}U(a, \sigma)$, but use a mroe general KMM model (smooth ambiguity model), which allows both maxmin and subjective expected utility. ---Klibanoff, Marinacci, and Mukerji (2005)

### Smooth SCE

Agents in each role best respond to beliefs consistent with their database, choosing actions with the highest smooth ambiguity value, and their database is the one that obtains under the true data generating process corresponding to the actual strategy distribution

### An Example

Player 1 chooses between an outside option $O$ and two Matching Pennies Games $MP_1$ and $MP_2$

- Subgame $MP_2$ has higher maxmin stakes than $MP_1$ (maxmin value $2>1.5$)
  - Calculate the maxmin value: in $MP_2$ the distribution that minimize the expected payoff is $\frac{1}{2}h^2+ \frac{1}{2}t^2$, in which the highest payoff (maxmin value) is 2. Similarly, maxmin value in $MP_1$ is 1.5.
- **only one Bayesian SCE**: Player 1 always choose$MP_2$due to a higher maxmin value and one half of players play$h$
- **sub prob of P1**:  assign probability to the choice $h^k$ as  $\overline{\mu}^k$, and $k \in \{0, 1\}$
  - subjective value:$\{\bar{\mu}^1+1,2-\bar{\mu}^1\} \ge 1.5$ in $MP_1$ and $\{4\overline{\mu}^2,4(1-\overline{\mu}^2)\}\ge2$ in $MP_2$
  - However, the value of $O$ is $(1+\epsilon)$, which is lower than other two Games

What Subgames are reachable?

- For an ambiguity neutral agent, neither $MP_1$ nor $O$ can happen in a Bayesian SCE
  - in a repeated game. even if they are in$O$or$MP_1$, they can learn and turn to$MP_2$
- Ambiguity aversion makes $O$ or $MP_1$ reachable through ***status quo bias***
  - **For agents already in** $MP_1$with **moderate** ambiguity aversion, the aversion to unknown payoff in$MP_2$case makes its payoff penalized, so people still stay in$MP_1$
  - **High ambiguity aversion** makes the option $O$ also possible since people in $O$ do not want to suffer from ambiguity in both games. For an extreme case, the agent see obj payoff in $MP_1$ as the lowest payoff 1 and $MP_2$ as the lowest payoff 0, which are less than $1+\epsilon$

![https://s2.loli.net/2023/05/07/YRTtxBSs3KjLPu8.png](https://s2.loli.net/2023/05/07/YRTtxBSs3KjLPu8.png)

## Recurrent Games and Self-Confirming Equilibrium

### Games with Feedback

a game form with feedback has the form：

$$
G = (I,(S_i,M_i,F_i)_{i \in I})
$$

- $I = \{1, 2, …n\}$ is the set of player roles
- $S_i$ is the finite set of strategies of $i \in I$, and let $S=\prod_{i\in I}S_i$ and $S_{-i}=\Pi_{j\neq i}S_j$ denote the set of all strategy files and player$i$’s opponents’ strategies
- $M_i$ is a set of messages that player$i$may receive *at the end of the game*
- **Feedback function**: $F_i: S \to M_i$. If the game is dynamic, a player’s feedback is a function of the terminal node $\zeta(s)\in Z$ reached under strategy profile $s$. In this case, $F_i(s) = f_i(\zeta(s))$ where $f_i: Z \to M_i$ is the extensive-form feedback function for player $i$.

**Example 1: Three cases about the forms of Feedback**

1. $F_i(s) = \zeta(s)$ each player observes the terminal node (reached under the realized strategy profile). That is, $f_i$ is the identity on $Z$
2. $F_i(s) = g(\zeta(s))$ each player observes everybody’s material consequences at the terminal node, that is, $f_i$ is the consequence function $g$
3. $F_i(s) = g_i(\zeta(s))$ each player observes his own material consequences at the terminal node, that is, $f_i$ is the $i^{th}$ projection of $g$

The player infer that the strategy profile played by his opponents must belong to the set

$$
\{s_{-i} \in S_{-i}: F_{i} (s_{i}, s_{-i}) = m_i\} = F_{i,s_i}^{-1}(m_i)
$$

Rewrite:

$$
F*{s_i}=\{F*{s_i}^{-1}(m_i):m_i \in M_i\}
$$

**Example 2: in former game, player 1 observes only his monetary payoff**

the ex post information partition:

$$
\begin{align}
    F * O &= \{ S_2 \} \\
    F * {H^1} &= F \dot {T^1} = \{ \{ h^1.h^2,h^1.t^2 \}, \{ t^1.h^2,t^1.t^2 \} \} \\
    F * {H^2} &= F_{T^2}=\{ \{ h^1.h^2,t^1.h^2 \}, \{ h^1.t^2,t^1.t^2 \} \} \\
\end{align}
$$

Note. A game form with feedback $(I,(S_i,M_i,F_i) * \{ i \in I \})$ satisfies *own-strategy independence of feedback* if the ex post information partition $ F*{s_i}$ is independent of $s_i$ for every $i \in I$. This property is very strong and is violated in many interesting cases.

### Players' Preferences

For $F_{s_i}(s_{-i}^{'})=F_{s_i}(s_{-i}^{''})$, we have:

$$
U_i(s_i,s_{-i}^{'}) = U_i(s_i,s_{-i}^{''})
$$

Call *game with feedback* the tuple $G=(I,(S_i,M_i,F_i,U_i)_{i\in I})$

**Ambiguity Aversion (**KMM smooth ambiguity criterion**)**

ambiguity attitudes in population i are represented by a strictly increasing and continuous function $\phi_i : \mathcal{U}*i \to \mathbb{R}$, where 

$$
\mathcal U_i=[\min_{s\in S}U_i(s),\max_{s\in S}U_i(s)]
$$

KMM smooth ambiguity criterion is

$$
V_i^{\phi_i}(s_i,\mu_i) = \phi_i^{-1}\Bigl(\int_{\text{supp}\mu_i}\phi_i(U_i(s_i,\sigma_{-i}))\mu_i(d\sigma_{-i})\Bigr)
$$

- player $i$ is uncertain about the true distribution $\sigma_{-i} \in \Delta(S_{-i})$ of strategies in the population of potential opponents
- measure of ambiguity aversion:  $\phi_i''/\phi_i'$

von-Neumann Utility in KMM

$$
U_i(s_i,\sigma_{-i})=\sum\limits_{s_{-i}\in S_{-i}}U_i(s_i,s_{-i})\sigma_{-i}(s_{-i})
$$

standard Bayesian SEU in KMM

$$
V_i^{\operatorname{id}}(s_i,\mu_i) = \int_{\operatorname{supp}\mu_i} U_i(s_i,\sigma_{-i})\mu_i(d\sigma_{-i})
$$

robust criterion Gilboa and Schmeidler

$$
V^\omega_i(s_i,\mu_i) = \min\limits_{\sigma_{-i}\in\text{supp}\mu_i} U_i(s_i,\sigma_{-i})
$$



