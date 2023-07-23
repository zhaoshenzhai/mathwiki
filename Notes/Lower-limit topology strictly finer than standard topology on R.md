---
mathLink: $\LLtopR$ strictly finer than $\sttopR$
---

<div class="topSpace"></div>

Date Created: 05/02/2022 11:06:10
Tags: #Type/Proposition #Topic/Topology/Later

Proved by: [[Criteria for fineness w.r.t. bases]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\R$ be the set of real numbers. Then the lower limit topology $\LLtopR$ is strictly finer than the standard topology $\sttopR$ on $\R$.

```

<i>Proof.</i> Take $\l(a,b\r)\in\mc{B}_\textrm{st}$ and $x\in\l(a,b\r)$. Let $\l[x,b\r)\in\mc{B}_\textrm{LL}$ and observe that $x\in\l[x,b\r)\subseteq\l(a,b\r)$, so $\sttopR\subseteq\LLtopR$. The converse does not hold, for let $\l[c,d\r)\in\mc{B}_\textrm{LL}$ and choose $x=c$. Any $\l(e,f\r)\in\mc{B}_\textrm{st}$ containing $x$ necessarily implies that $e<c$, so $\l(e,f\r)\not\subseteq\l[c,d\r)$. Thus $\sttopR\subset\LLtopR$.<span style="float:right;">$\blacksquare$</span>
