---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 13/09/2023 17:24:38
Tags: #Type/Theorem #In_Progress

Proved by: [[Characterizations of continuity (metric)]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Carathéodory’s Extension Theorem).

Let $\tpl{X,\mc{A}}$ be a measurable set. Every $\sigma$-finite premeasure $\mu$ on $\mc{A}$ admits a unique extension to a measure on $\gen{\mc{A}}_\sigma$.

```

<i>Proof.</i> It suffices to show that the induced outer measure $\mu^\ast$ is finitely-additive on $\gen{\mc{A}}_\sigma$, for then since $\l.\mu^\ast\r|_\mc{A}=\mu$ is a premeasure, it would be countably supadditive and hence countably additive since $\mu^\ast$ is already countably subadditive. To this end, we define a pseudo-metric $d$ on $\pow\l(X\r)$ by $d\l(A,B\r)\coloneqq\mu^\ast\!\l(A\symdiff B\r)$.
* Recall that $\tpl{\pow\l(X\r),\symdiff}$ is an abelian group with $\em$ as its identity and with $A\symdiff A=\em$ for all $A\in\pow\l(X\r)$, where $A\symdiff B\coloneqq\l(A\comp B\r)\cup\l(B\comp A\r)=\l(A\cup B\r)\comp\l(B\cup A\r)$.
* We may w.l.o.g. assume that $\mu\l(X\r)<\infty$. For the general $\sigma$-finite case, partition $X=\bigsqcup_{n\in\N}X_n$ with each $\mu\l(X_n\r)<\infty$. Then the extension of $\mu$ to $\gen{\mc{A}}_\sigma$ follows from that of $\gen{\l.\mc{A}\r|_{X_n}}_\sigma$ for each $n$.

The map $d$ is clearly positive (but not definite!) and symmetric, and the triangle inequality holds since $A\symdiff C=\l(A\symdiff B\r)\symdiff\l(B\symdiff C\r)\subseteq\l(A\symdiff B\r)\cup\l(B\symdiff C\r)$, so it follows from monotonicity and subadditivity that $d\l(A,B\r)=\mu^\ast\!\l(A\symdiff B\r)\leq\mu^\ast\!\l(\l(A\symdiff B\r)\cup\l(B\symdiff C\r)\r)\leq\mu^\ast\!\l(A\symdiff B\r)+\mu^\ast\!\l(B\symdiff C\r)=d\l(A,B\r)+d\l(B,C\r)$. Set $\mc{M}\coloneqq\bar{\mc{A}}$. We claim that $\mc{M}$ is a $\sigma$-algebra and $\mu^\ast$ is finitely-additive on $\mc{M}$.
* First, note that $\mu^\ast:\pow\l(X\r)\to\l[0,\infty\r)$ is $1$-Lipschitz. Indeed, this follows from the fact that $x\mapsto d\l(x,x_0\r)$ is always $1$-Lipschitz and that $\mu^\ast\!\l(A\r)=d\l(A,\em\r)$.
* Next, the complementation map $\l(\slot\r)^c:A\mapsto A^c$ is an isometry since $A\symdiff B=A^c\symdiff B^c$. This shows that $\mc{M}$ is closed under complements since if $A\in\mc{M}$ and $A_n\to A$ is a sequence in $\mc{A}$, then $A_n^c\to A^c$ by continuity of $\l(\slot\r)^c$. Thus $A^c\in\mc{M}$ too, as desired.
* Similarly, the union map $\cup:\tpl{A,B}\mapsto A\cup B$ is $1$-Lipschitz, w.r.t. the metric $d^2\in\pow\l(X\r)^2$ defined by $d^2\!\l(\tpl{A_1,B_1},\tpl{A_2,B_2}\r)\coloneqq d\l(A_1,A_2\r)+d\l(B_1,B_2\r)$. Indeed, this follows from the fact that $\l(A_1\cup B_1\r)\symdiff\l(A_2\cup B_2\r)\subseteq\l(A_1\symdiff A_2\r)\cup\l(B_1\symdiff B_2\r)$. This shows that $\mc{M}$ is closed under finite unions since $A,B\in\mc{M}$ and $A_n\to A$ and $B_n\to B$ are sequences in $\mc{A}$, then $A_n\cup B_n\to A\cup B$ by continuity of $\cup$. Thus $A\cup B\in\mc{M}$ too, as desired.

This shows that $\mu^\ast$ is finitely-additive on the algebra $\mc{M}$. Indeed, if $A,B\in\mc{M}$ are disjoint and $A_n\to A$ and $B_n\to B$ are sequences in $\mc{A}$, then $A_n\cup B_n\to A\sqcup B$ and hence $\mu^\ast\!\l(A_n\cup B_n\r)\to\mu^\ast\!\l(A\sqcup B\r)$. But $\mu^\ast\!\l(A_n\cup B_n\r)=\mu\l(A_n\cup B_n\r)\approx_{\epsilon_n}\mu\l(A_n\r)+\mu\l(B_n\r)$ because $A_n\cap B_n\to A\cap B=\em$ and hence $\mu\l(A_n\cap B_n\r)\to0$, so
$$\begin{equation}
    \mu^\ast\!\l(A\sqcup B\r)\approx_{\epsilon_n}\mu^\ast\!\l(A_n\cup B_n\r)\approx_{\epsilon_n}\mu^\ast\!\l(A_n\r)+\mu^\ast\!\l(B_n\r)\approx_{\epsilon_n}\mu^\ast\!\l(A\r)+\mu^\ast\!\l(B\r).
\end{equation}$$
Finally, we show that $\mc{M}$ is a $\sigma$-algebra. Let $\l\{B_n\r\}_{n\in\N}\in\mc{M}$ be disjoint and, for all $n\in\N$, let $A_n\in\mc{A}$ be such that $A_n\approx_{\epsilon/2^{n+1}}B_n$. Since $\mu^\ast$ is countably subadditive, we see that $d\l(\bigcup_{n\in\N}A_n,\bigcup_{n\in\N}B_n\r)=\mu^\ast\!\l(\bigcup_{n\in\N}\l(A_n\symdiff B_n\r)\r)\leq\sum_{n\in\N}\mu^\ast\!\l(A_n\symdiff B_n\r)=\sum_{n\in\N}d\l(A_n,B_n\r)=\epsilon$. We claim that $\bigcup_{n\in\N}A_n\in\mc{M}$, for then $\bigcup_{n\in\N}B_n\in\mc{B}$ too. Indeed, by disjointification we may assume that the collection $\l\{A_n\r\}$ is pairwise disjoint. With $A\coloneqq\bigsqcup_{n\in\N}A_n$, we have that
$$\begin{equation}
    d\l(\bigsqcup_{n<N}A_n,A\r)=\mu^\ast\!\l(\bigsqcup_{n\geq N}A_n\r)\leq\sum_{n\geq N}\mu^\ast\l(A_n\r)\rightarrow0
\end{equation}$$
