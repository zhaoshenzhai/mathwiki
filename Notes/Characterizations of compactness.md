---
mathLink-blocks:
    compactness-in-metric-spaces: Compactness in metric spaces
---

<div class="topSpace"></div>

Date Created: 28/12/2023 12:31:48
Tags: #Type/Theorem #Topic/Topology

Proved by: [[Characterizations of topology via nets]], [[Cantor's Theorem]]
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

<i>Proof (metric).</i> By Cantor’s theorem and the FIP, every compact space is complete. Also, clearly every compact space is totally-bounded, and compactness implies sequential compactness is easy since if $x_\blob$ is a sequence with no convergent subsequence, then each $x\in X$ admits a ball $B_x$ containing finitely-many $x_n$’s and so $\l\{B_x\r\}$ is a cover with no finite subcover. We now show that completeness and total-boundedness is equivalent to sequential compactness.
* ($\Rightarrow$). Let $x_\blob$ be a sequence in $X$; we construct a Cauchy subsequence of $x_\blob$ as follows. Cover $X$ by finitely-many balls of radius $1$. At least one such ball, say $B_1$, contains infinitely-many $x_n$’s, say $n\in N_1$ iff $x_n\in B_1$. Continuing inductively, cover $B_j$ by finitely-many balls of radius $1/2^j$, and let $B_{j+1}$ be any ball this cover that contains infinitely-many $x_n$’s, say $n\in N_{j+1}$ iff $x_n\in B_{j+1}$. Picking an increasing sequence $\tpl{n_k}$ with each $n_k\in N_k$ gives us a subsequence $\tpl{x_{n_k}}$ of $x_\blob$, which is Cauchy by construction. By completeness of $X$, we obtain the desired convergent subsequence of $x_\blob$.
* ($\Leftarrow$). If $X$ is not complete, then there is a Cauchy sequence $x_\blob$ in $X$ with no limit. But then no subsequence thereof can converge, a contradiction. Also, if $X$ is not totally-bounded, then there is some $\epsilon>0$ such that $X$ admits no covering of $\epsilon$-balls. The sequence defined inductively by picking $x_{n+1}\in X\comp\bigcup_{i\leq n}B\l(x_i,\epsilon\r)$ and $x_1\in X$ arbitrarily is such that $d\l(x_n,x_m\r)>\epsilon$ for all $n,m\in\N$, so $x_\blob$ defined this way has no convergent subsequence.

Finally, we show that completeness, total-boundedness, and sequential-compactness together imply compactness. Indeed, it suffices to show that if $\mc{U}$ is an open cover of $X$, then there is some $\epsilon>0$ such that each ball of radius $\epsilon$ is contained in some $U\in\mc{U}$, for then a finite subcover exists by total-boundedness of $X$.
* Suppose otherwise, so for each $n\in\N$, there is a ball $B_n$ of radius $1/n$ not contained in any $U\in\mc{U}$. By sequential compactness, picking $x_n\in B_n$ arbitrarily gives us a subsequence $x_\blob$ converging to some $x\in X$. Choose any $U\in\mc{U}$ containing $x$ and let $\epsilon>0$ be such that $x\in B\l(x,\epsilon\r)\subseteq U$. But $d\l(x_n,x\r)<\epsilon/3$ and $1/n<\epsilon/3$ for $n$ large enough, in which case we see that $B_n\subseteq B\l(x,\epsilon\r)\subseteq U$, a contradiction.<span style="float:right;">$\blacksquare$</span>
