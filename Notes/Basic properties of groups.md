<div class="topSpace"></div>

Date Created: 04/05/2022 16:35:04
Tags: #Type/Proposition #Topic/Group_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $G$ be a group. Then, for all $g,h,k\in G$, the following algebraic identities hold:
* (Cancellation): $gk=hk\Rightarrow g=h$ and $kg=kh\Rightarrow g=h.$
* (Division): There exists a unique $x\in G$ such that $gx=h$. Similarly for when $xg=h$.
* (Inverse): $\l(gh\r)^{-1}=h^{-1}g^{-1}$.

```

<b>Remark.</b> That the identity element is unique follows from division with $h\coloneqq g$. Similarly, for all $g\in G$, that the inverse of $g$ is unique follows by setting $h\coloneqq e$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i>
* (Cancellation Laws): Let $k'$ be an inverse of $k$. Multiplying, we see that $\l(gk\r)k'=\l(hk\r)k'$ and hence $g\l(kk'\r)=h\l(kk'\r)$. Thus $ge=he$, so $g=h$. Similarly for left-cancellation.
* (Division): Observe that $g\l(g^{-1}h\r)=\l(gg^{-1}\r)h=eh=h$, so set $x\coloneqq g^{-1}h$. For uniqueness, suppose that $k,l\in G$ are both solutions to $gx=h$, so $gk=h=gl$. From the cancellation laws, we see that $g=l$, so we are done. Similarly for when $xg=h$.
* (Inverse): Observe that $\l(gh\r)\l(h^{-1}g^{-1}\r)=g\l(hh^{-1}\r)g^{-1}=geg^{-1}=gg^{-1}=e$ and similarly that $\l(h^{-1}g^{-1}\r)\l(gh\r)=e$.<span style="float:right;">$\blacksquare$</span>
