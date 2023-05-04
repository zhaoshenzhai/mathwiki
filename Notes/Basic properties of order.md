<div class="topSpace"></div>

Date Created: 04/05/2023 18:37:34
Tags: #Proposition #Topics/Group_Theory

Proved by: [[Ring of integers is a EUD]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $G$ be a group and take $g\in G$ of finite order. Then the following properties hold._
* _$\ord{g}=\ord{\gen{g}}$._
* _For all $n\in\N^+$, we have $g^n=e$ iff $\ord{g}$ divides $n$._
* _For all $n\in\N^+$, we have $\ord{g^n}=\lcm\l(n,\ord{g}\r)/n=\ord{g}/\gcd\l(n,\ord{g}\r)$._
* _If $H$ is a group and $h\in H$ is of finite order, then $\ord{\tpl{g,h}}=\lcm\l(\ord{g},\ord{h}\r)$._

```

**Remark.** For a finite group $G$, this shows that $G$ is cyclic iff there exists some $g\in G$ such that $\ord{g}=\ord{G}$.

* If $G$ is cyclic, then there exists some $g\in G$ such that $\gen{g}=G$. Thus $\ord{\gen{g}}=\ord{G}$, but since $\ord{g}=\ord{\gen{g}}$, we see that $\ord{g}=\ord{G}$.
* If $\ord{g}=\ord{G}$, then, since $\ord{g}=\ord{\gen{g}}$, we see that $\ord{\gen{g}}=\ord{G}$. Since $\gen{g}\subseteq G$ and $G$ have the same number of elements, they must coincide.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_.
* Consider the function $\phi:\gen{g}\to\l\{0,\dots,\ord{g}-1\r\}$ mapping $g^n\mapsto r$ where $0\leq r<n$ is the unique integer furnished by the Division Algorithm applied to $n$ and $\ord{g}$ such that $n=q\ord{g}+r$ for some unique $q\in\Z$. We claim that $\phi$ is a bijection, which proves that $\ord{\gen{g}}=\ord{g}$. Indeed, take $g^n,g^m\in\gen{g}$ such that $\phi\l(g^n\r)=\phi\l(g^m\r)$. Then $n=q_1\ord{g}+r$ and $m=q_2\ord{g}+r$ for some unique $q_1,q_2\in\Z$, which implies that
$$\begin{equation}
    n=q_1\ord{g}+m-q_2\ord{g}=\l(q_1-q_2\r)\l|g\r|+m
\end{equation}$$
Observe then that $g^n=g^{\l(q_1-q_2\r)\ord{g}}g^m=e^{q_1-q_2}g^m=g^m$, as desired. To show that $\phi$ is surjective, take $r\in\l\{0,\dots,\ord{g}-1\r\}$ and observe that $r=0\ord{g}+r$. Thus, by the Division Algorithm, we see that $\phi\l(g^r\r)=r$.
* If $g^n=e$, the Division Algorithm applied to $n$ and $\ord{g}$ furnishes unique integers $q,r\in\Z$ with $0\leq r<\ord{g}$ such that $n=q\ord{g}+r$. Observe then that
$$\begin{equation}
    e=g^n=g^{q\ord{g}+r}=g^{q\ord{g}}g^r=e^qg^r=g^r.
\end{equation}$$
Since $g^r=e$ and $0\leq r<\ord{g}$, this forces $r=0$ and hence $\ord{g}$ divides $n$. Conversely, there exists some $l\in\Z$ such that $\ord{g}l=n$ and so $g^n=g^{\ord{g}l}=e^l=e$.
* The second equality follows from duality. It suffices to show that $n\ord{g^n}=\lcm\l(n,\ord{g}\r)$, for since $\lcm\l(n,\ord{g}\r)$ is a multiple of $n$, we may divide by $n$ to obtain the desired equality. Obviously $n$ divides $n\ord{g^n}$, and that $\ord{g}$ divides $n\ord{g^n}$ follows from that $g^{n\ord{g^n}}=\l(g^n\r)^{\ord{g^n}}=e$. To show that $n\ord{g^n}$ is the least common multiple, suppose that $m\in\Z$ is another common multiple of $n$ and $\ord{g}$, so $n$ and $\ord{g}$ both divide $m$. Then $m=kn$ for some $k\in\Z$ and, since $\ord{g}$ divides $m$, we have $\l(g^n\r)^k=g^{nk}=g^m=e$. But then $\ord{g^n}$ divides $k$, so there exists some $l\in\Z$ such that $k=l\ord{g^n}$. Thus $m=kn=ln\ord{g^n}$, so $n\ord{g^n}$ divides $m$.
* Let $l\coloneqq\lcm\l(\ord{g},\ord{h}\r)$ and observe that
$$\begin{equation}
    \tpl{g,h}^l=\tpl{g^l,h^l}=\tpl{g^{\ord{g}\cdot l/\ord{g}},g^{\ord{h}\cdot l/\ord{h}}}=\tpl{e_G^{l/\ord{g}},e_H^{l/\ord{h}}}=\tpl{e_G,e_H},
\end{equation}$$
so $\ord{\tpl{g,h}}$ divides $l$. Now, suppose that $\tpl{g,h}^d=\tpl{e_G,e_H}$ for some $d\in\N^+$; it suffices to show that $l\leq d$. Note that $g^d=e_G$ and $h^d=e_H$, so $\ord{g}$ and $\ord{h}$ both divide $d$. But $l$ is the _least_ common multiple of $\ord{g}$ and $\ord{h}$, so $l\divides d$ and hence $l\leq d$.<span style="float:right;">$\blacksquare$</span>
