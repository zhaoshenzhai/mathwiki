---
custom_alias: $\sttopR\subset\KtopR$
---

<br />
<br />

Date Created: 05/02/2022 11:07:34
Tags: #Proposition #Closed 

Proved by: [[Criteria for fineness w.r.t. bases]]
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\R$ be the set of real numbers. Then the $K$ topology_ $\KtopR$ _is strictly finer than the standard topology_ $\sttopR$ _on $\R$._

```

_Proof_. Take $\l(a,b\r)\in\mc{B}_\textrm{st}$ and $x\in\l(a,b\r)$. The same interval $\l(a,b\r)\in\mc{B}_K$ contains $x$ and is a subset of itself, so $\sttopR\subseteq\KtopR$. The converse does not hold, for let $\l(-1,1\r)\setcomp K\in\mc{B}_K$ and choose $x=0$. Any $\l(e,f\r)\in\mc{B}_\textrm{st}$ containing $x$ necessarily contains some $q=1/n$ for large enough $n$, so $\l(e,f\r)\not\subseteq\l(-1,1\r)\setcomp K$. Thus $\sttopR\subset\KtopR$.<span style="float:right;">$\blacksquare$</span>
