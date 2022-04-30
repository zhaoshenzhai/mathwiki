---
custom_alias: Homogeneous square system $A\v{x}=\v{0}$ has only trivial solution $\Leftrightarrow$ $A\sim I$
---

<br />
<br />

Date Created: 06/04/2022 22:54:31
Tags: #Proposition #Closed

Proved by: [Row-equivalent augmented matrices $\Rightarrow$ equivalent linear systems](Row-equivalent%20augmented%20matrices%20implies%20equivalent%20linear%20systems.md), [Homogeneous $m\times n$ linear system with $m<n$ $\Rightarrow$ non-trivial solutions](Homogeneous%20m%20by%20n%20linear%20system%20with%20m<n%20has%20a%20non-trivial%20solution.md), [[Full-rank square matrix in RREF is identity]]
Justifications: _Not Applicable_

Generalizations: [Square linear system $A\v{x}=\v{b}$ has a unique solution $\Leftrightarrow$ $A\sim I$](Square%20linear%20system%20has%20unique%20solution%20iff%20coefficient%20matrix%20row-equivalent%20to%20identity.md)
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider an $n\times n$ homogeneous system $A\v{x}=\v{0}$ for some fixed $n\in\N^\ast$. Then $A\sim I$ iff the system has only the trivial solution._

```

_Proof_.
* ($\Rightarrow$): Since $A\sim I$, the systems $A\v{x}=\v{0}$ and $I\v{x}=\v{0}$ have the same solutions. However, viewing $\v{x}\in\mat{n\times1}{K}$, we see that $I\v{x}=\v{x}$ and thus $\v{x}=\v{0}$. This forces all solutions to be the trivial solution.

* ($\Leftarrow$): Let $R\coloneqq\rref\l(A\r)$ be of (column) rank $r$. If $r<n$, then the system $R\v{x}=\v{0}$, and hence $A\v{x}=\v{0}$, has a non-trivial solution since there are $\l(n-r\r)$-many basic solutions, a contradiction. Thus $r=n$, so $R$ is a square matrix of full-rank. It follows then that $R=I$.<span style="float:right;">$\blacksquare$</span>
