---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 07/03/2023 13:12:25
Tags: #Type/Proposition #Topic/Topology/Later

Proved by: [[Q is dense in R]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\tpl{X,\mc{T}}$ be a separable topological space. If $\l\{U_\alpha\r\}_{\alpha\in\mc{A}}$ is an open cover for $X$, then $X$ admits a countable subcover.

```

<i>Proof.</i> Since $X$ is separable, there exists a countably dense subset $D\coloneqq\tpl{p_n}$. Then the set $\ms{B}$ of all balls with center $p_n$ and rational radii is countable, so we may let
$$\begin{equation}
    \mc{B}\coloneqq\l\{B_1,B_2,\dots\r\}\coloneqq\l\{B\in\ms{B}\st\ex\alpha\in\mc{A}:B\subseteq U_\alpha\r\}.
\end{equation}$$
Now, for all $\alpha\in\mc{A}$, let $\mc{B}_\alpha\coloneqq\l\{B\in\mc{B}\st B\subseteq U_\alpha\r\}$. We now show that $U_\alpha=\bigcup\mc{B}_\alpha$. Clearly $\bigcup\mc{B}_\alpha\subseteq U_\alpha$, so we prove the other direction.
  * Take $p\in U_\alpha$, so there exists some $r\in\R$ such that $B\l(p,r\r)\subseteq U_\alpha$. Since $D$ is dense in $X$, we have $d\l(p,p_m\r)<r/3$ for some $m\in\N$. But density of $\Q$ in $\R$ furnishes some $s\in\Q$ such that $r/3<s<r/2$, so $d\l(p,p_m\r)<s$. Then $p\in B\l(p_m,s\r)$, so it suffices to show that $B\l(p_m,s\r)\subseteq B\l(p,r\r)$. But this is immediate, for if $q\in B\l(p_m,s\r)$, then
      $$\begin{equation}
          d\l(p,q\r)\leq d\l(p,p_m\r)+d\l(p_m,q\r)<s+s<2s<r.
      \end{equation}$$

  We now have that
$$\begin{equation}
    X\subseteq\bigcup_{\alpha\in\mc{A}}U_\alpha=\bigcup_{\alpha\in\mc{A}}\l(\bigcup\mc{B}_\alpha\r)\subseteq\bigcup_{i=1}^\infty B_i.
\end{equation}$$
  But for each $i\in\N$ we can choose $\alpha_i$ such that $B_i\subseteq U_{\alpha_i}$, so we have $X\subseteq\bigcup_{i=1}^\infty U_{\alpha_i}$.<span style="float:right;">$\blacksquare$</span>
