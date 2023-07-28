<div class="topSpace"></div>

Date Created: 04/05/2023 18:37:34
Tags: #Type/Proposition #Topic/Group_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $G$ be a group and take $g\in G$ of finite order. Then the following properties hold.
* For all $n\in\N^+$, we have $\ord{g^n}=\lcm\l(n,\ord{g}\r)/n=\ord{g}/\gcd\l(n,\ord{g}\r)$.
* If $H$ is a group and $h\in H$ is of finite order, then $\ord{\tpl{g,h}}=\lcm\l(\ord{g},\ord{h}\r)$.
* If $\phi:G\to H$ is a homomorphism, then $\ord{\phi\l(g\r)}$ divides $\ord{g}$. Equality holds if further $\phi$ is an isomorphism.

```

<i>Proof.</i>
* The second equality follows from duality. It suffices to show that $n\ord{g^n}=\lcm\l(n,\ord{g}\r)$, for since $\lcm\l(n,\ord{g}\r)$ is a multiple of $n$, we may divide by $n$ to obtain the desired equality. Obviously $n$ divides $n\ord{g^n}$, and that $\ord{g}$ divides $n\ord{g^n}$ follows from that $g^{n\ord{g^n}}=\l(g^n\r)^{\ord{g^n}}=e$. To show that $n\ord{g^n}$ is the least common multiple, suppose that $m\in\Z$ is another common multiple of $n$ and $\ord{g}$, so $n$ and $\ord{g}$ both divide $m$. Then $m=kn$ for some $k\in\Z$ and, since $\ord{g}$ divides $m$, we have $\l(g^n\r)^k=g^{nk}=g^m=e$. But then $\ord{g^n}$ divides $k$, so there exists some $l\in\Z$ such that $k=l\ord{g^n}$. Thus $m=kn=ln\ord{g^n}$, so $n\ord{g^n}$ divides $m$.
* Let $l\coloneqq\lcm\l(\ord{g},\ord{h}\r)$ and observe that
$$\begin{equation}
    \tpl{g,h}^l=\tpl{g^l,h^l}=\tpl{g^{\ord{g}\cdot l/\ord{g}},g^{\ord{h}\cdot l/\ord{h}}}=\tpl{e_G^{l/\ord{g}},e_H^{l/\ord{h}}}=\tpl{e_G,e_H},
\end{equation}$$
so $\ord{\tpl{g,h}}$ divides $l$. Now, suppose that $\tpl{g,h}^d=\tpl{e_G,e_H}$ for some $d\in\N^+$; it suffices to show that $l\leq d$. Note that $g^d=e_G$ and $h^d=e_H$, so $\ord{g}$ and $\ord{h}$ both divide $d$. But $l$ is the <i>least</i> common multiple of $\ord{g}$ and $\ord{h}$, so $l\divides d$ and hence $l\leq d$.
* Observe that $\l(\phi\l(g\r)\r)^\ord{g}=\phi\l(g^\ord{g}\r)=\phi\l(e\r)=e$, so $\ord{\phi\l(g\r)}$ divides $\ord{g}$. If $\phi$ is an isomorphism, then $\phi^{-1}$ is a homomorphism and hence $\ord{\phi^{-1}\l(\phi\l(g\r)\r)}$ divides $\ord{\phi\l(g\r)}$, from which the result follows.<span style="float:right;">$\blacksquare$</span>
