---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 27/10/2022 18:37:38
Tags: #Proposition #Courses/MATH235

Proved by: [[Basic properties of groups]]
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $N\subseteq G$ be a subgroup of a group $G$. Then the following are equivalent._
1. $N\nsubgrpeq G$.
2. $\fa g\in G:gNg^{-1}\subseteq N$.
3. $\fa g\in G:gNg^{-1}=N$.

```

_Proof_. We shall prove that $1\Rightarrow2\Rightarrow3\Rightarrow1$. Take $g\in G$.
* ($1\Rightarrow2$): Take $x\in gNg^{-1}$, so $x=gng^{-1}$ for some $n\in\N$. Then $xg=gn$, so $xg=gN=Ng$ and thus $xg=n'g$ for some $n'\in N$. Observe then that $x=n'\in N$.

* ($2\Rightarrow3$): Take $n\in\N$, so $g^{-1}ng\in g^{-1}N\l(g^{-1}\r)^{-1}\subseteq N$. Thus $g^{-1}ng=n'$ for some $n'\in\N$, so $n=gn'g^{-1}\in gNg^{-1}$.
* ($3\Rightarrow1$): Take $x\in gN$, so $x=gn$ for some $n\in N$. Then $xg^{-1}=gng^{-1}\in N$, so $xg^{-1}=n'$ for some $n'\in N$. Then $x=n'g\in Ng$. Conversely, take $x\in Ng$, so $x=ng$ for some $n\in\N$. Then $g^{-1}x=g^{-1}ng\in N$, so $g^{-1}x=n'$ for some $n'\in N$. Then $x=gn'\in gN$.<span style="float:right;">$\blacksquare$</span>
