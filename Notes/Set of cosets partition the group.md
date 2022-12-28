<div class="topSpace"></div>

Date Created: 13/10/2022 13:49:35
Tags: #Proposition #Group_Theory

Proved by: [[Basic properties of cosets]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $H\subseteq G$ be a subgroup of a group $G$. Then the set of left-cosets of $H$ in $G$ form a partition of $G$. Similarly for right-cosets._

```

_Proof_. By definition, every coset $gH$ is a subset of $G$. We now verify the axioms of a partition of $G$.
* (Non-empty): Take $g\in G$. Since $H$ is a group, we see that $e\in H$ and hence $g=ge\in gH$.

* (Disjoint): Take $g_1,g_2\in G$. If $g_1H\cap g_2 H\neq\em$, then there exist $h_1,h_2\in H$ such that $g_1h_1=g_2h_2$. But then $g_1^{-1}g_2=h_1h_2^{-1}$, and since $H$ is a group, we see that $g_1^{-1}g_2\in H$. Thus $g_1H=g_2H$.
* (Cover): Take $g\in G$, so $g\in gH$ and hence $g\in\bigcup_{k\in G}kH$.<span style="float:right;">$\blacksquare$</span>
