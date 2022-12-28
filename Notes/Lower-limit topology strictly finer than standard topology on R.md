---
mathLink: $\LLtopR$ strictly finer than $\sttopR$
---

<div class="topSpace"></div>

Date Created: 05/02/2022 11:06:10
Tags: #Proposition #Later/Topology

Proved by: [[Criteria for fineness w.r.t. bases]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\R$ be the set of real numbers. Then the lower limit topology_ $\LLtopR$ _is strictly finer than the standard topology_ $\sttopR$ _on $\R$._

```

_Proof_. Take $\l(a,b\r)\in\mc{B}_\textrm{st}$ and $x\in\l(a,b\r)$. Let $\l[x,b\r)\in\mc{B}_\textrm{LL}$ and observe that $x\in\l[x,b\r)\subseteq\l(a,b\r)$, so $\sttopR\subseteq\LLtopR$. The converse does not hold, for let $\l[c,d\r)\in\mc{B}_\textrm{LL}$ and choose $x=c$. Any $\l(e,f\r)\in\mc{B}_\textrm{st}$ containing $x$ necessarily implies that $e<c$, so $\l(e,f\r)\not\subseteq\l[c,d\r)$. Thus $\sttopR\subset\LLtopR$.<span style="float:right;">$\blacksquare$</span>
