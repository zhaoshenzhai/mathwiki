---
mathLink: $V\iso K^n$ ($\dim V=n$)
---

<div class="topSpace"></div>

Date Created: 15/05/2022 22:49:38
Tags: #Type/Proposition #Topic/Linear_Algebra

Proved by: [[Unique Representation Theorem (Basis)]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition (Coordinate Representation).

Let $V$ be a finite-dimensional $K$-vector space, say with $n\coloneqq\dim V$, and fix a choice of basis $\mc{B}\coloneqq\l\{b_1,\dots,b_n\r\}$ of $V$. Then the coordinate representation
$$\begin{equation}
    \phi_\mc{B}:V\to K^n\ \ \ \ \textrm{\it{mapping}}\ \ \ \ v\mapsto\l[v\r]_\mc{B},
\end{equation}$$
where $\l[v\r]_\mc{B}\coloneqq\tpl{\alpha_1,\dots,\alpha_n}\in K^n$ is the unique tuple such that $v=\sum_{i=1}^{n}\alpha_ib_i$, is a linear isomorphism.

```

<b>Remark.</b> In particular, we have $V\iso K^n$. However, it is <i>not</i> a natural isomorphism as a choice of basis is required.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> It is obvious that $\phi_\mc{B}$ is invertible, so it suffices to show that it is a linear map. Take $v_1,v_2\in V$ and $\lambda\in K$, so there exist unique coefficients $\alpha_1,\dots,\alpha_n\in K$ and $\beta_1,\dots,\beta_n\in K$ such that $v_1=\sum_{i=1}^n\alpha_ib_i$ and $v_2=\sum_{i=1}^{n}\beta_ib_i$. Observe then that
$$\begin{equation}
    \lambda v_1+v_2=\lambda\sum_{i=1}^n\alpha_ib_i+\sum_{i=1}^n\beta_ib_i=\sum_{i=1}^n\l(\lambda\alpha_i+\beta_i\r)b_i,
\end{equation}$$
and since $\gamma_i\coloneqq\lambda\alpha_i+\beta_i$ are the unique set of coefficients such that $\lambda v_1+v_2=\sum_{i=1}^n\gamma_ib_i$, we see that
$$\begin{equation}
    \phi_\mc{B}\l(\lambda v_1+v_2\r)=\tpl{\gamma_1,\dots,\gamma_n}=\tpl{\lambda\alpha_1+\beta_1,\dots,\lambda\alpha_n+\beta_n}=\lambda\tpl{\alpha_1,\dots,\alpha_n}+\tpl{\beta_1,\dots,\beta_n}=\lambda\phi_\mc{B}\l(v_1\r)+\phi_\mc{B}\l(v_2\r).\qedin
\end{equation}$$
