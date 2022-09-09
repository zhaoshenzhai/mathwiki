---
mathLink: $\skew{n}{K}\subseteq\mat{n}{K}$ is a linear subspace
---

<div class="topSpace"></div>

Date Created: 09/05/2022 18:18:04
Tags: #Proposition

Lemma: _Not Applicable_
Proved by: [[Transposition is a linear map]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $n\in\N^\ast$. Then $\skew{n}{K}\subseteq\mat{n}{K}$ is a linear subspace._

```

_Proof_. It suffices to show that $0_n\in\skew{n}{K}$ and, for every $\alpha\in K$ and $A,B\in\skew{n}{K}$, that $\alpha A+B\in\skew{n}{K}$.
* ($0_n\in\skew{n}{K}$): This follows readily since $0_n^\trans=0_n=-0_n.$

* ($\alpha A+B\in\skew{n}{K}$): The result follows from the following computation:
$$\begin{align}
    \l(\alpha A+B\r)^\trans&=\l(\alpha A\r)^\trans+B^\trans && \textrm{Transposition respects matrix addition} \\
    &=\alpha A^\trans+B^\trans && \textrm{Transposition respects scalar multiplication} \\
    &=\alpha\l(-A\r)+\l(-B\r) && A,B\in\skew{n}{K} \\
    &=-\l(\alpha A+B\r). && \textrm{Arithmetic}\qedin
\end{align}$$
