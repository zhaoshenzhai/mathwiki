---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 24/11/2022 14:01:58
Tags: #Type/Proposition #Topic/Topology

Proved by: [[Compositions of images slash preimages]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $X$ and $Y$ be topological spaces. Then a function $f:X\to Y$ is continuous iff for all $p\in X$ and all neighborhoods $V$ of $f\l(p\r)$, there exists a neighborhood $U$ of $p$ such that $f\l(U\r)\subseteq V$.

```

<i>Proof.</i> Fix $p\in X$.
* ($\Rightarrow$): Take any neighborhood $V$ of $f\l(p\r)$ and observe that $f^{-1}\!\l(V\r)$ is a neighborhood of $p$ with $f\l(f^{-1}\!\l(V\r)\r)\subseteq V$.

* ($\Leftarrow$): Let $V$ be a neighborhood of $f\l(p\r)$, so there exists a neighborhood $U_p$ of $p$ such that $f\l(U_p\r)\subseteq V$. We claim that $f^{-1}\!\l(V\r)=\bigcup_{p\in X}U_p$, so it is open. The forward direction follows immediately since $p\in U_p$. The backwards direction is also clear, for $U_p\subseteq f^{-1}\!\l(f\l(U_p\r)\r)\subseteq f^{-1}\l(V\r)$.<span style="float:right;">$\blacksquare$</span>
