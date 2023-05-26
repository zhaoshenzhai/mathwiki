<div class="topSpace"></div>

Date Created: 25/05/2023 20:58:03
Tags: #Type/Proposition #Topic/Group_Theory

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $G$ be a group acting on a set $X$ and let $x,y\in X$. Then the following properties hold._
* _If $x$ and $y$ are in the same orbit, then $G_x$ is conjugate to $G_y$._
* _If $G$ acts transitively on $X$, then $G_x=G_y$ iff there exists a $G$-automorphism $\phi:X\to X$ such that $\phi\l(x\r)=y$._

```

_Proof_.
* If $y=gx$ for some $g\in G$, then for all $h\in G_x$, we see that $hx=x$ and hence $\l(ghg^{-1}\r)y=\l(ghg^{-1}\r)gx=ghx=gx=y$. Thus $ghg^{-1}\in G_y$. Conversely, for all $h\in G_y$, we see that $hy=y$ and hence $hgx=gx$. Then $\l(g^{-1}hg\r)x=x$, so $g^{-1}hg\in G_x$ and hence $h\in gG_xg^{-1}$.
* For all $z\in X$, there is some $g\in G$ such that $z=gx$ and we define $\phi\l(z\r)\coloneqq gy$. This is well-defined since if $z=gx=g'x$, then $g^{-1}g'x=x$ and hence $g^{-1}g'y=y$ by assumption. Thus $gy=g'y$, as desired. Clearly $\phi\l(x\r)=y$, and it is equivariant since $\phi\l(az\r)=\phi\l(agx\r)=agy=a\phi\l(z\r)$ for all $a\in G$ and $z\in X$. Conversely, if $gx=x$, then $gy=g\phi\l(x\r)=\phi\l(gx\r)=\phi\l(x\r)=y$ and some $g\in G_y$. That $G_y\subseteq G_x$ is similar, so $G_x=G_y$.<span style="float:right;">$\blacksquare$</span>
