---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 10/06/2023 15:11:49
References:
Tags: #Type/Proposition #Topic/Group_Theory #Topic/Rings_and_Modules/Ring_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $G$ be a cyclic group of order $n$. Then $\End\l(G\r)\iso\Z/n\Z$ as rings and $\Aut\l(G\r)\iso\l(\Z/n\Z\r)^\times$ as groups.

```

<i>Proof.</i> For each $k\in\Z/n\Z$, let $f_k:G\to G$ map $x\mapsto kx$, which is well-defined since for all $l\equiv k\mod{n}$, say with $l=k+in$, we have $f_l\!\l(x\r)=lx=\l(k+in\r)x=kx$. This map is also a group homomorphism, so $f_k\in\End\l(G\r)$. We claim that the map $\phi:\Z/n\Z\to\End\l(G\r):k\mapsto f_k$ is a ring isomorphism.
* That $\phi$ is a ring homomorphism follows from the fact that $\l(k+k'\r)x=kx+k'x$, $\l(kk'\r)x=k\l(k'x\r)$, and $1x=x$ for all $x\in G$ and $k,k\in\Z/n\Z$. Take $k\in\ker\phi$, so $f_k\!\l(x\r)=kx=0$ for all $x\in G$ and hence $n\divides k$. Thus $k\equiv0\mod{n}$, as desired. Finally, let $f:G\to G$ be a group homomorphism. Writing $G=\gen{x_0}$ for some $x_0\in G$, we see that $f\l(x_0\r)=kx_0$ for some $0\leq k<n$. Then $\phi\l(k\r)=f$, since for all $x\in G$, say with $x=mx_0$ for some $0\leq m<n$, we have
$$\begin{equation}
    \phi\l(k\r)\l(x\r)=f_k\!\l(x\r)=kmx_0=mkx_0=mf\l(x_0\r)=f\l(mx_0\r)=f\l(x\r).
\end{equation}$$

To establish $\Aut\l(G\r)\iso\l(\Z/n\Z\r)^\times$ as groups, we show that $\phi\l(k\r)\in\Aut\l(G\r)$ for all $k\in\l(Z/n\Z\r)^\times$ and conversely that any automorphism $f\in\Aut\l(G\r)$ can be written as $\phi\l(k\r)$ for some $k\in\l(\Z/n\Z\r)^\times$. The restriction of $\phi$ to $\Aut\l(G\r)$ is then the desired isomorphism.
* If $k\in\l(\Z/n\Z\r)^\times$, then $kk'\equiv1\mod{n}$ for some $k'\in\l(\Z/n\Z\r)^\times$. Then $\l(f_k\circ f_{k'}\r)\l(x\r)=kk'x=x$ and similarly $\l(f_{k'}\circ f_k\r)\l(x\r)=x$, so $f_k\in\Aut\l(G\r)$. Conversely, given any automorphism $f\in\Aut\l(G\r)$ with inverse $f'$, the above proof furnishes some $k,k'\in\Z/n\Z$ such that $f=f_k$ and $f'=f_{k'}$. Then $\l(f_k\circ f_{k'}\r)\l(x\r)=x$ shows that $kk'\equiv1\mod{n}$, as desired.<span style="float:right;">$\blacksquare$</span>
