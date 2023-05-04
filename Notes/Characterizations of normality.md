---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 27/10/2022 18:37:38
Tags: #Proposition #Topics/Group_Theory

Proved by: [[Basic properties of groups]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $H\subseteq G$ be a subgroup of a group $G$. Then the following are equivalent._
1. $H\nsubgrpeq G$_; that is, $gH=Hg$ for all $g\in G$_
2. $gHg^{-1}\subseteq H$ _for all $g\in G$._
3. $gHg^{-1}=H$ _for all $g\in G$._

_If any of the above hold, then $H$ is the kernel of some homomorphism $\phi:G\to G'$._

```

_Proof_. We shall prove that $1\Rightarrow2\Rightarrow3\Rightarrow1$ and that $1\Leftrightarrow4$. Take $g\in G$.
* ($1\Rightarrow2$): Take $x\in gHg^{-1}$, so $x=ghg^{-1}$ for some $h\in H$. Then $xg=gh$, so $xg\in gH=Hg$ and thus $xg=h'g$ for some $h'\in H$. Observe then that $x=h'\in H$.

* ($2\Rightarrow3$): Take $h\in H$, so $g^{-1}hg\in g^{-1}H\l(g^{-1}\r)^{-1}\subseteq H$. Thus $g^{-1}hg=h'$ for some $h'\in H$, so $h=gh'g^{-1}\in gHg^{-1}$.
* ($3\Rightarrow1$): Take $x\in gH$, so $x=gh$ for some $h\in H$. Then $xg^{-1}=ghg^{-1}\in H$, so $xg^{-1}=h'$ for some $h'\in H$. Then $x=h'g\in Hg$. Conversely, take $x\in Hg$, so $x=hg$ for some $h\in H$. Then $g^{-1}x=g^{-1}hg\in H$, so $g^{-1}x=h'$ for some $h'\in H$. Then $x=gh'\in gH$.

Finally, suppose that $H\nsubgrpeq G$ and consider the projection $\pi:G\to G/H$. Then $\ker\pi=H$, as desired.<span style="float:right;">$\blacksquare$</span>
