---
mathLink: $\Sym_n\!\l(K\r)\subseteq\mat{n}{K}$ is a linear subspace
---

<div class="topSpace"></div>

Date Created: 05/05/2022 19:30:03
Tags: #Proposition

Proved by: [[Transposition is a linear map]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $n\in\N^+$. Then $\Sym_n\!\l(K\r)\subseteq\mat{n}{K}$ is a linear subspace._

```

_Proof_. It suffices to verify that $0_n\in\Sym_n\!\l(K\r)$ and, for every $\alpha\in K$ and $A,B\in\Sym_n\!\l(K\r)$, that $\alpha A+B\in\Sym_n\!\l(K\r)$.
* ($0_n\in\Sym_n\!\l(K\r)$): This follows readily since $0_n=0_n^\trans$.

* ($\alpha A+B\in\Sym_n\!\l(K\r)$): The result follows from the following computation:
$$\begin{align}
    \l(\alpha A+B\r)^\trans&=\l(\alpha A\r)^\trans+B^\trans && \textrm{Transposition respects matrix addition} \\
    &=\alpha A^\trans+B^\trans && \textrm{Transposition respects scalar multiplication} \\
    &=\alpha A+B. && A,B\in\Sym_n\!\l(K\r)\qedin
\end{align}$$
