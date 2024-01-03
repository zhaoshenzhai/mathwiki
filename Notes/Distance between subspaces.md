---
mathLink-blocks:
    closed-G-delta-open-F-sigma: Closed sets are $G_\delta$ (metrizable)
    epsilon-neighborhood-theorem: $\epsilon$-Neighborhood Theorem
---

<div class="topSpace"></div>

Date Created: 28/12/2023 14:54:44
References:
Tags: #Type/Definition #Topic/Real_Analysis

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Characterizations of topology via nets]], [[Separation Axioms#^compact-hausdorff-implies-closed]], [[Compact Space#^extreme-value-theorem]]

``` ad-Definition
title: Definition.

Let $X$ be a metric space. For non-empty subsets $A,B\subseteq X$, their <b>distance</b> is $d\l(A,B\r)\coloneqq\inf_{a,b}d\l(a,b\r)$. We write $B\l(A,\epsilon\r)\coloneqq\l\{x\in X\st d\l(x,A\r)<\epsilon\r\}$.
* For each $\em\neq A\subseteq X$, the function $d:X\to\R$ defined by $x\mapsto d\l(x,A\r)$ is $1$-Lipschitz.
* Every closed subset $F\subseteq X$ is $G_\delta$ and every open subset $U\subseteq X$ is $F_\sigma$.
* If $K\subseteq X$ is compact and $U\supset K$ is any open set containing $K$, then there is some $\epsilon>0$ such that $B\l(K,\epsilon\r)\subseteq U$.

```

<i>Proof (Lipschitz).</i> Take $x,x'\in X$. To show that $\l|d\l(x,A\r)-d\l(x',A\r)\r|\leq d\l(x,x'\r)$, note that $d\l(x,A\r)\leq d\l(x,a\r)\leq d\l(x,y\r)+d\l(y,a\r)$ for every $a\in A$, so taking the infimum gives us $d\l(x,A\r)-d\l(y,A\r)\leq d\l(x,y\r)$. The result follows by symmetry.<span style="float:right;">$\blacksquare$</span>

---

<i>Proof ($G_\delta$/$F_\sigma$).</i> Let $A\subseteq X$. For each $a\in A$ and $n\geq1$, it is clear that $B\l(a,1/n\r)\cap A\neq\em$ iff $a\in B\l(A,1/n\r)$. We claim that $\bar{A}=\bigcap_{n\geq1}B\l(A,1/n\r)$, whence we are done. ^closed-G-delta-open-F-sigma
* Indeed, if $a\in\bar{A}$, then $B\l(a,1/n\r)\cap A\neq\em$ for all $n\geq1$. Thus $a\in B\l(A,1/n\r)$ for all $n\geq1$, so $a\in\bigcap_{n\geq1}B\l(A,1/n\r)$. Conversely, any neighborhood $U\ni a$ admits a ball $B\l(a,1/n\r)\subseteq U$ for some $n\geq1$, and since $a\in B\l(A,1/n\r)$, we see that $\em\neq B\l(a,1/n\r)\cap A\subseteq U\cap A$.<span style="float:right;">$\blacksquare$</span>

---

<i>Proof ($\epsilon$-neighborhood).</i> Since the function $d:X\to\R$ mapping $x\mapsto d\l(x,K\r)$ is continuous and $X$ is Hausdorff, we see that $K=\bar{K}=\l\{x\in X\st d\l(x,K\r)=0\r\}$. Thus the function $f:X\to\R$ defined by $x\mapsto d\l(x,X\comp U\r)$ is positive on $K$, so it attains a minimum for some $\epsilon>0$. Clearly then $B\l(K,\epsilon\r)\subseteq U$.<span style="float:right;">$\blacksquare$</span> ^epsilon-neighborhood-theorem
