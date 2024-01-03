---
mathLink-blocks:
    compatibility-premeasure-outer-measure: $\l.\mu^\ast\r|_\mc{A}=\mu$
    monotone-convergence-of-sets: Monotone convergence of sets
---

<div class="topSpace"></div>

Date Created: 21/11/2023 15:26:53
References: #Ref/Fol07 #Ref/Anu23_564
Tags: #Type/Proposition #Topic/Real_Analysis

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>
^monotone-convergence-of-sets

``` ad-Proposition
title: Proposition.

Let $\mc{A}$ be an algebra on a set $X$ and let $\mu:\mc{A}\to\l[0,\infty\r]$ be any function with $\mu\l(\em\r)=0$. Then the following basic properties hold.
* If $\mu$ is a finitely-additive premeasure on $\mc{A}$, then $\mu$ is monotone, $\sqcup$-countably-supadditive, and $\cup$-finitely-subadditive.
* The outer measure $\mu^\ast$ induced by $\mu$ is monotone and $\cup$-countably-subadditive. If $\mu$ is a premeasure on $\mc{A}$, then $\l.\mu^\ast\r|_\mc{A}=\mu$.
* If $\tpl{X,\mc{B},\mu}$ is a measure space, then $\mu\l(A_n\r)\incto\mu\l(\bigcup_nA_n\r)$ and $\mu\l(B_n\r)\decto\mu\l(\bigcap_nB_n\r)$ for all increasing $A_n\in\mc{B}$ and decreasing $B_n\in\mc{B}$ with $\mu\l(B_0\r)<\infty$.

```
^compatibility-premeasure-outer-measure

<i>Proof.</i> Let $\mu$ be a finitely-additive premeasure on $\mc{A}$. For monotonicity, for all $A,B\in\mc{A}$ with $A\subseteq B$, we have $\mu\l(B\r)=\mu\l(A\sqcup\l(B\comp A\r)\r)=\mu\l(A\r)+\mu\l(B\comp A\r)\geq\mu\l(A\r)$. For countable-supadditivity, let $A_n\in\mc{A}$ be disjoint with $\bigsqcup_nA_n\in\mc{A}$ and observe that $\mu\l(\bigsqcup_nA_n\r)\geq\mu\l(\bigsqcup_{n<N}A_n\r)=\sum_{n<N}\mu\l(A_n\r)\to\sum_n\mu\l(A_n\r)$. Lastly, if the $A_n$’s are not disjoint, we may disjointify them by letting $A_n'\coloneqq A_n\comp\bigcup_{i<n}A_i$. Then $\bigcup_{n<k}A_n=\bigsqcup_{n<k}A_n'$, so $\mu\l(\bigcup_{n<k}A_n\r)=\mu\l(\bigsqcup_{n<k}A_n'\r)=\sum_{n<k}\mu\l(A_n'\r)\leq\sum_{n<k}\mu\l(A_n\r)$ where the last inequality holds since $A_n'\subseteq A_n$ for all $n<k$.<span style="float:right;">$\blacksquare$</span>

---

<i>Proof.</i> That $\mu^\ast$ is monotone is obvious since if $A\subseteq B$, then any cover of $B$ is a cover of $A$. For countable subadditivity, take $A_n\subseteq X$ and $\epsilon>0$. For each $n\in\N$, there exists a cover $\l\{B_{n,m}\r\}_m\subseteq\mc{A}$ of $A_n$ such that $\sum_m\mu\l(B_{n,m}\r)\approx_{\epsilon/2^{n+1}}\mu^\ast\!\l(A_n\r)$. Thus $\sum_{n,m}\mu\l(B_{n,m}\r)\approx_\epsilon\sum_n\mu^\ast\!\l(A_n\r)$, but since $\l\{B_{n,m}\r\}_{n,m}\subseteq\mc{A}$ is a cover of $\bigcup_nA_n$, we see that $\mu^\ast\!\l(\bigcup_nA_n\r)\leq\sum_{n,m}\mu\l(B_{n,m}\r)\leq\sum_n\mu^\ast\!\l(A_n\r)+\epsilon$. Now, let $\mu$ be a premeasure on $\mc{A}$ and let $A\in\mc{A}$. Take a cover $A_n\in\mc{A}$ of $A$ and set $A_n'\coloneqq A\cap\l(A_n\comp\bigcup_{i<n}A_i\r)$. Observe then that $A=\bigsqcup_nA_n'$, so $\mu\l(A\r)=\sum_n\mu\l(A_n'\r)\leq\sum_n\mu\l(A_n\r)$ and thus $\mu\l(A\r)\leq\mu^\ast\!\l(A\r)$. The reverse inequality is trivial (take $A_0\coloneqq A$ and $A_{>0}\coloneqq\em$).<span style="float:right;">$\blacksquare$</span>

---

<i>Proof.</i> Let $A_n\in\mc{B}$ be an increasing sequence, which may be disjointified by setting $A_0'\coloneqq A_0$ and $A_n'\coloneqq A_n\comp A_{n-1}$ so that
$$\begin{equation}
    \mu\l(\bigcup_kA_k\r)=\mu\l(\bigsqcup_kA_k'\r)=\sum_k\mu\l(A_k'\r)=\lim\limits_{n\to\infty}\sum_{k\leq n}\mu\l(A_k'\r)=\lim\limits_{n\to\infty}\mu\l(A_n\r)=\sup_n\mu\l(A_n\r).
\end{equation}$$
For a decreasing sequence $B_n\in\mc{B}$, set $A_n\coloneqq B_0\comp B_n$ so $\bigcup_nA_n=B_0\comp B_\infty$ where $B_\infty\coloneqq\bigcap_nB_n$. Note that $\mu\l(\bigcup_nA_n\r)=\mu\l(B_0\comp B_\infty\r)=\mu\l(B_0\r)-\mu\l(B_\infty\r)$. But $A_n$ is an increasing sequence, so we have by the above that $\mu\l(\bigcup_nA_n\r)=\sup_n\mu\l(A_n\r)=\mu\l(B_0\r)-\inf_n\mu\l(B_n\r)$. Since $\mu\l(B_0\r)<\infty$, rearranging gives the desired result.<span style="float:right;">$\blacksquare$</span>
