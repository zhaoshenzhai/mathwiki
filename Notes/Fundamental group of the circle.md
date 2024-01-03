---
mathLink: $\pi_1\!\l(S^1\r)\iso\Z$
---

<div class="topSpace"></div>

Date Created: 18/05/2023 14:02:12
References:
Tags: #Type/Proposition #Topic/Topology

Proved by: [[Homotopy Lifting Theorem]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

The fundamental group of the circle $S^1$ is the infinite cyclic group generated $\l[\omega\r]$, where $\omega:I\to S^1$ is the loop $t\mapsto e^{2\pi it}$ at $\tpl{1,0}$. In particular, $\pi_1\!\l(S^1\r)\iso\Z$.

```

<i>Proof.</i> For a loop $\gamma:S^1\to S^1$, we define its <i>degree</i> as $\deg\gamma\coloneqq\widetilde{\gamma}\l(1\r)$, where $\widetilde{\gamma}:I\to\R$ is the unique lift of $\gamma$ to the universal cover $\exp:\R\to S^1$ with $\widetilde{\gamma}\l(0\r)=0$. Clearly $\deg\omega^n=n$, so the map $\deg:\pi_1\!\l(S^1,1\r)\to\Z$ given by $\l[\gamma\r]\mapsto\deg\gamma$ is a surjection. It is also injective since if $\deg\gamma=0$, then $\widetilde{\gamma}\l(1\r)=0$ and hence $\widetilde{\gamma}\in\pi_1\!\l(\R\r)$, which is trivial. Finally, since $\l[\omega^{n+m}\r]=\l[\omega^n\r]\l[\omega^m\r]$ and every $\gamma\in\pi_1\!\l(S^1,1\r)$ is homotopic to $\omega^{\deg\gamma}$, we see that $\deg$ is a homomorphism, as desired.<span style="float:right;">$\blacksquare$</span>
