---
mathLink: $V\iso W$ $\Leftrightarrow$ $\dim V=\dim W$ (finite-dim.)
---

<div class="topSpace"></div>

Date Created: 29/05/2022 17:53:10
Tags: #Proposition #Topics/Linear_Algebra

Proved by: [[Existence of unique linear map via action on basis vectors]], [[Image of linear map is spanned by image of spanning set]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ and $W$ be finite-dimensional $K$-vector spaces. Then $V\iso W$ iff $\dim V=\dim W$._

```

_Proof_. Set $n\coloneqq\dim V$ and $m\coloneqq\dim W$, and let $\mc{B}\coloneqq\l\{e_1,\dots,e_n\r\}$ and $\mc{C}\coloneqq\l\{f_1,\dots,f_n\r\}$ be bases for $V$ and $W$, respectively.
* ($\Rightarrow$): Let $T:V\to W$ be a linear isomorphism; we claim that $\mc{C}\coloneqq\l\{T\l(e_1\r),\dots,T\l(e_n\r)\r\}$ is a basis for $W$, so $\dim V=n=\dim W$. Indeed, the linear dependence $\sum_{i=1}^{n}\alpha_iT\l(e_i\r)=0$ implies that $T\l(\sum_{i=1}^{n}\alpha_ie_i\r)=0$, but then $\sum_{i=1}^{n}\alpha_ie_i=0$ since $T$ is injective. But then $\alpha_i=0$ for all $1\leq i\leq n$, so $\mc{C}$ is linearly independent. To show that $\span\mc{C}=W$, take $w\in W$. Since $T$ is surjective, $w=T\l(v\r)$ for some $v=\sum_{i=1}^{n}\alpha_ie_i\in V$ and hence
$$\begin{equation}
    w=T\l(\sum_{i=1}^{n}\alpha_ie_i\r)=\sum_{i=1}^{n}\alpha_iT\l(e_i\r)\in\span\mc{C}.
\end{equation}$$

* ($\Leftarrow$): Since $n=\dim V=\dim W$, there exists a (unique) linear map $T:V\to W$ such that $T\l(e_i\r)=f_i$ for all $1\leq i\leq n$; we claim that $T$ is invertible. Indeed, $T$ is injective since if $T\l(e_i\r)=T\l(e_j\r)$, then $f_i=f_j$ which implies that $i=j$. For surjectivity, compute
$$\begin{equation}
    \im T=\span\im_T\mc{B}=\span\l\{T\l(e_1\r),\dots,T\l(e_n\r)\r\}=\span\l\{f_1,\dots,f_n\r\}=\span\mc{C}=W.\qedin
\end{equation}$$
