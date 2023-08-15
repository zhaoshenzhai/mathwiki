---
mathLink: auto
---


<div class="topSpace"></div>

Date Created: 03/02/2022 17:39:49
Tags: #Type/Proposition #Topic/Set_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\tpl{X,\leq}$ be a totally ordered set and fix $S\subseteq X$. Then $m\in S$ is the least (resp. greatest) element of $S$ iff it is the $<$-minimal (resp. maximal) element of $S$.

```

<i>Proof.</i> We shall prove ‘least $\Leftrightarrow$ minimal’; the dual proof is similar.
* ($\Rightarrow$). If $m$ is the least element of $S$, then $\fa s\in S:m\leq s$. If $s<m$, then, since either $m<s$ or $m=s$, we see that $s<s$ which is contradictory since $<$ is irreflexive on $X$. Thus $s\not<m$ and so $m$ is a $<$-minimal in $S$.

* ($\Leftarrow$). If $m$ is a $<$-minimal element of $S$, then $\fa s\in S:s\not<m$. Since $<$ is connected on $X$ and hence on $S$ too, we see that either $m<s$ or $m=s$. Thus $m\leq s$ and so $m$ is the least element of $S$.<span style="float:right;">$\blacksquare$</span>
