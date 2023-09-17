---
mathLink-blocks:
    compatibility-premeasure-outer-measure: $\l.\mu^\ast\r|_\mc{A}=\mu$
---

<div class="topSpace"></div>

Date Created: 12/09/2023 20:32:39
Tags: #Type/Definition #Topic/Real_Analysis

Types: <i>Not Applicable</i>
Examples: [[Bernoulli p-measure]], [[Lebesgue Measure]]
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

---

<b>Remark.</b> A related notion of a measure is that of an <i>outer measure</i>, which is defined on the entire $\pow\l(X\r)$. Indeed, for any collection $\mc{A}\subseteq\pow\l(X\r)$ containing $\em$ and covering $X$ and any function $m:\mc{A}\to\l[0,\infty\r]$, the <i>outer measure</i> induced by $m$ is the map $m^\ast:\pow\l(X\r)\to\l[0,\infty\r]$ defined by
$$\begin{equation}
    m^\ast\!\l(S\r)\coloneqq\inf\l\{\sum_{n\in\N}m\l(A_n\r)\st\l\{A_n\r\}_{n\in\N}\subseteq\mc{A}\textrm{ and }A\subseteq\bigcup_{n\in\N}A_n\r\}.
\end{equation}$$
The outer measure is clearly monotone, for if $A\subseteq B$, then every cover of $B$ is also a cover of $A$. It is also countably subadditive. Indeed, take $A_0,A_1,\ldots\in\pow\l(X\r)$ and $\epsilon>0$. For each $n\in\N$, there exists a cover $\l\{B_{n,m}\r\}_{m\in\N}\subseteq\mc{A}$ of $A_n$ such that $\sum_{m\in\N}m\l(B_{n,m}\r)\approx_{\epsilon/2^{n+1}}m^\ast\!\l(A_n\r)$. Thus $\sum_{n,m\in\N}m\l(B_{n,m}\r)\approx_\epsilon\sum_{n\in\N}m^\ast\!\l(A_n\r)$, but since $\l\{B_{n,m}\r\}_{n,m\in\N}\subseteq\mc{A}$ is a cover of $\bigcup_{n\in\N}A_n$, we see that $m^\ast\!\l(\bigcup_{n\in\N}A_n\r)\leq\sum_{n,m\in\N}m\l(B_{n,m}\r)\leq\sum_{n\in\N}m^\ast\!\l(A_n\r)+\epsilon$. The result follows since $\epsilon$ is arbitrary.
* For a premeasure $\mu$ on an algebra $\mc{A}$, we have $\l.\mu^\ast\r|_\mc{A}=\mu$. Indeed, take $A\in\mc{A}$ and a cover $\l\{A_n\r\}_{n\in\N}\subseteq\mc{A}$ of $A$. Setting $A_n'\coloneqq A_n\cap A$, we see that $A=\bigcup_{n\in\N}A_n'$, which can be disjointified to give us $\mu\l(A\r)=\sum_{n\in\N}\mu\l(A_n'\r)\leq\sum_{n\in\N}\mu\l(A_n\r)$. Thus $\mu\l(A\r)\leq\mu^\ast\!\l(A\r)$, and the reverse inequality is trivial by noting that $A\subseteq\bigcup_{n\in\N}A_n$ with $A_0\coloneqq A$ and $A_{>0}\coloneqq\em$, so $\mu\l(A\r)=\sum_{n\in\N}\mu\l(A_n\r)\geq\mu^\ast\!\l(A\r)$.<span style="float:right;">$\blacklozenge$</span> ^compatibility-premeasure-outer-measure

---

<b>Remark.</b> For any collection $\mc{C}\subseteq\pow\l(X\r)$, the <i>($\sigma$-)algebra generated by $\mc{C}$</i> is the intersection of all ($\sigma$-)algebras on $X$ containing $\mc{C}$, denoted respectively by $\gen{\mc{C}}$ and $\gen{\mc{C}}_\sigma$. A more bottom-up approach is by setting $\gen{\mc{C}}\coloneqq\bigcup_{n\in\N}\mc{C}_n$, where $\mc{C}_0\coloneqq\mc{C}$ and $\mc{C}_{n+1}$ is the collection of all complements and finite unions of elements from $\mc{C}_n$. Similarly, $\gen{\mc{C}}_\sigma=\bigcup_{\alpha\in\omega_1}\mc{C}_\alpha$ where $\mc{C}_0\coloneqq\mc{C}$, $\omega_1$ is the first uncountable ordinal, and $\mc{C}_\alpha$ is the collection of all complements and countable unions of elements from $\bigcup_{\beta<\alpha}\mc{C}_\beta$.<span style="float:right;">$\blacklozenge$</span>
