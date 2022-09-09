---
mathLink: $A$ invertible $\Leftrightarrow$ $A\v{x}=\v{b}$ has a unique solution
---

<div class="topSpace"></div>

Date Created: 08/04/2022 03:28:32
Tags: #Proposition

Lemma: _Not Applicable_
Proved by: [[Basic properties of matrix operations]], [[Solutions of a linear system decompose as sum of particular and null]], [[Linear map is injective iff kernel vanishes]], [[Linear map between vector spaces of same dimension is injective iff surjective]], [[Matrix invertible iff left-multiplication invertible]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider an $n\times n$ linear system $A\v{x}=\v{b}$ for some fixed $n\in\N^\ast$. Then $A\in\mat{n}{K}$ is invertible iff the system has a unique solution $\v{s}=A^{-1}\v{b}$._

```

_Proof_.
* ($\Rightarrow$): Firstly, observe that $A^{-1}\v{b}$ is a solution of the system $A\v{x}=\v{b}$ since
$$\begin{equation}
    \begin{aligned}
        A\l(A^{-1}\v{b}\r)&=\l(AA^{-1}\r)\v{b} && \textrm{Associativity of matrix multiplication} \\
        &=I\v{b} && \textrm{Definition of inverse matrix} \\
        &=\v{b}. && \textrm{Identity matrix is the identity of matrix multiplication}
    \end{aligned}
\end{equation}$$
To show that this is the only solution, observe that if $A\v{s}=\v{b}$ for some $\v{s}\in K^n$, then, left-multiplying both sides by $A^{-1}$, we have that
$$\begin{equation}
    \begin{aligned}
        A^{-1}\l(A\v{s}\r)&=A^{-1}\v{b} && \textrm{Substitution} \\
        \l(A^{-1}A\r)\v{s}&=A^{-1}\v{b} && \textrm{Associativity of matrix multiplication} \\
        I\v{s}&=A^{-1}\v{b} && \textrm{Definition of inverse matrix} \\
        \v{s}&=A^{-1}\v{b}. && \textrm{Identity matrix is the identity of matrix multiplication}
    \end{aligned}
\end{equation}$$

* ($\Leftarrow$): Conversely, let $\v{s}\in K^n$ be the unique solution of $A\v{x}=\v{b}$. Observe then that
$$\begin{equation}
    \l\{\v{s}\r\}=\l\{\v{s}\r\}+\nullsp A,
\end{equation}$$
but this is only possible if $\nullsp A=\l\{0\r\}$. Thus $\ker L_A=\l\{0\r\}$ and so $L_A$ is injective. But then $L_A$ is invertible, so $A$ is invertible too.<span style="float:right;">$\blacksquare$</span>
