---
mathLink: $\LLtopR$ and $\KtopR$ not comparable
---

<div class="topSpace"></div>

Date Created: 05/02/2022 17:43:45
Tags: #Proposition #Later/Topology

Proved by: [[Criteria for fineness w.r.t. bases]], [[Q is dense in R]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\R$ be the set of real numbers. Then the lower limit and $K$ topologies_ $\LLtopR$ _and_ $\KtopR$_ on $\R$, respectively, are not comparable._


```

_Proof_. ($\LLtopR\not\subseteq\KtopR$): Take $\l[1/2,1\r)\in\mc{B}_\textrm{LL}$ and choose $x=1/2$. Then for all $B\in\mc{B}_K$, we have $x\not\in B$.

($\KtopR\not\subseteq\LLtopR$): Take $B=\l(-1,1\r)\comp K\in\mc{B}_K$ and choose $x=0$. Then any $\l[a,b\r)\in\mc{B}_\textrm{LL}$ containing $x$ necessarily implies that $b>0$, so there exists some $q=1/n$ such that $q<b$ for large enough $n\in\N$. Thus $q\in\l[a,b\r)$ but $q\not\in B$, so $\l[a,b\r)\not\subseteq B$.<span style="float:right;">$\blacksquare$</span>
