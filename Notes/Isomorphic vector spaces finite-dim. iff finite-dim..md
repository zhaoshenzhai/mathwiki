---
mathLink: $V\iso W$ $\Rightarrow$ ($\dim V<\infty\Leftrightarrow\dim W<\infty$)
---

<div class="topSpace"></div>

Date Created: 28/05/2022 16:37:33
Tags: #Proposition

Proved by: [[Image of linear map is spanned by image of spanning set]], [[Inverse of linear map is linear]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ and $W$ be isomorphic vector spaces over some field $K$. Then $V$ is finite-dimensional iff $W$ is finite-dimensional._

```

_Proof_. Since $V\iso W$, there exists an invertible linear map $T:V\to W$. Note that $T^{-1}$ is also linear.
* ($\Rightarrow$): Suppose $V$ is finite-dimensional and let $\mc{B}\coloneqq\l\{e_1,\dots,e_n\r\}\subseteq V$ be a basis thereof; it suffices to show that $W$ has a finite spanning set. To this end, observe that
$$\begin{equation}
    \begin{aligned}
        W&=\im T && T\textrm{ is surjective} \\
        &=\span\l(\im_T\mc{B}\r) && \span\mc{B}=V \\
        &=\span\l\{T\l(e_1\r),\dots,T\l(e_n\r)\r\}. && \textrm{Definition of $\im_T\mc{B}$}
    \end{aligned}
\end{equation}$$

* ($\Leftarrow$): Conversely, suppose $W$ is finite-dimensional and let $\mc{C}\coloneqq\l\{f_1,\dots,f_m\r\}\subseteq W$ be a basis thereof. Since $T^{-1}:W\to V$ is also linear, an entirely symmetric argument applies here:
$$\begin{align}
    V&=\im T^{-1} && T^{-1}\textrm{ is surjective} \\
    &=\span\l(\im_{T^{-1}}\mc{C}\r) && \span\mc{C}=W \\
    &=\span\l\{T^{-1}\l(f_1\r),\dots,T^{-1}\l(f_m\r)\r\}. && \textrm{Definition of $\im_{T^{-1}}\mc{C}$}\qedin
\end{align}$$
