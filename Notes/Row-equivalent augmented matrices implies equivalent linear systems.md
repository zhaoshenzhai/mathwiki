---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 23/03/2022 22:18:42
Tags: #Proposition

Proved by: [Row-equivalence of matrices $\Leftrightarrow$ factors through invertible matrix](Row-equivalence%20of%20matrices%20iff%20factors%20through%20invertible%20matrix.md)
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider two $m\times n$ linear systems $A\v{x}=\v{b}$ and $A'\v{x}=\v{b}'$. If $\l[A'\mid\v{b}'\r]\sim\l[A\mid\v{b}\r]$, then the two linear systems are equivalent._

```

_Proof_. If $\l[A\mid\v{b}\r]\sim\l[A'\mid\v{b}'\r]$, then there exists an invertible matrix $C\in\mat{m}{K}$ such that
$$\begin{equation}
    \l[A'\mid\v{b}'\r]=C\l[A\mid\v{b}\r].
\end{equation}$$
But then $CA=C'$ and $C\v{b}=\v{b}'$, so it suffices to let $S$ and $S'$ be solution sets of $A\v{x}=\v{b}$ and $\l(CA\r)\v{x}=C\v{b}$, respectively, and prove that $S=S'$.
* ($\subseteq$): Take $\v{s}\in S$, so $A\v{s}=\v{b}$ and hence $\l(CA\r)\v{s}=C\l(A\v{s}\r)=C\v{b}$. Thus $\v{s}\in S'$.
* ($\supseteq$): Take $\v{s}\in S'$, so $\l(CA\r)\v{s}=C\v{b}$. Left-multiplying both sides by $C^{-1}$ and reassociating, we obtain $A\v{s}=\v{b}$ and hence $\v{s}\in S$.<span style="float:right;">$\blacksquare$</span>
