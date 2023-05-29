<div class="topSpace"></div>

Date Created: 07/02/2022 19:54:38
Tags: #Type/Proposition #Topic/Set_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $X$ be a set and let $\Pi$ be a partition on $X$. Then the binary relation $R_\Pi$ induced by $\Pi$ is an equivalence relation on $X$.

```

<i>Proof.</i> Take $x,y,z\in X$; we verify that $R_\Pi$ is reflexive, symmetric, and transitive on $X$:
* (Reflexive): Since $\Pi$ covers $X$, we have $x\in\bigcup\Pi$ and thus there exists $P\in\Pi$ such that $x\in P$. Certainly then $x\in P\land x\in P$, so $xR_\Pi x$.

* (Symmetric): Suppose that $xR_\Pi y$, so there exists $P\in\Pi$ such that $x\in P\land y\in P$. Since logical conjunction commutes, we see that $y\in P\land x\in P$ and thus $yR_\Pi x$.
* (Transitive): Suppose that $xR_\Pi y$ and $yR_\Pi z$, so there exist $P,P'\in\Pi$ such that $x\in P\land y\in P$ and $y\in P'\land z\in P'$; it suffices to show that $P=P'$. If $P\neq P'$, then $P\cap P'=\em$ since distinct elements of $\Pi$ are disjoint. But since $y\in P$ and $y\in P'$, we have a contradiction.<span style="float:right;">$\blacksquare$</span>
