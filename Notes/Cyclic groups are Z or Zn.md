---
mathLink: $G$ cyclic $\Rightarrow$ $G\iso\Z$ or $G\iso\Z_n$
---

<div class="topSpace"></div>

Date Created: 17/10/2022 12:47:21
Tags: #Proposition #Courses/MATH235

Proved by: [[Order divides power iff power gives identity]], [[Order of group element is order of generated cyclic group]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $G$ be a cyclic group. Then, if $\ord{G}$ is finite, then $G\iso\Z_n$ for some $n\in\N$, and if $\ord{G}$ is infinite, then $G\iso\Z$._

```

_Proof_. Let $G=\l\langle g\r\rangle$ for some $g\in G$.
* ($\l|G\r|$ finite): Set $n\coloneqq\l|G\r|$, so $n=\ord{G}=\ord{\l\langle g\r\rangle}=\ord{g}$. We claim that $\phi:G\to\Z_n:g^i\mapsto\l[i\r]$ is an isomorphism.
    * (Well-defined): If $g^i=g^j$ for some $i\neq j$, say $i>j$, then $g^{i-j}=e$. Observe then that $\ord{g}$ divides $i-j$, so $n\divides\l(i-j\r)$. Hence $i\mod{n}j$, so $\l[i\r]=\l[j\r]$.
    * (Injective): Take $g^i,g^j\in G$ such that $\phi\l(g^i\r)=\phi\l(g^j\r)$. Then $\l[i\r]=\l[j\r]$, so $j=i+kn$ for some $k\in\Z$. Observe then that
    $$\begin{equation}
        g^j=g^{i+kn}=g^i\l(g^n\r)^k=g^ie^k=g^i.
    \end{equation}$$
    * (Surjective): Take $a\in\Z_n$, so there exists some $i\in\Z$ such that $a=\l[i\r]$. Observe then that $\phi\l(g^i\r)=\l[i\r]=a$.
    * (Homomorphism): Take $g^i,g^j\in G$ and observe that
    $$\begin{equation}
        \phi\l(g^ig^j\r)=\phi\l(g^{i+j}\r)=\l[i+j\r]=[i]+[j]=\phi\l(g^i\r)+\phi\l(g^j\r).
    \end{equation}$$

* ($\ord{G}$ infinite): We claim that $\phi:G\to\Z:g^i\mapsto i$ is an isomorphism.
    * (Well-defined): If $g^i=g^j$ for some $i\neq j$, say $i>j$, then $g^{i-j}=e$, contradicting the fact that $\l\langle g\r\rangle=G$ has infinite order.
    * (Injective): Take $g^i,g^j\in G$ such that $\phi\l(g^i\r)=\phi\l(g^j\r)$. Then $i=j$, so $g^i=g^j$.
    * (Surjective): Take $i\in\Z$ and observe that $\phi\l(g^i\r)=i$.
    * (Homomorphism): Take $g^i,g^j\in G$ and observe that
    $$\begin{equation}
        \phi\l(g^ig^j\r)=\phi\l(g^{i+j}\r)=i+j=\phi\l(g^i\r)+\phi\l(g^j\r).\qedin
    \end{equation}$$
