<br />
<br />

Date Created: 25/06/2022 15:57:52
Tags: #Proposition #Closed

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ denote either $\R$ or $\C$ and let $V$ be an inner product space over $K$. Then, for all subsets $U\subseteq V$, the following algebraic identities hold:_
* _$\l\{0\r\}^\perp=V$._
* _$V^\perp=\l\{0\r\}$._
* _$U\cap U^\perp\subseteq\l\{0\r\}$._
* _For all $W\subseteq V$ with $U\subseteq W$, we have $W^\perp\subseteq U^\perp$._

```

_Proof_. 
* ($\l\{0\r\}^\perp=V$): By definition, $v\in\l\{0\r\}^\perp$ iff $\bilform{v}{u}=0$ for all $u\in\l\{0\r\}$, which reduces to $\bilform{v}{0}=0$. But this is true for all $v\in V$ since $0$ is orthogonal to every vector in $V$.

* ($V^\perp=\l\{0\r\}$): By definition, $v\in V^\perp$ iff $\bilform{v}{u}=0$ for all $v\in V$, so $V^\perp$ contains exactly those vectors in $V$ that is orthogonal to every vector thereof. But this forces $v=0$ since, in particular, $\bilform{v}{v}=0$. Hence $\|v\|^2=0$, so positive-definiteness forces $v=0$.
* ($U\cap U^\perp\subseteq\l\{0\r\}$): Take $v\in U\cap U^\perp$, so $v\in U$ and $\bilform{v}{u}=0$ for all $u\in U$. In particular, $\bilform{v}{v}=0$, so $v=0$.
* ($U\subseteq W\Rightarrow W^\perp\subseteq U^\perp$): Take $v\in W^\perp$, so $\bilform{v}{w}=0$ for all $w\in W$. Since $U\subseteq W$, we have $\bilform{v}{u}=0$ for all $u\in U$, so $v\in U^\perp$.<span style="float:right;">$\blacksquare$</span>
