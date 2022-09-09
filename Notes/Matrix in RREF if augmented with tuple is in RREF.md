---
mathLink: $\l[A\mid\v{b}\r]$ in RREF $\Rightarrow$ $A$ in RREF
---

<div class="topSpace"></div>

Date Created: 11/06/2022 09:49:16
Tags: #Proposition

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider a matrix $A\in\mat{m\times n}{K}$ and a column vector $\v{b}\in\mat{m\times1}{K}$ for some fixed $m,n\in\N^\ast$. If $\l[A\mid\v{b}\r]$ is in RREF, then $A$ is in RREF too._

```

_Proof_. We verify the axioms for a matrix to be in RREF.
* The fact that $A$ has a $\textrm{`}$staircase$\textrm{'}$ of $1\textrm{'}$s and that these $1\textrm{'}$s are the only non-zero entries in each pivot column ($\axiref[2]$ and $\axiref[3]$ of $A$, respectively) follows directly from that of $\l[A\mid\v{b}\r]$.

To see that every zero-row is at the bottom, note that every non-zero row of $\l[A\mid\v{b}\r]$ precedes its zero-rows, so the only way that this could fail for $A$ is if $A$ has a zero-row $l$ that is non-zero in $\l[A\mid\v{b}\r]$. Thus the leading 1 in row $l$ of $\l[A\mid\v{b}\r]$ is on the $\l(n+1\r)^\textrm{th}$ column, so if any row in $\l[A\mid\v{b}\r]$ below $l$ is non-zero in $A$, its leading one must occur on a column to the right of the $\l(n+1\r)^\textrm{th}$ column. But this is impossible since $\l[A\mid\v{b}\r]$ has $n+1$ columns. Thus all non-zero rows in $A$ must precede its zero-rows, and we are done.<span style="float:right;">$\blacksquare$</span>
