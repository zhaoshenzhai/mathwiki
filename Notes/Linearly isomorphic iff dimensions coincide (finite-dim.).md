---
mathLink: $V\iso W$ $\Leftrightarrow$ $\dim V=\dim W$ ($V,W$ finite-dim.)
---

<div class="topSpace"></div>

Date Created: 29/05/2022 17:53:10
Tags: #Proposition

Proved by: [[Dimension Theorem]], [Linear map $T$ is injective $\Leftrightarrow$ $\ker T=\l\{0\r\}$](Linear%20map%20is%20injective%20iff%20kernel%20vanishes.md), [[Existence of unique linear map via action on basis vectors]], [Linear map $V\to W$ with $\dim V=\dim W<\infty$ is injective $\Leftrightarrow$ surjective](Linear%20map%20between%20vector%20spaces%20of%20same%20dimension%20is%20injective%20iff%20surjective.md), [[Image of linear map is spanned by image of spanning set]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ and $W$ be finite-dimensional vector spaces over some field $K$. Then $V\iso W$ iff $\dim V=\dim W$._

```

_Proof_.
* ($\Rightarrow$): Let $T:V\to W$ be an invertible linear map and observe that
$$\begin{equation}
    \begin{aligned}
        \dim V&=\dim\ker T+\dim\im T && \textrm{Dimension Theorem} \\
        &=\dim\im T && T\textrm{ is injective}\Rightarrow\ker T=\l\{0\r\} \\
        &=\dim W. && T\textrm{ is surjective}
    \end{aligned}
\end{equation}$$

* ($\Leftarrow$): Let $\mc{B}\coloneqq\l\{e_1,\dots,e_n\r\}$ and $\mc{C}\coloneqq\l\{f_1,\dots,f_n\r\}$ be bases for $V$ and $W$, respectively, where $n\coloneqq\dim V=\dim W$. Thus there exists a (unique) linear map $T:V\to W$ such that $T\l(e_i\r)=f_i$ for all $1\leq i\leq n$; we claim that $T$ is invertible, for which it suffices to show that $T$ is surjective. Compute
$$\begin{align}
    \im T&=\span\im_T\mc{B} && \span\mc{B}=V \\
    &=\span\l\{T\l(e_1\r),\dots,T\l(e_n\r)\r\} && \textrm{Definition of $\im_T\!\mc{B}$} \\
    &=\span\l\{f_1,\dots,f_n\r\} && \textrm{Definition of $T$} \\
    &=\span\mc{C} && \textrm{Definition of $\mc{C}$} \\
    &=W. && \textrm{$\mc{C}$ is a basis for $W$}\qedin
\end{align}$$
