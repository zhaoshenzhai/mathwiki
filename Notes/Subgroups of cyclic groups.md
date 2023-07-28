<div class="topSpace"></div>

Date Created: 10/06/2023 15:03:01
Tags: #Type/Proposition #Topic/Group_Theory

Proved by: [[Integers|Division Algorithm]], [[Bezout's Identity]]
References: [[Lagrange's Theorem]]
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $G$ be a cyclic group of order $n$. Then every subgroup $H\leq G$ is cyclic, and conversely, for all $m\divides n$, there is a unique subgroup $H\leq G$ of order $m$.

```

<b>Remark.</b> In particular, this shows that the converse of Lagrange’s Theorem holds for finite cyclic groups.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Assume that $H$ is non-trivial. Let $0<k<n$ be the minimal number such that $g^k\in H$, which exist since every non-trivial element $h\in H$ can be written as $g^k$ for some $0<k<n$. Thus $\gen{g^k}\subgrpeq H$, and conversely for every $g^l\in H$, we can write $l=qk+r$ for some $q,r\in\Z$ with $0\leq\l|r\r|<k$. Then, since $g^l,g^{qk}\in H$, we see that $g^r=g^{l-qk}\in H$, which forces $r=0$. Thus $g^l=g^{qk}\in\gen{g^k}$, so $H=\gen{g^k}$, as desired.

Let $H\coloneqq\gen{g^k}\subgrpeq G$ be the subgroup of $G$ as constructed above, where in particular $0<k<n$ is the minimal number such that $g^k\in H$. Then Bézout’s Identity furnishes some $r,s\in\Z$ such that $\gcd\l(k,n\r)=rk+sn$, so $g^{\gcd\l(k,n\r)}=g^{rk+sn}\in H$ and hence $g^{k-\gcd\l(k,n\r)}\in H$ too. Minimality of $k$ shows us that $k=\gcd\l(k,n\r)$, so $\l|H\r|=\ord{g^k}=\ord{g}/\gcd\l(k,\ord{g}\r)=n/k$. Now, take $m\divides n$ and set $k\coloneqq n/m$. The results above show that $\gen{g^k}\subgrpeq G$ is a cyclic subgroup of order $m$, as desired.<span style="float:right;">$\blacksquare$</span>
