<div class="topSpace"></div>

Date Created: 28/06/2022 14:57:29
Tags: #Proposition

Proved by: [[Orthonormal sets are linearly independent]], [[Linearly independent set extends to a basis]], [[Gram-Schmidt Orthonormalization]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ denote either $\R$ or $\C$ and let $V$ be an inner product space over $K$. If $\mc{E}\coloneqq\l\{e_1,\dots,e_m\r\}$ is an orthonormal set of vectors in $V$, then there exists an orthonormal basis $\mc{B}$ containing $\mc{E}$._

```

_Proof_. Since $\mc{E}$ is an orthonormal set, it is linearly independent and hence extends to a basis $\mc{B}_0\coloneqq\l\{e_1,\dots,e_m,v_1,\dots,v_n\r\}$ for $V$. Applying Gram-Schmidt Orthonormalization to $\mc{B}_0$, we obtain an orthonormal basis $\mc{B}$ for $V$. Note that the first $m$ vectors $e_j$ in $\mc{B}_0$ remain unchanged since they are already orthonormal, so $\mc{B}$ contains $\mc{E}$.<span style="float:right;">$\blacksquare$</span>
