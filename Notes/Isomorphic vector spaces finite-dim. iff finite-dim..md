---
custom_alias: $V\iso W$ $\Rightarrow$ ($\dim V<\infty\Leftrightarrow\dim W<\infty$)
---

<br />
<br />

Date Created: 28/05/2022 16:37:33
Tags: #Proposition #Closed

Proved by: [[Image of linear map is spanned by image of spanning set]], [[Inverse of linear map is linear]], [[Dimension Theorem]], [Linear map $T$ is injective $\Leftrightarrow$ $\ker T=\l\{0\r\}$](Linear%20map%20is%20injective%20iff%20kernel%20vanishes.md)
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $T:V\to W$ be an invertible linear map between vector spaces $V$ and $W$ over some field $K$. Then $V$ is finite-dimensional iff $W$ is finite-dimensional, in which case $\dim V=\dim W$._

```

_Proof_. Suppose $V$ is finite-dimensional and let $\mc{B}\coloneqq\l\{e_1,\dots,e_n\r\}\subseteq V$ be a basis thereof; it suffices to show that $W$ has a finite spanning set. To this end, observe that
$$\begin{equation}
    \begin{aligned}
        W&=\im T && T\textrm{ is surjective} \\
        &=\span\l(\im_T\mc{B}\r) && \span\mc{B}=V \\
        &=\span\l\{T\l(e_1\r),\dots,T\l(e_n\r)\r\}. && \textrm{Definition of $\im_T\mc{B}$}
    \end{aligned}
\end{equation}$$
Conversely, suppose $W$ is finite-dimensional. Since $T$ is an invertible linear map, we see that $T^{-1}:W\to V$ is linear too. Thus, letting $\mc{C}\coloneqq\l\{f_1,\dots,f_m\r\}\subseteq W$ be a basis of $W$, an entirely symmetric argument applies here:
$$\begin{equation}
    \begin{aligned}
        V&=\im T^{-1} && T^{-1}\textrm{ is surjective} \\
        &=\span\l(\im_{T^{-1}}\mc{C}\r) && \span\mc{C}=W \\
        &=\span\l\{T^{-1}\l(f_1\r),\dots,T^{-1}\l(f_m\r)\r\}. && \textrm{Definition of $\im_{T^{-1}}\mc{C}$}
    \end{aligned}
\end{equation}$$
Now suppose that both $V$ and $W$ are finite-dimensional. Since $T$ is both injective and surjective, we have
$$\begin{align}
    \dim V&=\dim\ker T+\dim\im T && \textrm{Dimension Theorem} \\
    &=\dim\im T && \dim\ker T=0 \\
    &=\dim W. && \im T=W\qedin
\end{align}$$
