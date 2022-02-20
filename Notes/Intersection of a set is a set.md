<br />
<br />

Date Created: 20/01/2022 08:11:51
Tags: #Proposition #Closed 

Proved by: [[Axiom Schema of Specification]], [[Set-builder notation is unique]]
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $u$ be a non-empty set. Then there exists a unique set $z$ whose elements are exactly the sets $x$ such that for all $v\in u$, we have $x\in v$. Formally,_
$$\begin{equation}
    \fa u\ex!z\fa x\l[x\in z\Leftrightarrow\fa v\l(v\in u\Rightarrow x\in v\r)\r].
\end{equation}$$

```

_Proof_. Let $\phi\l(x\r)$ denote the formula $\fa v\l(v\in u\Rightarrow x\in v\r)$; we claim that
$$\begin{equation}
    \phi\l(x\r)\Rightarrow x\in u_0
\end{equation}$$
for any $u_0\in u$, which is guaranteed to exist. To this end, take a set $x$ such that $\fa v\l(v\in u\Rightarrow x\in v\r)$. In particular, we have $u_0\in u$ and hence $x\in u_0$.<span style="float:right;">$\blacksquare$</span>
