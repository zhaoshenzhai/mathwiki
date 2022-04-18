---
custom_alias: $\LLtopR\not\subseteq\ULtopR\land\ULtopR\not\subseteq\LLtopR$
---

<br />
<br />

Date Created: 05/02/2022 17:43:47
Tags: #Proposition #Closed 

Proved by: [[Criteria for fineness w.r.t. bases]]
Justifications: _Not Applicable_
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\R$ be the set of real numbers. Then the lower and upper limit topologies_ $\LLtopR$ _and_ $\ULtopR$_ on $\R$, respectively, are not comparable._

```

_Proof_. ($\LLtopR\not\subseteq\ULtopR$): Take $\l[a,b\r)\in\mc{B}_\textrm{LL}$ and choose $x=a$. Then any $\l(c,d\r]\in\mc{B}_\textrm{UL}$ containing $x$ necessarily implies that $c<a$, so $\l(c,d\r]\not\subseteq\l[a,b\r)$.

($\ULtopR\not\subseteq\LLtopR$): Take $\l(a,b\r]\in\mc{B}_\textrm{UL}$ and choose $x=b$. Then any $\l[c,d\r)\in\mc{B}_\textrm{LL}$ containing $x$ necessarily implies that $d>b$, so $\l[c,d\r)\not\subseteq\l(a,b\r]$.<span style="float:right;">$\blacksquare$</span>
