---
mathLink: $\l[G:N\r]=2\Rightarrow N\nsubgrpeq G$
---

<div class="topSpace"></div>

Date Created: 27/10/2022 18:19:43
Tags: #Proposition #Topics/Group_Theory

Proved by: [[Basic properties of cosets]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $H\subseteq G$ be a subgroup of a group $G$. If $\l[G:H\r]=2$, then $H\nsubgrpeq G$._

```

_Proof_. Since $H$ has two left cosets in $G$, $H$ is itself a left coset of $H$, and the cosets partition $G$, we see that $K\coloneqq G\comp H$ is the second left coset of $H$ in $G$. Similarly, the same $K$ is the second right coset of $H$ in $G$. Take $g\in G$. Since $gH$ is a left coset of $H$, we see that either $gH=H$ or $gH=K$.
* If $gH=H$, then $g\in H$ and hence $gH=H=Hg$.
* If $gH=K$, then $H=Hg$ implies that $H=K$, a contradiction. But $Hg$ is a right-coset of $H$ in $G$, which forces $Hg=K$. Thus $gH=Hg$.<span style="float:right;">$\blacksquare$</span>
