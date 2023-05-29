<div class="topSpace"></div>

Date Created: 07/05/2023 17:30:13
Tags: #Type/Proposition #Topic/Group_Theory

Proved by: [[Basic properties of order]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $G=\gen{g}$ be a non-trivial cyclic group. If $G$ is finite, then $G\iso\Z_n$ for some $n\geq2$. Otherwise $G\iso\Z$.

```

_Proof_. If $G$ is finite, set $n\coloneqq\l|G\r|$ and so $n=\l|\gen{g}\r|=\ord{g}$. We claim that $\phi:G\to\Z_n:g^i\mapsto\l[i\r]$ is an isomorphism.
* (Well-defined): If $g^i=g^j$ for some $i\neq j$, say $i>j$, then $g^{i-j}=e$. Observe then that $\ord{g}$ divides $i-j$, so $n\divides\!\l(i-j\r)$. Hence $i\mod{n}j$, so $\l[i\r]=\l[j\r]$.
* (Injective): If $\phi\l(g^i\r)=\phi\l(g^j\r)$, then $\l[i\r]=\l[j\r]$ and so $j=i+kn$ for some $k\in\Z$. Observe then that $g^j=g^{i+kn}=g^i\l(g^n\r)^k=g^ie^k=g^i$.
* (Surjective): For all $a\in\Z_n$, there exists some $i\in\Z$ such that $a=\l[i\r]$. Observe then that $\phi\l(g^i\r)=\l[i\r]=a$.
* (Homomorphism): Observe that $\phi\l(g^ig^j\r)=\phi\l(g^{i+j}\r)=\l[i+j\r]=[i]+[j]=\phi\l(g^i\r)+\phi\l(g^j\r)$.

Now, when $\ord{G}$ is infinite, we claim that $\phi:G\to\Z:g^i\mapsto i$ is an isomorphism.
* (Well-defined): If $g^i=g^j$ for some $i\neq j$, say $i>j$, then $g^{i-j}=e$, contradicting the fact that $\gen{g}=G$ has infinite order.
* (Injective): If $\phi\l(g^i\r)=\phi\l(g^j\r)$, then $i=j$ and so $g^i=g^j$.
* (Surjective): For all $i\in\Z$, we have $\phi\l(g^i\r)=i$.
* (Homomorphism): Observe that $\phi\l(g^ig^j\r)=\phi\l(g^{i+j}\r)=i+j=\phi\l(g^i\r)+\phi\l(g^j\r)$.<span style="float:right;">$\blacksquare$</span>
