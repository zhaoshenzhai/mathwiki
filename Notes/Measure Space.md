<div class="topSpace"></div>

Date Created: 12/09/2023 20:32:39
Tags: #Type/Definition #In_Progress

Types: <i>Not Applicable</i>
Examples: [[Cantor Space]], [[Real Numbers]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: [[Caratheodory's Extension Theorem]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $X$ be a set. A <b>$\sigma$-algebra</b> on $X$ is a collection $\mc{S}\subseteq\pow\l(X\r)$ containing $\em$ and is closed under complements and countable unions.
* A <b>measure</b> on $\tpl{X,\mc{S}}$ is a map $\mu:\mc{S}\to\l[0,\infty\r]$ sending $\em\mapsto0$ and is countably additive, i.e., $\mu\l(\bigsqcup_{n\in\N}S_n\r)=\sum_{n\in\N}\mu\l(S_n\r)$ for all pairwise disjoint $S_n\in\mc{S}$.

The triple $\tpl{X,\mc{S},\mu}$ is called a <b>measure space</b>.

```

<b>Remark.</b> Measures are often first defined on a smaller collection $\mc{A}\subseteq\pow\l(X\r)$ containing $\em$, call an <i>algebra</i> on $X$, where we require only require that it is closed under complements and <i>finite</i> unions. Those measures $\mu:\mc{A}\to\l[0,\infty\r]$ are then called <i>premeasures</i> instead. Note that countable additivity is still required for $\mu$ to be a premeasure, only that we have an additional hypothesis that $\bigsqcup_{n\in\N}A_n\in\mc{A}$ in the first place.
* A (pre)measure is said to be <i>finite</i> if $\mu\l(X\r)<\infty$, <i>probability</i> if $\mu\l(X\r)=1$, and <i>$\sigma$-finite</i> if there is a partition $X=\bigsqcup_{n\in\N}X_n$ such that $\mu\l(X_n\r)<\infty$ for all $n\in\N$.

Here are some basic properties of <i>finitely-additive</i> premeasures on an algebra $\mc{A}$.
* (<i>Monotone</i>). For all $A,B\in\mc{A}$, if $A\subseteq B$, then $\mu\l(A\r)\leq\mu\l(B\r)$. Indeed, $\mu\l(B\r)=\mu\l(A\sqcup\l(B\comp A\r)\r)=\mu\l(A\r)+\mu\l(B\comp A\r)\geq\mu\l(A\r)$.
* (<i>Countably supadditive</i>). For all pairwise disjoint $A_n\in\mc{A}$ with $\bigsqcup_{n\in\N}A_n\in\mc{A}$, we have $\mu\l(\bigsqcup_{n\in\N}A_n\r)\geq\sum_{n\in\N}\mu\l(A_n\r)$. Indeed, we have
    $$\begin{equation}
        \mu\l(\bigsqcup_{n\in\N}A_n\r)\geq\mu\l(\bigsqcup_{n<N}A_n\r)=\sum_{n<N}\mu\l(A_n\r)\overset{N\to\infty}{\longrightarrow}\sum_{n\in\N}\mu\l(A_n\r).
    \end{equation}$$
* (<i>Finitely subadditive</i>). For all $\l\{A_n\r\}_{n<k}\subseteq\mc{A}$, we have $\mu\l(\bigcup_{n<k}A_n\r)\leq\sum_{n<k}\mu\l(A_n\r)$. Indeed, we may <i>disjointify</i> $\l\{A_n\r\}$ into $\l\{A_n'\r\}$ by letting $A_n'\coloneqq A_n\comp\bigcup_{i<n}A_i$. Then $\bigcup_{n<k}A_n=\bigsqcup_{n<k}A_n'$, so $\mu\l(\bigcup_{n<k}A_n\r)=\mu\l(\bigsqcup_{n<k}A_n'\r)=\sum_{n<k}\mu\l(A_n'\r)\leq\sum_{n<k}\mu\l(A_n\r)$ where the last inequality holds since $A_n'\subseteq A_n$ for all $n<k$.<span style="float:right;">$\blacklozenge$</span>
