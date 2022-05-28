---
alias: auto_aliasing
---

<br />
<br />

Date Created: 28/05/2022 17:05:24
Tags: #Proposition #Closed

Proved by: [Invertible linear map $V\to W$ $\Rightarrow$ ($\dim V<\infty\Leftrightarrow\dim W<\infty$ and $\dim V=\dim W$)](Invertible%20linear%20map%20domain%20finite%20dim.%20iff%20codomain%20equal%20finite%20dim..md), [$\l[\id_V\r]_\mc{B}=I_n$ ($\dim V=n$)](Identity%20function%20on%20a%20vector%20space%20is%20represented%20by%20the%20identity%20matrix.md), [Composition of linear maps $\Leftrightarrow^\textrm{repr.}_\textrm{bases}$ matrix product of representations](Composition%20of%20linear%20maps%20repr%20under%20basis%20matrix%20product%20of%20representations.md), [[Existence of unique linear map via action on basis vectors]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ and $W$ be finite-dimensional vector spaces over some field $K$ with bases $\mc{B}$ and $\mc{C}$, respectively. Then $T$ is invertible iff_ $\l[T\r]_\mc{B}^\mc{C}$ _is inverible, in which case_ $\l(\l[T\r]_\mc{B}^\mc{C}\r)^{-1}=\l[T^{-1}\r]_\mc{C}^\mc{B}$_._

```

_Proof_.
* ($\Rightarrow$): Since $T$ is an invertible linear map between finite-dimensional spaces, we have $n\coloneqq\dim V=\dim W$. Observe then that
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

* ($\Leftarrow$): Conversely, let $A\coloneqq\l[T\r]_\mc{B}^\mc{C}$ and let $B\coloneqq\l[b_{ji}\r]\in\mat{n\times n}{K}$ be the inverse of $A$. Letting $\mc{B}\coloneqq\l\{e_1,\dots,e_n\r\}$ and $\mc{C}\coloneqq\l\{f_1,\dots,f_n\r\}$, we may consider the linear map $U:W\to V$ defined by
$$\begin{equation}
    U\l(f_i\r)\coloneqq\sum_{j=1}^nb_{ji}e_j
\end{equation}$$
for all $1\leq i\leq n$. Thus, by definition of the matrix representation of linear maps, we see that $\l[U\r]_\mc{C}^\mc{B}=B$. It remains to show that $U=T^{-1}$; to this end, observe that
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
