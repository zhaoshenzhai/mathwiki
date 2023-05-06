<div class="topSpace"></div>

Date Created: 05/05/2023 20:14:42
Tags: #Type/Proposition #In_Progress

Proved by: [[Basic properties of order]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $G=\gen{g}$ be a cyclic group. If $G$ is finite, then $G\iso\Z_n$ for some $n\in\N$, and other wise $G\iso\Z$. Furthermore, if $G$ is finite, the following properties hold._
* _If $G\iso\Z_n$, then $\l|G\r|=n$._
* _For all $m\in\N$, $G=\gen{g^m}$ iff $m\perp n$._
* _Let $G_1\iso\Z_n$ and $G_2\iso\Z_m$. If $m\perp n$, then $G_1\times G_2$ is cyclic of order $mn$._
* _For all $m\divides n$, there exists a unique cyclic subgroup $H\subgrpeq G$ of order $m$. Conversely, if this holds for any finite group $G$, then $G$ is cyclic._

```

_Proof_. We first prove the classification theorem. If $G$ is finite, set $n\coloneqq\l|G\r|$ and so $n=\ord{G}=\ord{\gen{g}}=\ord{g}$. We claim that $\phi:G\to\Z_n:g^i\mapsto\l[i\r]$ is an isomorphism. Indeed, $\phi$ is well-defined since if $g^i=g^j$ for some $i\neq j$, say $i>j$, then $g^{i-j}=e$. Observe then that $\ord{g}$ divides $i-j$, so $n\divides\l(i-j\r)$. Hence $i\mod{n}j$, so $\l[i\r]=\l[j\r]$. It is injective since if $\phi\l(g^i\r)=\phi\l(g^j\r)$, then $\l[i\r]=\l[j\r]$ and so $j=i+kn$ for some $k\in\Z$. Observe then that $g^j=g^{i+kn}=g^i\l(g^n\r)^k=g^ie^k=g^i$. It is surjective since for all $a\in\Z_n$, there exists some $i\in\Z$ such that $a=\l[i\r]$. Observe then that $\phi\l(g^i\r)=\l[i\r]=a$. Lastly, it is a homomorphism since $\phi\l(g^ig^j\r)=\phi\l(g^{i+j}\r)=\l[i+j\r]=[i]+[j]=\phi\l(g^i\r)+\phi\l(g^j\r)$.

Now, when $\ord{G}$ is infinite, we claim that $\phi:G\to\Z:g^i\mapsto i$ is an isomorphism. Indeed, it is well-defined since if $g^i=g^j$ for some $i\neq j$, say $i>j$, then $g^{i-j}=e$, contradicting the fact that $\gen{g}=G$ has infinite order. It is injective since if $\phi\l(g^i\r)=\phi\l(g^j\r)$, then $i=j$ and so $g^i=g^j$. It is surjective since for all $i\in\Z$, we have $\phi\l(g^i\r)=i$. Lastly, it is a homomorphism since $\phi\l(g^ig^j\r)=\phi\l(g^{i+j}\r)=i+j=\phi\l(g^i\r)+\phi\l(g^j\r)$.

We now prove the properties.
* It suffices to show that $\l|\Z_n\r|=n$, but this is clear since $\ord{\l[1\r]}=n$.
* Observe that $\ord{g^m}=\ord{g}/\gcd\l(m,\ord{g}\r)=n/\gcd\l(m,n\r)$, so $\l|\gen{g^m}\r|=n$ iff $m\perp n$. But $G$ is finite and $\gen{g^m}\subgrpeq G$, so $\gen{g^m}=G$ iff $m\perp n$.
* 
* We first show that every subgroup $H\subgrpeq G$ is cyclic. 
