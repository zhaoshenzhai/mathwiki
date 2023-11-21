---
mathLink-blocks:
    compatibility-premeasure-outer-measure: $\l.\mu^\ast\r|_\mc{A}=\mu$
    null-set-outer-measure: $\mu^\ast\!\l(Z\r)=0$ $\Rightarrow$ $Z$ is $\mu$-null
    monotone-convergence-of-sets: Monotone convergence of sets
---

<div class="topSpace"></div>

Date Created: 12/09/2023 20:32:39
Tags: #Type/Definition #Topic/Real_Analysis

Types: [[Borel Sets#^Borel-sigma-algebra]], [[Regularity and Tightness#^regular-tight-measures]]
Examples: <i>Not Applicable</i>
Constructions: [[Measurable Set]], [[Measurable Function]], [[Integral]], [[Absolute Continuity]], [[Convergence in Measure]]
Generalizations: <i>Not Applicable</i>

Properties: [[Borel-Cantelli Lemmas]]
Sufficiencies: [[Caratheodory's Extension Theorem]], [[Monotone Class Lemma]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $X$ be a set. A <b>$\sigma$-algebra</b> on $X$ is a collection $\mc{B}\subseteq\pow\l(X\r)$ containing $\em$ and is closed under complements and countable unions.
* A <b>measure</b> on $\tpl{X,\mc{B}}$ is a map $\mu:\mc{B}\to\l[0,\infty\r]$ sending $\em\mapsto0$ and is countably additive, i.e., $\mu\l(\bigsqcup_nS_n\r)=\sum_n\mu\l(S_n\r)$ for all pairwise disjoint sets $S_n\in\mc{B}$.

The pair $\tpl{X,\mc{B}}$ is called a <b>measurable space</b>, and the triple $\tpl{X,\mc{B},\mu}$ a <b>measure space</b>.

```

<b>Remark.</b> Measures are often first defined on a smaller collection $\mc{A}\subseteq\pow\l(X\r)$ containing $\em$, called an <i>algebra</i> on $X$, where we require only require that it is closed under complements and <i>finite</i> unions. Those measures $\mu:\mc{A}\to\l[0,\infty\r]$ are then called <i>premeasures</i> instead. Note that countable additivity is still required for $\mu$ to be a premeasure, only that we have an additional hypothesis that $\bigsqcup_nA_n\in\mc{A}$ in the first place.
* A (pre)measure is said to be <i>finite</i> if $\mu\l(X\r)<\infty$, <i>probability</i> if $\mu\l(X\r)=1$, <i>$\sigma$-finite</i> if there is a partition $X=\bigsqcup_nX_n$ such that $\mu\l(X_n\r)<\infty$ for all $n\in\N$, and <i>atomless</i> if there are no sets $A\subseteq X$, called <i>atoms</i>, such that $B\subseteq A$ implies either $\mu\l(B\r)=0$ or $\mu\l(B\r)=\mu\l(A\r)$.

Here are some basic properties of <i>finitely-additive</i> (not necessarily countably-additive) premeasures on an algebra $\mc{A}$.
* (<i>Monotone</i>). For all $A,B\in\mc{A}$, if $A\subseteq B$, then $\mu\l(A\r)\leq\mu\l(B\r)$. Indeed, $\mu\l(B\r)=\mu\l(A\sqcup\l(B\comp A\r)\r)=\mu\l(A\r)+\mu\l(B\comp A\r)\geq\mu\l(A\r)$.
* (<i>Countably supadditive</i>). For all pairwise disjoint $A_n\in\mc{A}$ with $\bigsqcup_nA_n\in\mc{A}$, we have $\mu\l(\bigsqcup_nA_n\r)\geq\sum_n\mu\l(A_n\r)$. Indeed, we have
    $$\begin{equation}
        \mu\l(\bigsqcup_nA_n\r)\geq\mu\l(\bigsqcup_{n<N}A_n\r)=\sum_{n<N}\mu\l(A_n\r)\overset{N\to\infty}{\longrightarrow}\sum_n\mu\l(A_n\r).
    \end{equation}$$
* (<i>Finitely subadditive</i>). For all $\l\{A_n\r\}_{n<k}\subseteq\mc{A}$, we have $\mu\l(\bigcup_{n<k}A_n\r)\leq\sum_{n<k}\mu\l(A_n\r)$. Indeed, we may <i>disjointify</i> $\l\{A_n\r\}$ into $\l\{A_n'\r\}$ by letting $A_n'\coloneqq A_n\comp\bigcup_{i<n}A_i$. Then $\bigcup_{n<k}A_n=\bigsqcup_{n<k}A_n'$, so $\mu\l(\bigcup_{n<k}A_n\r)=\mu\l(\bigsqcup_{n<k}A_n'\r)=\sum_{n<k}\mu\l(A_n'\r)\leq\sum_{n<k}\mu\l(A_n\r)$ where the last inequality holds since $A_n'\subseteq A_n$ for all $n<k$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Let $\tpl{X,\mc{B},\mu}$ be a measure space. If $A_n,B_n\in\mc{B}$ are respectively increasing and decreasing sequences with $\mu\l(B_0\r)<\infty$, then $\mu\l(\bigcup_nA_n\r)=\sup_n\mu\l(A_n\r)$ and $\mu\l(\bigcap_nB_n\r)=\inf_n\mu\l(B_n\r)$. Indeed, we disjointify $A_n$ by setting $A_0'\coloneqq A_0$ and $A_n'\coloneqq A_n\comp A_{n-1}$, so that ^monotone-convergence-of-sets
$$\begin{equation}
    \mu\l(\bigcup_kA_k\r)=\mu\l(\bigsqcup_kA_k'\r)=\sum_k\mu\l(A_k'\r)=\lim\limits_{n\to\infty}\sum_{k\leq n}\mu\l(A_k'\r)=\lim\limits_{n\to\infty}\mu\l(A_n\r)=\sup_n\mu\l(A_n\r).
\end{equation}$$
For the second claim, set $A_n\coloneqq B_0\comp B_n$, so $\bigcup_nA_n=B_0\comp B_\infty$ where $B_\infty\coloneqq\bigcap_nB_n$. Note that $\mu\l(\bigcup_nA_n\r)=\mu\l(B_0\comp B_\infty\r)=\mu\l(B_0\r)-\mu\l(B_\infty\r)$. But $A_n$ is an increasing sequence, so we have by the above that $\mu\l(\bigcup_nA_n\r)=\sup_n\mu\l(A_n\r)=\mu\l(B_0\r)-\inf_n\mu\l(B_n\r)$. Since $\mu\l(B_0\r)<\infty$, we may rearrange to obtain the desired result.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> A related notion of a measure is that of an <i>outer measure</i>, which is defined on the entire $\pow\l(X\r)$. Indeed, for any collection $\mc{A}\subseteq\pow\l(X\r)$ containing $\em$ and covering $X$ and any function $\mu:\mc{A}\to\l[0,\infty\r]$, the <i>outer measure</i> induced by $\mu$ is the map $\mu^\ast:\pow\l(X\r)\to\l[0,\infty\r]$ defined by
$$\begin{equation}
    \mu^\ast\!\l(S\r)\coloneqq\inf\l\{\sum_n\mu\l(A_n\r)\st\l\{A_n\r\}_n\subseteq\mc{A}\textrm{ and }A\subseteq\bigcup_nA_n\r\}.
\end{equation}$$
The outer measure is clearly monotone, for if $A\subseteq B$, then every cover of $B$ is also a cover of $A$. It is also countably subadditive. Indeed, take $A_0,A_1,\ldots\in\pow\l(X\r)$ and $\epsilon>0$. For each $n\in\N$, there exists a cover $\l\{B_{n,m}\r\}_m\subseteq\mc{A}$ of $A_n$ such that $\sum_m\mu\l(B_{n,m}\r)\approx_{\epsilon/2^{n+1}}\mu^\ast\!\l(A_n\r)$. Thus
$$\begin{equation}
    \sum_{n,m}\mu\l(B_{n,m}\r)\approx_\epsilon\sum_n\mu^\ast\!\l(A_n\r),
\end{equation}$$
but since $\l\{B_{n,m}\r\}_{n,m}\subseteq\mc{A}$ is a cover of $\bigcup_nA_n$, we see that $\mu^\ast\!\l(\bigcup_nA_n\r)\leq\sum_{n,m}\mu\l(B_{n,m}\r)\leq\sum_n\mu^\ast\!\l(A_n\r)+\epsilon$.
* For a premeasure $\mu$ on an algebra $\mc{A}$, we have $\l.\mu^\ast\r|_\mc{A}=\mu$. Indeed, take $A\in\mc{A}$ and a cover $\l\{A_n\r\}_n\subseteq\mc{A}$ of $A$. Setting $A_n'\coloneqq A_n\cap A$, we see that $A=\bigcup_nA_n'$, which can be disjointified to give us $\mu\l(A\r)=\sum_n\mu\l(A_n'\r)\leq\sum_n\mu\l(A_n\r)$. Thus $\mu\l(A\r)\leq\mu^\ast\!\l(A\r)$, and the reverse inequality is trivial by noting that $A\subseteq\bigcup_nA_n$ with $A_0\coloneqq A$ and $A_{>0}\coloneqq\em$, so $\mu\l(A\r)=\sum_n\mu\l(A_n\r)\geq\mu^\ast\!\l(A\r)$. ^compatibility-premeasure-outer-measure

Let $\tpl{X,\mc{B},\mu}$ be a measure space. A subset $Z\subseteq X$ is said to be <i>$\mu$-null</i> if there is some $\hat{Z}\in\mc{B}$ containing $Z$ with $\mu\,(\hat{Z})=0$. Note that if $\mu^\ast\!\l(Z\r)=0$, then $Z$ is $\mu$-null.
* Indeed, since $\mu^\ast\!\l(Z\r)=0$, for every $m>0$ there is some cover $Z\subseteq\bigcup_nB^m_n$ with each $B^m_n\in\mc{B}$ such that $\sum_n\mu\l(B^m_n\r)<1/m$. Set $\widehat{Z}\coloneqq\bigcap_{m>0}\bigcup_nB^m_n\in\mc{B}$. Then $\widehat{Z}\subseteq\bigcup_nB^m_n$ for every $m>0$, so by monotonicity and countable subadditivity we have $\mu^\ast(\widehat{Z})\leq\mu^\ast\!\l(\bigcup_nB^m_n\r)\leq\sum_n\mu^\ast\!\l(B^m_n\r)<1/m$ for every $m>0$. Thus $\mu^\ast(\widehat{Z})=0$, and since $Z\subseteq\bigcup_nB^m_n$ for every $m$, we see that $Z\subseteq\widehat{Z}$ too.<span style="float:right;">$\blacklozenge$</span> ^null-set-outer-measure

---

<b>Remark.</b> For any collection $\mc{C}\subseteq\pow\l(X\r)$, the <i>($\sigma$-)algebra generated by $\mc{C}$</i> is the intersection of all ($\sigma$-)algebras on $X$ containing $\mc{C}$, denoted respectively by $\gen{\mc{C}}$ and $\gen{\mc{C}}_\sigma$. A more bottom-up approach is by setting $\gen{\mc{C}}\coloneqq\bigcup_n\mc{C}_n$, where $\mc{C}_0\coloneqq\mc{C}$ and $\mc{C}_{n+1}$ is the collection of all complements and finite unions of elements from $\mc{C}_n$. Similarly, $\gen{\mc{C}}_\sigma=\bigcup_{\alpha\in\omega_1}\mc{C}_\alpha$ where $\mc{C}_0\coloneqq\mc{C}$ and $\mc{C}_\alpha$ is the collection of all complements and countable unions of elements from $\bigcup_{\beta<\alpha}\mc{C}_\beta$.
* If $\mc{A}_i$ for $i=1,\dots,d$ are algebras on $X_i$, the <i>product $\sigma$-algebra</i> $\bigotimes_{i=1}^d\mc{A}_i$ is the $\sigma$-algebra on $\prod_{i=1}^dX_i$ generated by all sets of the form $\prod_{i=1}^dA_i$ for $A_i\in\mc{A}_i$.<span style="float:right;">$\blacklozenge$</span>
