---
mathLink: Subspaces $U\subseteq V$ with $\dim V<\infty$ have complements
---

<div class="topSpace"></div>

Date Created: 14/05/2022 11:16:58
Tags: #Type/Proposition #Topic/Linear_Algebra

Proved by: [[Dimension of subspace]], [[Basis Extension Theorem]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $V$ be a finite-dimensional vector space over some field $K$ and consider a linear subspace $U\subseteq V$. Then there exists a linear subspace $W\subseteq V$ such that $V=U\oplus W$.

```

<i>Proof.</i> Since $U$ is a subspace of a finite-dimensional vector space, we see that $U$ is finite-dimensional too. Thus we may let $\mc{B}_U\coloneqq\l\{b_1,\dots,b_k\r\}$ be a basis for $U$, and since it is linearly independent, we may extend this to a basis $\mc{B}_V\coloneqq\mc{B}_U\cup\l\{b_{k+1},\dots,b_n\r\}$ of $V$. Let $W\coloneqq\span\l\{b_{k+1},\dots,b_n\r\}$; we claim that $V=U\oplus W$.
* ($V=U+W$): Take $v\in V$, so there exists $\alpha_1,\dots,\alpha_n\in K$ such that
$$\begin{equation}
    v=\sum_{i=1}^n\alpha_ib_i=\underbrace{\sum_{i=1}^k\alpha_ib_i}_{\in U}+\underbrace{\sum_{i=k+1}^n\alpha_ib_i}_{\in W},
\end{equation}$$
so $v=u+w$ for $u\coloneqq\sum_{i=1}^k\alpha_ib_i\in U$ and $w\coloneqq\sum_{i=k+1}^n\alpha_ib_i\in W$.

* ($U\cap W=\l\{0\r\}$): Take $v\in U\cap W$, so $v=\sum_{i=1}^k\beta_ib_i$ and $v=\sum_{i=k+1}^n\gamma_ib_i$ for some $\beta_1,\dots,\beta_k,\gamma_{k+1},\dots,\gamma_n\in K$. Observe then that
$$\begin{equation}
    \sum_{i=1}^k\beta_ib_i-\sum_{\mathclap{i=k+1}}^n\gamma_ib_i=0,
\end{equation}$$
and since $\mc{B}_V$ is linearly independent, this forces $\beta_1=\cdots\beta_k=\gamma_{k+1}=\cdots=\gamma_n=0$. Thus $v=0$.<span style="float:right;">$\blacksquare$</span>

---

**Remark.** Note that the complement $W$ is not necessarily unique. For instance, consider $V\coloneqq\R^3$ and let $U\subseteq V$ be a plane (passing through the origin).

![[Images/2022-05-14_114740/image.svg|320]]

Then $\mc{B}_U=\l\{b_1,b_2\r\}$ is a set of linearly independent vectors lying in the plane, so, to extend this to a basis $\mc{B}_V=\mc{B}_U\cup\l\{b_3\r\}$ of $\R^3$, we may let $b_3$ to be <i>any</i> vector not lying in the plane. That is, we may let $W=\span\l\{b_3\r\}$ to be any line in $\R^3$ (passing through the origin) not contained in the plane. Clearly, there are infinitely-many such lines.<span style="float:right;">$\blacklozenge$</span>

