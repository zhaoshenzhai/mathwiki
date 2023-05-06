<div class="topSpace"></div>

Date Created: 05/05/2023 20:14:42
Tags: #Type/Proposition #Topic/Group_Theory

Proved by: [[Basic properties of order]], [[Ring of integers is a EUD]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $G=\gen{g}$ be a cyclic group. If $G$ is finite, then $G\iso\Z_n$ for some $n\in\N$, and other wise $G\iso\Z$. Furthermore, if $G\iso\Z_n$, the following properties hold._
1. _$\l|G\r|=n$._
2. _For all $m\in\N$, $G=\gen{g^m}$ iff $m\perp n$._
3. _Let $G_1\iso\Z_n$ and $G_2\iso\Z_m$. If $m\perp n$, then $G_1\times G_2$ is cyclic of order $mn$._
4. _Every subgroup of $G$ is cyclic._
5. _For all $m\divides n$, there exists a unique (cyclic) subgroup $H\subgrpeq G$ of order $m$._

```

_Proof_. We first prove the classification theorem. If $G$ is finite, set $n\coloneqq\l|G\r|$ and so $n=\ord{G}=\ord{\gen{g}}=\ord{g}$. We claim that $\phi:G\to\Z_n:g^i\mapsto\l[i\r]$ is an isomorphism. Indeed, $\phi$ is well-defined since if $g^i=g^j$ for some $i\neq j$, say $i>j$, then $g^{i-j}=e$. Observe then that $\ord{g}$ divides $i-j$, so $n\divides\l(i-j\r)$. Hence $i\mod{n}j$, so $\l[i\r]=\l[j\r]$. It is injective since if $\phi\l(g^i\r)=\phi\l(g^j\r)$, then $\l[i\r]=\l[j\r]$ and so $j=i+kn$ for some $k\in\Z$. Observe then that $g^j=g^{i+kn}=g^i\l(g^n\r)^k=g^ie^k=g^i$. It is surjective since for all $a\in\Z_n$, there exists some $i\in\Z$ such that $a=\l[i\r]$. Observe then that $\phi\l(g^i\r)=\l[i\r]=a$. Lastly, it is a homomorphism since $\phi\l(g^ig^j\r)=\phi\l(g^{i+j}\r)=\l[i+j\r]=[i]+[j]=\phi\l(g^i\r)+\phi\l(g^j\r)$.

Now, when $\ord{G}$ is infinite, we claim that $\phi:G\to\Z:g^i\mapsto i$ is an isomorphism. Indeed, it is well-defined since if $g^i=g^j$ for some $i\neq j$, say $i>j$, then $g^{i-j}=e$, contradicting the fact that $\gen{g}=G$ has infinite order. It is injective since if $\phi\l(g^i\r)=\phi\l(g^j\r)$, then $i=j$ and so $g^i=g^j$. It is surjective since for all $i\in\Z$, we have $\phi\l(g^i\r)=i$. Lastly, it is a homomorphism since $\phi\l(g^ig^j\r)=\phi\l(g^{i+j}\r)=i+j=\phi\l(g^i\r)+\phi\l(g^j\r)$.

We now verify the properties.
1. It suffices to show that $\l|\Z_n\r|=n$, but this is clear since $\ord{\l[1\r]}=n$.

2. Observe that $\ord{g^m}=\ord{g}/\gcd\l(m,\ord{g}\r)=n/\gcd\l(m,n\r)$, so $\l|\gen{g^m}\r|=n$ iff $m\perp n$. But $G$ is finite and $\gen{g^m}\subgrpeq G$, so $\gen{g^m}=G$ iff $m\perp n$.
3. It suffices to show that $\Z_n\times\Z_m$ is cyclic, for then it is cyclic with order $\l|\Z_n\times\Z_m\r|=mn$ and $G_1\times G_2\iso\Z_{mn}$. Indeed, $\ord{\tpl{1,1}}=\lcm\l(\ord{1},\ord{1}\r)=\lcm\l(m,n\r)=mn$ where the last equality holds since $m\perp n$, so $\gen{\tpl{1,1}}=\Z_m\times\Z_n$.
4. Assume that $H$ is non-trivial. Let $0<k<n$ be the minimal number such that $g^k\in H$, which exist since every non-trivial element $h\in H$ can be written as $g^k$ for some $0<k<n$. Thus $\gen{g^k}\subgrpeq H$, and conversely for every $g^l\in H$, we can write $l=qk+r$ for some $q,r\in\Z$ with $0\leq\l|r\r|<k$. Then, since $g^l,g^{qk}\in H$, we see that $g^r=g^{l-qk}\in H$, which forces $r=0$. Thus $g^l=g^{qk}\in\gen{g^k}$, so $H=\gen{g^k}$, as desired.
5. Let $H\coloneqq\gen{g^k}\subgrpeq G$ be the subgroup of $G$ as constructed above, where in particular $0<k<n$ is the minimal number such that $g^k\in H$. Then Bézout$\textrm{'}$s Identity furnishes some $r,s\in\Z$ such that $\gcd\l(k,n\r)=rk+sn$, so $g^{\gcd\l(k,n\r)}=g^{rk+sn}\in H$ and hence $g^{k-\gcd\l(k,n\r)}\in H$ too. Minimality of $k$ shows us that $k=\gcd\l(k,n\r)$, so $\l|H\r|=\ord{g^k}=\ord{g}/\gcd\l(k,\ord{g}\r)=n/k$. Now, take $m\divides n$ and set $k\coloneqq n/m$. The results above show that $\gen{g^k}\subgrpeq G$ is a cyclic subgroup of order $m$, as desired.<span style="float:right;">$\blacksquare$</span>
