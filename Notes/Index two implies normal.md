---
mathLink: $\l[G:N\r]=2\Rightarrow N\nsubgrpeq G$
---

<div class="topSpace"></div>

Date Created: 27/10/2022 18:19:43
Tags: #Proposition #Topics/Group_Theory

Proved by: [[Set of cosets partition the group]], [[Basic properties of cosets]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $N\subseteq G$ be a subgroup of a group $G$. If $\l[G:N\r]=2$, then $N\nsubgrpeq G$._

```

_Proof_. Since $H$ has two left cosets in $G$, $H$ is itself a left coset of $H$, and the cosets partition $G$, we see that $K\coloneqq G\comp H$ is the second left coset of $H$ in $G$. Similarly, the same $K$ is the second right coset of $H$ in $G$. Now, since $gH$ is a left coset of $H$, we see that either $gH=H$ or $gH=K$.
* If $gH=H$, then $g\in H$. Since $H\subseteq G$ is a subgroup, the binary operation closes, so $Hg$, being the set of all elements of the form $hg$ where $h\in H$, is $H$ too. Thus $gH=Hg$.
* If $gH=K$, we proceed by contradiction. If $Hg=H$, then $g\in H$ and similarly $H=gH=K$. But this is a contradiction since $K\cap H=\em$, so $Hg=K$ and we are done.<span style="float:right;">$\blacksquare$</span>
