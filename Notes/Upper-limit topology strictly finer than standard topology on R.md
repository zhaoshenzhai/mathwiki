---
mathLink: $\ULtopR$ strictly finer than $\sttopR$
---

<div class="topSpace"></div>

Date Created: 05/02/2022 11:01:34
Tags: #Type/Proposition #Later/Topology

Proved by: [[Criteria for fineness w.r.t. bases]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $\R$ be the set of real numbers. Then the upper limit topology $\ULtopR$ is strictly finer than the standard topology $\sttopR$ on $\R$.

```

<i>Proof.</i> Take $\l(a,b\r)\in\mc{B}_\textrm{st}$ and $x\in\l(a,b\r)$. Let $\l(a,x\r]\in\mc{B}_\textrm{UL}$ and observe that $x\in\l(a,x\r]\subseteq\l(a,b\r)$, so $\sttopR\subseteq\ULtopR$. The converse does not hold, for let $\l(c,d\r]\in\mc{B}_\textrm{UL}$ and choose $x=d$. Any $\l(e,f\r)\in\mc{B}_\textrm{st}$ containing $x$ necessarily implies that $d<f$, so $\l(e,f\r)\not\subseteq\l(c,d\r]$. Thus $\sttopR\subset\ULtopR$.<span style="float:right;">$\blacksquare$</span>
