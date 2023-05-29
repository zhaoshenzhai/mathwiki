---
mathLink: $V\iso V^{\dual\dual}$ (finite-dim.)
---

<div class="topSpace"></div>

Date Created: 01/02/2023 15:04:52
Tags: #Type/Proposition #Topic/Linear_Algebra

Proved by: [[Linear map between vector spaces of same dimension is injective iff surjective]], [[Basis Extension Theorem]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $V$ be a finite-dimensional $K$-vector space. Then the map $\phi:V\to V^{\dual\dual}:v\mapsto\hat{v}$ where $\hat{v}:V^\dual\to K:\omega\mapsto\omega\l(v\r)$ is a linear isomorphism.

```

<b>Remark.</b> This shows that $V\iso V^{\dual\dual}$ naturally; that is, there exists a linear isomorphism $\phi:V\to V^{\dual\dual}$ that does not depend on a choice of basis. This is contrasted by $V\iso V^\dual$, where the isomorphism here is <i>not</i> natural unless additional structure is imposed.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Firstly, $\phi$ is linear since for all $v_1,v_2\in V$ and $\lambda\in K$, we have
$$\begin{equation}
    \phi\l(\lambda v_1+v_2\r)\l(\omega\r)=\omega\l(\lambda v_1+v_2\r)=\lambda\omega\l(v_1\r)+\omega\l(v_2\r)=\lambda\phi\l(v_1\r)\l(\omega\r)+\phi\l(v_2\r)\l(\omega\r)=\l[\lambda\phi\l(v_1\r)+\phi\l(v_2\r)\r]\l(\omega\r)
\end{equation}$$
for all $\omega\in V^\dual$. To show that $\phi$ is an isomorphism, it suffices to show that it is injective since
$$\begin{equation}
    \dim V^{\dual\dual}=\dim V^\dual=\dim V\eqqcolon n.
\end{equation}$$
Take $v\in\ker\phi$, so $\phi\l(v\r)=0$ and hence $\phi\l(v\r)\l(\omega\r)=\omega\l(v\r)=0$ for all $\omega\in V^\dual$. Suppose that $v\neq0$, so we may extend $\l\{v\r\}$ to a basis $\mc{B}_v\coloneqq\l\{v,e_2,\dots,e_n\r\}$ for $V$. Let $\mc{B}_v^\dual\coloneqq\l\{\psi,\epsilon_2,\dots,\epsilon_n\r\}$ be the dual basis of $\mc{B}_v$, so $\psi\l(v\r)=1$. But $\psi\in V^\dual$, a contradiction.<span style="float:right;">$\blacksquare$</span>
