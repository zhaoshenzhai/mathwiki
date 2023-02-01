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

_Proof_.
* ($\Rightarrow$): Let $n\coloneqq\dim V$ and $m\coloneqq\dim W$, so $K^n\iso V\iso W\iso K^m$ and hence $n=m$.

* ($\Leftarrow$): Let $\mc{B}\coloneqq\l\{e_1,\dots,e_n\r\}$ and $\mc{C}\coloneqq\l\{f_1,\dots,f_n\r\}$ be bases for $V$ and $W$, respectively, where $n\coloneqq\dim V=\dim W$. Thus there exists a (unique) linear map $T:V\to W$ such that $T\l(e_i\r)=f_i$ for all $1\leq i\leq n$; we claim that $T$ is invertible. Indeed, $T$ is injective since if $T\l(e_i\r)=T\l(e_j\r)$, then $f_i=f_j$ which implies that $i=j$. For surjectivity, compute
$$\begin{align}
    \im T&=\span\im_T\mc{B} && \span\mc{B}=V \\
    &=\span\l\{T\l(e_1\r),\dots,T\l(e_n\r)\r\} && \textrm{Definition of $\im_T\!\mc{B}$} \\
    &=\span\l\{f_1,\dots,f_n\r\} && \textrm{Definition of $T$} \\
    &=\span\mc{C} && \textrm{Definition of $\mc{C}$} \\
    &=W. && \textrm{$\mc{C}$ is a basis for $W$}\qedin
\end{align}$$
