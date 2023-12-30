---
mathLink-blocks:
    compactness-in-metric-spaces: Compactness in metric spaces
---

<div class="topSpace"></div>

Date Created: 28/12/2023 12:31:48
Tags: #Type/Theorem #In_Progress

Proved by: [[Characterizations of topology via nets]], [[Cantor's Theorem]], [[Metric Space#^metric-spaces-are-first-countable]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Characterizations of Compactness).

Let $X$ be a topological space. Then $X$ is compact iff every collection of closed sets satisfying the FIP has non-empty intersection. Furthermore, we have:
* (Nets). $X$ is compact iff every net in $X$ has a cluster point, which occurs iff every net in $X$ has a convergent subnet.
* (Metric). If $X$ is a metric space, then $X$ is compact iff it is complete and totally-bounded, and occurs iff every sequence in $X$ has a convergent subsequence.

```
^compactness-in-metric-spaces

<i>Proof.</i> Given such a collection $\l\{F_\alpha\r\}$ of closed sets, the collection $U_\alpha\coloneqq F_\alpha^c$ of open sets is a cover iff $\bigcap_\alpha F_\alpha=\em$. Note that $\l\{F_\alpha\r\}$ has the FIP iff no finite subcollection of $\l\{U_\alpha\r\}$ covers $X$, so the result follows.<span style="float:right;">$\blacksquare$</span>

---

<i>Proof (nets).</i> It suffices to show that $X$ is compact iff every net $x_\blob$ in $X$ has a cluster point, for the latter equivalence holds in general. Indeed, if $X$ is compact and $x_\blob:I\to X$ is a net in $X$, then the family $\l\{A_i\r\}_{i\in I}\coloneqq\l\{x_j\st j\geq i\r\}_{i\in I}$ has the FIP and hence $\bigcap_i\bar{A_i}\neq\em$. Take $x\in\bigcap_i\bar{A_i}$, which is a cluster point of $x_\blob$ since if $U\ni x$ is a neighborhood, then $U$ intersects each $A_i$ and hence $x_\blob$ is frequent in $U$. Conversely, if $X$ is not compact, then there is an open cover $\l\{U_j\r\}_{j\in J}$ of $X$ with no finite subcover. Let $\mc{I}$ denote the collection of finite subsets of $J$, directed by inclusion, and for each $I\in\mc{I}$ pick some $x_I\in(\bigcup_{j\in I}U_j)^c$. Then $x_\blob:\mc{I}\to X$ is a net with no cluster point, since if $x\in X$, say $x\in U_j$ for some $j\in J$, then any $I\geq\l\{j\r\}$ is such that $x_I\not\in U_j$.<span style="float:right;">$\blacksquare$</span>

---

<i>Proof (metric).</i> By Cantor’s theorem and the FIP, every compact space is complete. Also, clearly every compact space is totally-bounded, and <span style="color:pink">compactness implies sequential compactness follows by first-countability of $X$</span>. We now show that completeness and total-boundedness is equivalent to sequential compactness.
* ($\Rightarrow$). Let $x_\blob$ be a sequence in $X$ and cover $X$ by finitely-many balls of radius $1$. At least one such ball, say $B_1$, contains infinitely-many $x_n$’s. Assuming that $B_j$ is defined, let $B_{j+1}$ be any ball in a covering of $B_j$ by finitely-many balls of radius $1/2^{j+1}$, that contains infinitely-many $x_n$’s. 
* ($\Leftarrow$). 

Finally, we show that completeness, total-boundedness, and sequential-compactness together imply compactness.
