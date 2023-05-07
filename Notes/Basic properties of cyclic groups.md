<div class="topSpace"></div>

Date Created: 05/05/2023 20:14:42
Tags: #Type/Proposition #Topic/Group_Theory

Proved by: [[Basic properties of order]], [[Ring of integers is a EUD]]
References: _Not Applicable_
Justifications: [[Classification of Cyclic Groups]]

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $G=\gen{g}$ be finite cyclic group, say with $G\iso\Z_n$. The following properties hold._
1. _For all $m\in\N$, $G=\gen{g^m}$ iff $m\perp n$._
2. _Let $G_1\iso\Z_n$ and $G_2\iso\Z_m$. If $m\perp n$, then $G_1\times G_2$ is cyclic of order $mn$._
3. _Every subgroup of $G$ is cyclic._
4. _For all $m\divides n$, there exists a unique (cyclic) subgroup $H\subgrpeq G$ of order $m$._

```

_Proof_.
1. Observe that $\ord{g^m}=\ord{g}/\gcd\l(m,\ord{g}\r)=n/\gcd\l(m,n\r)$, so $\l|\gen{g^m}\r|=n$ iff $m\perp n$. But $G$ is finite and $\gen{g^m}\subgrpeq G$, so $\gen{g^m}=G$ iff $m\perp n$.
2. It suffices to show that $\Z_n\times\Z_m$ is cyclic, for then it is cyclic with order $\l|\Z_n\times\Z_m\r|=mn$ and $G_1\times G_2\iso\Z_{mn}$. Indeed, $\ord{\tpl{1,1}}=\lcm\l(\ord{1},\ord{1}\r)=\lcm\l(m,n\r)=mn$ where the last equality holds since $m\perp n$, so $\gen{\tpl{1,1}}=\Z_m\times\Z_n$.
3. Assume that $H$ is non-trivial. Let $0<k<n$ be the minimal number such that $g^k\in H$, which exist since every non-trivial element $h\in H$ can be written as $g^k$ for some $0<k<n$. Thus $\gen{g^k}\subgrpeq H$, and conversely for every $g^l\in H$, we can write $l=qk+r$ for some $q,r\in\Z$ with $0\leq\l|r\r|<k$. Then, since $g^l,g^{qk}\in H$, we see that $g^r=g^{l-qk}\in H$, which forces $r=0$. Thus $g^l=g^{qk}\in\gen{g^k}$, so $H=\gen{g^k}$, as desired.
4. Let $H\coloneqq\gen{g^k}\subgrpeq G$ be the subgroup of $G$ as constructed above, where in particular $0<k<n$ is the minimal number such that $g^k\in H$. Then Bézout$\textrm{'}$s Identity furnishes some $r,s\in\Z$ such that $\gcd\l(k,n\r)=rk+sn$, so $g^{\gcd\l(k,n\r)}=g^{rk+sn}\in H$ and hence $g^{k-\gcd\l(k,n\r)}\in H$ too. Minimality of $k$ shows us that $k=\gcd\l(k,n\r)$, so $\l|H\r|=\ord{g^k}=\ord{g}/\gcd\l(k,\ord{g}\r)=n/k$. Now, take $m\divides n$ and set $k\coloneqq n/m$. The results above show that $\gen{g^k}\subgrpeq G$ is a cyclic subgroup of order $m$, as desired.<span style="float:right;">$\blacksquare$</span>
