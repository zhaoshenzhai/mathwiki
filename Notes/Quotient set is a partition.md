<br />
<br />

Date Created: 07/02/2022 19:56:07
Tags: #Proposition #Closed 

Proved by: [Same equivalence class $\Leftrightarrow$ related](Same%20equivalence%20class%20iff%20related.md)
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $X$ be a set and let $R$ be an equivalence relation on $X$. Then the quotient set $X/R$ is a partition on $X$._

```

_Proof_. Observe, by definition of the quotient set, we have $X/R\subseteq\pow\l(X\r)$. We now verify the axioms for a partition on $X$:
* ($\axipartition[1]$): Take $\l[x\r]_R\in X/R$. Since $R$ is reflexive on $X$, we see that $x\in\l[x\r]_R$ and thus elements of $X/R$ are non-empty.
* ($\axipartition[2]$): Take $\l[x\r]_R,\l[y\r]_R\in X/R$; we shall verify the contrapositive by assuming that there exists a common element of $\l[x\r]_R$ and $\l[y\r]_R$, say $t$. It follows that $xRt$ and $yRt$, so, by symmetry and transitivity, we see that $xRy$ and hence $\l[x\r]_R=\l[y\r]_R$.
* ($\axipartition[3]$): Take $x\in X$. Since $R$ is reflexive on $X$, we see that $x\in\l[x\r]_R$. But $\l[x\r]_R\in X/R$, so $x\in\bigcup X/R$.<span style="float:right;">$\blacksquare$</span>
