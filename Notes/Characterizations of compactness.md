<div class="topSpace"></div>

Date Created: 28/12/2023 12:31:48
Tags: #Type/Theorem #In_Progress

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Characterizations of Compactness).

Let $X$ be a topological space. Then $X$ is compact iff every collection of closed sets satisfying the FIP has non-empty intersection. Furthermore, we have:
* (Nets). $X$ is compact iff every net in $X$ has a cluster point, which occurs iff every net in $X$ has a convergent subnet.
* (Metric). If $X$ is a metric space, then $X$ is compact iff it is complete and totally-bounded.
* (Metrizable). If $X$ is metrizable, then $X$ is compact iff it is countably compact, which occurs iff every sequence in $X$ has a convergent subsequence.


```

<i>Proof.</i> Given such a collection $\l\{F_\alpha\r\}$ of closed sets, the collection $U_\alpha\coloneqq F_\alpha^c$ of open sets is a cover iff $\bigcap_\alpha F_\alpha=\em$. Note that $\l\{F_\alpha\r\}$ has the FIP iff no finite subcollection of $\l\{U_\alpha\r\}$ covers $X$, so the result follows.<span style="float:right;">$\blacksquare$</span>

---

<i>Proof (nets).</i> We first show that for a net $x_\blob:I\to X$, a point $x\in X$ is a cluster point of $x_\blob$ iff $x_\blob$ admits a subnet converging to $x$.
* Indeed, let $y_\blob:J\to X$ be a subnet of $x_\blob$ converging to $x$ and take a neighborhood $U\ni x$. Since $y_\blob\to x$, choose $j_1\in J$ such that $y_j\in U$ whenever $j\geq j_1$. Fix any $i\in I$, so there exists some $j_2\in J$ such that $i_j\geq i$ whenever $j\geq j_2$. Let $j$ be an upper bound for both $j_1$ and $j_2$, so $i_j\geq i$ is such that $x_{i_j}=y_j\in U$ and hence $x$ is a cluster point of $x_\blob$. Conversely, let $J\coloneqq\mc{U}\times I$ be directed by $\tpl{U,i}\leq\tpl{U',i'}$ iff $U\leq U'$ and $i\leq i'$. If $x$ is a cluster point of $x_\blob$, then for every $i\in I$ and $U\in\mc{U}$, there is some $j_\tpl{U,i}\geq i$ such that $x_{j_\tpl{U,i}}\in U$. Then $\phi:J\to I$ mapping $\tpl{U,i}\mapsto j_\tpl{U,i}$ makes $x_\blob\circ\phi$ a subnet of $x_\blob$ that converges to $x$, since if $\tpl{U',i'}\geq\tpl{U,i}$, then $\phi\l(U',i'\r)\geq i'\geq i$ and $x_{\phi\l(U',i'\r)}\in U'\subseteq U$.

In light of this, it suffices to show that $X$ is compact iff every net $x_\blob$ in $X$ has a cluster point. Indeed, if $X$ is compact and $x_\blob:I\to X$ is a net in $X$, then the family $\l\{A_i\r\}_{i\in I}\coloneqq\l\{x_j\st j\geq i\r\}_{i\in I}$ has the FIP and hence $\bigcap_i\bar{A_i}\neq\em$. Take $x\in\bigcap_i\bar{A_i}$, which is a cluster point of $x_\blob$ since if $U\ni x$ is a neighborhood, then $U$ intersects each $A_i$ and hence $x_\blob$ is frequent in $U$. Conversely, if $X$ is not compact, then there is an open cover $\l\{U_j\r\}_{j\in J}$ of $X$ with no finite subcover. Let $\mc{I}$ denote the collection of finite subsets of $J$, directed by inclusion, and for each $I\in\mc{I}$ pick some $x_I\in(\bigcup_{j\in I}U_j)^c$. Then $x_\blob:\mc{I}\to X$ is a net with no cluster point, since if $x\in X$, say $x\in U_j$ for some $j\in J$, then any $I\geq\l\{j\r\}$ is such that $x_I\not\in U_j$.<span style="float:right;">$\blacksquare$</span>

---

<i>Proof (metric).</i> 

---

<i>Proof (metrizable).</i> 
