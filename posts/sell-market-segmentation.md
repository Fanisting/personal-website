---
title: "Selling Consumer Data for Profit: Optimal Market-Segmentation Design and Its Consequences"
description: Literature Note about "Selling Consumer Data for Profit - Optimal Market-Segmentation Design and Its Consequences"
date: 2023-07-11
tags:
  - English
  - Literature Note

---

## Introduction

### Model Setting

1.  **<span style="color: var(--tw-prose-body)"><span style="background-color: rgba(68,70,84,var(--tw-bg-opacity))">Producer</span></span>**

    <span style="color: var(--tw-prose-body)"><span style="background-color: rgba(68,70,84,var(--tw-bg-opacity))">: monoploy in the market with </span></span>

    *<span style="color: var(--tw-prose-body)"><span style="background-color: rgba(68,70,84,var(--tw-bg-opacity))">private </span></span>*

    <span style="color: var(--tw-prose-body)"><span style="background-color: rgba(68,70,84,var(--tw-bg-opacity))">and </span></span>

    *<span style="color: var(--tw-prose-body)"><span style="background-color: rgba(68,70,84,var(--tw-bg-opacity))">constant</span></span>*

    <span style="color: var(--tw-prose-body)"><span style="background-color: rgba(68,70,84,var(--tw-bg-opacity))"> marginal production cost. They are responsible for producing and selling a single product to a unit mass of consumers.</span></span>

2.  **<span style="color: var(--tw-prose-body)"><span style="background-color: rgba(68,70,84,var(--tw-bg-opacity))">Consumers</span></span>**

    *   <span style="color: var(--tw-prose-body)"><span style="background-color: rgba(68,70,84,var(--tw-bg-opacity))">each consumer has a desire for a single unit of the product, and their preferences are represented by a value distribution.</span></span>
    *   <span style="color: var(--tw-prose-body)"><span style="background-color: rgba(68,70,84,var(--tw-bg-opacity))">The distribution of their values is described by a commonly known market demand</span></span>
    *   <span style="color: var(--tw-prose-body)"><span style="background-color: rgba(68,70,84,var(--tw-bg-opacity))">the values determine their willingness to pay for the product.</span></span>

3.  **<span style="color: var(--tw-prose-body)"><span style="background-color: rgba(68,70,84,var(--tw-bg-opacity))">Data Broker</span></span>**

    <span style="color: var(--tw-prose-body)"><span style="background-color: rgba(68,70,84,var(--tw-bg-opacity))">: an intermediary between the producer and consumers. Their role is to sell market segmentations to the producer using various selling mechanisms. The data broker collects and sells consumer data to the producer, indirectly help the producer to screen the consumers.</span></span>

<span style="color: var(--tw-prose-body)"><span style="background-color: rgba(68,70,84,var(--tw-bg-opacity))">These roles interact within the model to determine the optimal selling mechanisms for the data broker and to analyze the impact of the data broker's actions on economic welfare and allocative outcomes.</span></span>

### Results

***optimal selling mechanisms* of the data broker**

*   producer only sells to high-value consumers and induces *quasi-perfect price discrimination*, where all the purchasing consumers pay exactly their values

    *   consumer surplus under any optimal mechanism is zero, and it is *as if* all the information about the consumers’ values were revealed to the producer

*   the cutoff function under any optimal mechanism is exactly the minimum of the (ironed) *virtual marginal cost* function and the optimal uniform price as a function of marginal cost

***market outcomes *of data brokership**

> how would the market outcomes differ if the data broker, instead of merely supplying consumer data to the producers, plays a more active role in the product market?

Variables Definition:

*   data brokership
*   *vertical integration: *all the private information about production cost is revealed and the data broker merges with the producer
*   *exclusive retail: *the data broker negotiates with the producer and purchases the product, as well as the exclusive right to sell the product, from the producer
*   *price-controlling data brokership*: the data broker can contract with the producer on prices in addition to providing consumer data.

Findings

*   *vertical integration* between the data broker and the producer increases total surplus while leaving the consumer surplus unchanged
*   data brokership is equivalent to both *exclusive retail* and *price-controlling data brokership*

## An Illustrative Example

### A Textbook Market

A publisherI(*producer*) sells an advanced textbook with private cost $c \in \{1/4, 3/4\}$ and price $p$ to three occupations: faculty, undergraduate student, and graduate student. Each of them make up $1/3$ in the market, and the common knowledge is their evaluations and living places:

| Consumers     | Evaluations (v) | Livings (houses/apartments)         |
| ------------- | --------------- | ----------------------------------- |
| Faculty (F)   | v=3             | all in houses                       |
| Undergrad (U) | v=2             | 1/2 in houses and 1/2 in apartments |
| Grad (G)      | v=1             | all in apartments                   |

The data broker sell data to publisher with price $\tau$ and if the publisher buys the data, it helps publisher to know consumer types and thus brings the opportunity of price discrimination, so publisher should decide on whether buy the data.

See the figure to illustrate the economy:

![\<img alt="" data-attachment-key="GTXGP2H3" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fgroups%2F5109661%2Fitems%2F7CGUP7BC%22%2C%22annotationKey%22%3A%22VTPAK874%22%2C%22color%22%3A%22%23ffd400%22%2C%22pageLabel%22%3A%226%22%2C%22position%22%3A%7B%22pageIndex%22%3A5%2C%22rects%22%3A%5B%5B99.325%2C520.446%2C486.59%2C723.443%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fgroups%2F5109661%2Fitems%2FTPVIE48V%22%5D%2C%22locator%22%3A%226%22%7D%7D" width="645" height="338" src="attachments/GTXGP2H3.png" ztype="zimage">](/sell-market-segmentation/GTXGP2H3.png)

### Optimal Data Selling

the optimal selling strategy is that data broker designs the information structure:

*   consumer type data
*   residential data: live in house or apartments

**value-revealing data case: sell consumer type data only**

when the broker sell the *most informative* data, it helps the publisher to know consumer types theroughly, and if the publisher buy the data, the *net benfit* is:

$$
\begin{aligned}\frac13(1-c)+\frac13(2-c)+\frac13(3-c)-\tau\end{aligned}
$$

if the publisher do not buy the customer data, the *net benfit* under optimal *uniform* price is:

$$
\max\left\{(1-c),\frac{2}{3}(2-c),\frac{1}{3}(3-c)\right\}
$$

Therefore, the publisher would buy data *iff*:

$$
\begin{aligned}
\frac{1}{3}(1-c)+\frac{1}{3}(2-c)+\frac{1}{3}(3-c)-\tau&\geq\max\left\{(1-c),\frac{2}{3}(2-c),\frac{1}{3}(3-c)\right\} \\
\tau&\leq(2-c)/3
\end{aligned}
$$

since $c \in \{1/4, 3/4\}$, the optional strategy should be:

*   when

    $\tau \leq 5/12$

    , always buy

*   when

    $\tau \in [5/12, 7/12]$

    , buy if

    $c=1/4$

    and should charge

    $\tau=5/12$

Therefore, for data broker, the optimal price $p=5/12$ and the revenue is $5/12$. The process behind is that pricing segmentize the market by consumer roles.

**mixed data case**

the broker’s revenue can be improved **if she sells extra data, in this case, the residential data:**

$$
\begin{aligned}\mathcal{M}^*=\left\{\left(\text{residential data, }\tau=\frac13\right),\left(\text{value-revealing data, }\tau=\frac7{12}\right)\right\}\end{aligned}
$$

Obviously, more complicated data helps the publisher to segmentize the market two-dimensionally (see fig 2):

*   $D_H$

    : consumers who lives in houses

*   $D_A$

    : consumers who lives in apartments

and now in each sub-market, there are only two possible types.

![\<img alt="" data-attachment-key="XP9PYBH6" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fgroups%2F5109661%2Fitems%2F7CGUP7BC%22%2C%22annotationKey%22%3A%22X9PX9IEY%22%2C%22color%22%3A%22%23ffd400%22%2C%22pageLabel%22%3A%227%22%2C%22position%22%3A%7B%22pageIndex%22%3A6%2C%22rects%22%3A%5B%5B110.695%2C545.193%2C483.915%2C726.118%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fgroups%2F5109661%2Fitems%2FTPVIE48V%22%5D%2C%22locator%22%3A%227%22%7D%7D" width="622" height="302" src="attachments/XP9PYBH6.png" ztype="zimage">](/sell-market-segmentation/XP9PYBH6.png)

The optimal mechanism $\mathcal{M}^*$ contains notable features:\
1\. when $c= 3/4$, the consumer with $v=1$ do not buy, which means that the data broker might sometimes discourage (ex-post) efficient trades.

2\. consumer surplus is zero

3\. even though every purchasing consumer pays their value, the high-cost publisher never learns exactly each individual consumer’s value

these features hold in the **general environment**.
