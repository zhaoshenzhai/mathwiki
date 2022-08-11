---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 28/05/2022 17:05:24
Tags: #Proposition #Closed

Proved by: [$V\iso W$ $\Leftrightarrow$ $\dim V=\dim W$ ($V,W$ finite-dim.)](Linearly%20isomorphic%20iff%20dimensions%20coincide%20(finite-dim.).md), [$\l[\id_V\r]_\mc{B}=I_n$ ($\dim V=n$)](Identity%20function%20on%20a%20vector%20space%20is%20represented%20by%20the%20identity%20matrix.md), [Composition of linear maps $\Leftrightarrow^\textrm{repr.}_\textrm{bases}$ matrix product of representations](Composition%20of%20linear%20maps%20repr%20under%20basis%20matrix%20product%20of%20representations.md), [$\Phi_\mc{B}^\mc{C}:\hom\l(V,W\r)\simto\mat{m\times n}{K}$ ($\dim V=n$, $\dim W=m$)](Linear%20isomorphism%20between%20linear%20maps%20and%20matrices.md)
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ and $W$ be finite-dimensional vector spaces over some field $K$ with bases $\mc{B}$ and $\mc{C}$, respectively, and consider a linear map $T:V\to W$. Then $T$ is invertible iff_ $\l[T\r]_\mc{B}^\mc{C}$ _is invertible, in which case_ $\l(\l[T\r]_\mc{B}^\mc{C}\r)^{-1}=\l[T^{-1}\r]_\mc{C}^\mc{B}$_._

```

_Proof_.
* ($\Rightarrow$): Since $T:V\to W$ is an invertible linear map, we see that $V\iso W$ and thus $n\coloneqq\dim V=\dim W$. Observe then that
$$\begin{equation}
    \begin{aligned}
        I_n&=\l[\id_V\r]_\mc{B} \\
        &=\l[T^{-1}\circ T\r]_\mc{B} \\
        &=\l[T^{-1}\r]_\mc{C}^\mc{B}\l[T\r]_\mc{B}^\mc{C}
    \end{aligned}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 
    \begin{aligned}
        I_n&=\l[\id_W\r]_\mc{C} && \textrm{$I$ is represented by $\id$} \\
        &=\l[T\circ T^{-1}\r]_\mc{C} && \textrm{Definition of $T^{-1}$} \\
        &=\l[T\r]_\mc{B}^\mc{C}\l[T^{-1}\r]_\mc{C}^\mc{B}. && \textrm{$\circ$ is represented by $\times$}
    \end{aligned}
\end{equation}$$

* ($\Leftarrow$): Conversely, if $A\coloneqq\l[T\r]_\mc{B}^\mc{C}$ is invertible, then $n\coloneqq\dim V=\dim W$ by definition. Let $B\in\mat{n\times n}{K}$ be the inverse of $A$ and let $U:W\to V$ be the unique linear map such that $\l[U\r]_\mc{C}^\mc{B}=B$. It suffices to show that $U=T^{-1}$. Observe that
$$\begin{equation}
    \begin{aligned}
        \l[U\circ T\r]_\mc{B}&=\l[U\r]_\mc{C}^\mc{B}\l[T\r]_\mc{B}^\mc{C} \\
        &=BA \\
        &=I_n \\
        &=\l[\id_V\r]_\mc{B}
    \end{aligned}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 
    \begin{aligned}
        \l[T\circ U\r]_\mc{C}&=\l[T\r]_\mc{B}^\mc{C}\l[U\r]_\mc{C}^\mc{B} && \textrm{$\circ$ is represented by $\times$} \\
        &=AB && \textrm{Substitution} \\
        &=I_n && B=A^{-1} \\
        &=\l[\id_W\r]_\mc{C}, && \textrm{$I$ is represented by $\id$}
    \end{aligned}
\end{equation}$$
so, since $\l[\slot\r]_\mc{B}$ and $\l[\slot\r]_\mc{C}$ are injective, we see that $U\circ T=\id_V$ and $T\circ U=\id_W$.<span style="float:right;">$\blacksquare$</span>
