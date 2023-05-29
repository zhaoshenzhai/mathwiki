<div class="topSpace"></div>

Date Created: 07/02/2022 19:56:07
Tags: #Type/Proposition #Topic/Set_Theory

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $X$ be a set and let $R$ be an equivalence relation on $X$. Then the quotient set $X/R$ is a partition on $X$.

```

<i>Proof.</i> Observe, by definition of the quotient set, we have $X/R\subseteq\pow\l(X\r)$. We now verify the axioms for a partition on $X$:
* (Non-empty): Take $\l[x\r]_R\in X/R$. Since $R$ is reflexive on $X$, we see that $x\in\l[x\r]_R$ and thus elements of $X/R$ are non-empty.

* (Disjoint): Take $\l[x\r]_R,\l[y\r]_R\in X/R$; we shall verify the contrapositive by assuming that there exists a common element of $\l[x\r]_R$ and $\l[y\r]_R$, say $t$. It follows that $xRt$ and $yRt$, so, by symmetry and transitivity, we see that $xRy$ and hence $\l[x\r]_R=\l[y\r]_R$.
* (Cover): Take $x\in X$. Since $R$ is reflexive on $X$, we see that $x\in\l[x\r]_R$. But $\l[x\r]_R\in X/R$, so $x\in\bigcup X/R$.<span style="float:right;">$\blacksquare$</span>
