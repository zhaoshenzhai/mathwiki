---
mathLink: $A$ invertible $\Leftrightarrow$ $A\v{x}=\v{b}$ has a unique solution
---

<br />
<br />

Date Created: 08/04/2022 03:28:32
Tags: #Proposition #Closed

Proved by: [[Basic properties of matrix operations]], [Solutions of $A\v{x}=\v{b}$ decompose as $\l\{\v{s}_p\r\}+\nullsp A$ for any $A\v{s}_p=\v{b}$](Solutions%20of%20a%20linear%20system%20decompose%20as%20sum%20of%20particular%20and%20null.md), [Linear map $T$ is injective $\Leftrightarrow$ $\ker T=\l\{0\r\}$](Linear%20map%20is%20injective%20iff%20kernel%20vanishes.md), [Linear map $V\to W$ with $\dim V=\dim W<\infty$ is injective $\Leftrightarrow$ surjective](Linear%20map%20between%20vector%20spaces%20of%20same%20dimension%20is%20injective%20iff%20surjective.md), [$A$ invertible $\Leftrightarrow$ $L_A$ invertible](Matrix%20invertible%20iff%20left-multiplication%20invertible.md)
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
