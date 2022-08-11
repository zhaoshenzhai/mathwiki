<div class="topSpace"></div>

Date Created: 07/02/2022 19:54:38
Tags: #Proposition #Closed

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $X$ be a set and let $\Pi$ be a partition on $X$. Then the binary relation_ $R_\Pi$ _induced by  $\Pi$ is an equivalence relation on $X$._

```

_Proof_. Take $x,y,z\in X$; we verify that $R_\Pi$ is reflexive, symmetric, and transitive on $X$:
* (Reflexive): By $\axipartition[3]$, we have $x\in\bigcup\Pi$ and thus there exists $P\in\Pi$ such that $x\in P$. Certainly then $x\in P\land x\in P$, so $xR_\Pi x$.
* (Symmetric): Suppose that $xR_\Pi y$, so there exists $P\in\Pi$ such that $x\in P\land y\in P$. Since logical conjunction commutes, we see that $y\in P\land x\in P$ and thus $yR_\Pi x$.
* (Transitive): Suppose that $xR_\Pi y$ and $yR_\Pi z$, so there exist $P,P'\in\Pi$ such that $x\in P\land y\in P$ and $y\in P'\land z\in P'$; it suffices to show that $P=P'$. If not, i.e. if $P\neq P'$, then, by $\axipartition[2]$, we see that $P\cap P'=\em$. But observe that $y\in P$ and $y\in P'$, a contradiction.<span style="float:right;">$\blacksquare$</span>
