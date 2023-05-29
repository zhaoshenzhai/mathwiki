<div class="topSpace"></div>

Date Created: 28/06/2022 14:57:29
Tags: #Type/Proposition #Topic/Linear_Algebra

Proved by: [[Orthonormal sets are linearly independent]], [[Basis Extension Theorem]], [[Gram-Schmidt Orthonormalization]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $K$ denote either $\R$ or $\C$ and let $V$ be an inner product space over $K$. If $\mc{E}\coloneqq\l\{e_1,\dots,e_m\r\}$ is an orthonormal set of vectors in $V$, then there exists an orthonormal basis $\mc{B}$ containing $\mc{E}$.

```

<i>Proof.</i> Since $\mc{E}$ is an orthonormal set, it is linearly independent and hence extends to a basis $\mc{B}_0\coloneqq\l\{e_1,\dots,e_m,v_1,\dots,v_n\r\}$ for $V$. Applying Gram-Schmidt Orthonormalization to $\mc{B}_0$, we obtain an orthonormal basis $\mc{B}$ for $V$. Note that the first $m$ vectors $e_j$ in $\mc{B}_0$ remain unchanged since they are already orthonormal, so $\mc{B}$ contains $\mc{E}$.<span style="float:right;">$\blacksquare$</span>
