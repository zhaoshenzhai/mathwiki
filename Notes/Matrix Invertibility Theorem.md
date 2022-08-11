<div class="topSpace"></div>

Date Created: 09/04/2022 09:43:00
Tags: #Theorem #Closed

Proved by: [$A$ invertible $\Leftrightarrow$ $L_A$ invertible](Matrix%20invertible%20iff%20left-multiplication%20invertible.md), [Linear map $V\to W$ with $\dim V=\dim W<\infty$ is injective $\Leftrightarrow$ surjective](Linear%20map%20between%20vector%20spaces%20of%20same%20dimension%20is%20injective%20iff%20surjective.md), [[Dimension Theorem]], [$A$ invertible $\Leftrightarrow$ $A\v{x}=\v{b}$ has a unique solution](Invertible%20coefficient%20matrix%20iff%20unique%20solution.md), [[Inverse of transpose is transpose of inverse]], [Rank of matrix in RREF is $|$pivot columns$|/|$non-zero rows$|$](Rank%20of%20matrix%20in%20RREF%20is%20number%20of%20pivot%20columns%20of%20non-zero%20rows.md), [Elementary matrices/operations have inverses of the same type](Elementary%20matrices%20slash%20operations%20have%20inverses%20of%20the%20same%20type.md), [[Product of invertible matrices is invertible]], [Homogeneous system $A\v{x}=\v{0}$ has only trivial solution $\Leftrightarrow$ columns of $A$ are linearly independent](Homogeneous%20linear%20system%20only%20trivial%20solution%20iff%20columns%20of%20coefficient%20matrix%20are%20linearly%20independent.md), [[Column space is spanned by columns of matrix]], [[Basic properties of matrix operations]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Theorem
title: Theorem (Invertible Matrix Theorem).

_Let $K$ be a field and consider a matrix $A\in\mat{n}{K}$. Then the following statements are equivalent:_
1. _$A$ is invertible._
2. _$L_A:K^n\to K^n$ is invertible._
    * _Equivalently: $L_A$ is injective; $L_A$ is surjective._
3. _$\rank A=n$._
    * _Equivalently: $\col A=K^n$; $\dim\col A=n$; $\nullsp A=\l\{0\r\}$; $\dim\nullsp A=0$._
4. _$A\sim I_n$._
    * _Equivalently: $A$ factors through elementary matrices._
5. _For all $\v{b}\in K^n$, the linear system $A\v{x}=\v{b}$ has a unique solution._
6. _The homogeneous linear system $A\v{x}=\v{0}$ has only the trivial solution._
7. _$A$ is left-invertible._
8. _$A$ is right-invertible._
9. _$A^\trans$ is invertible._

```

_Proof_. $1\Leftrightarrow2$, $1\Leftrightarrow5$, and $1\Leftrightarrow9$ are proven; see links above.
* ($2\Leftrightarrow3$): Observe that $L_A$ is injective iff $\ker L_A=\l\{0\r\}$; its equivalencies are proven by the Dimension Theorem.

* ($3\Rightarrow 4\Rightarrow1$): Since $\rank A$ is the number of pivot columns of $\rref A$ and $A\in\mat{n}{K}$, we see that $\rref A\in\mat{n}{K}$ and every column of thereof is a pivot column. This forces $\rref A=I_n$, so $A\sim I_n$. Conversely, if $A\sim I_n$, then there exist elementary matrices $E_1,\dots,E_k\in\mat{n}{K}$ for some $k\in\N$ such that
$$\begin{equation}
    A=\l(E_k\times\cdots\times E_1\r)\times I_n=E_k\times\cdots\times E_1;
\end{equation}$$
incidently, this proves the equivalency. Since each $E_i$ is invertible and products of invertible matrices are invertible, we see that $A$ is invertible.
* ($1\Rightarrow6\Rightarrow3$): The first implication follows from $1\Rightarrow5$ and the fact that $A\v{0}=\v{0}$. For the second, let $\v{a}_1,\dots,\v{a}_n$ be the columns of $A$ and observe that they are linearly independent. Since $\col A=\span\l\{\v{a}_1,\dots,\v{a}_n\r\}$, we see that $\dim\col A=n$. The result follows.
* ($1\Rightarrow7\Rightarrow6$): The first implication is trivial. For the second, let $B\in\mat{n}{K}$ be a left-inverse of $A$ and observe that
$$\begin{equation}
    \begin{aligned}
        A\v{x}&=\v{0} && \textrm{Assumption} \\
        B\l(A\v{x}\r)&=B\v{0} && \textrm{Substitution} \\
        \l(BA\r)\v{x}&=\v{0} && \textrm{Algebraic identities} \\
        I\v{x}&=\v{0} && B\textrm{ is a left-inverse of }A \\
        \v{x}&=\v{0}. && \textrm{Algebraic Identities}
    \end{aligned}
\end{equation}$$
* ($1\Leftrightarrow8$): The forward direction is trivial. Conversely, let $C$ be a right inverse of $A$, so $AC=I_n$ and thus $A$ is a left-inverse of $C$. But then $C$ is invertible so $CC^{-1}=I_n$ and thus
$$\begin{equation}
    \begin{aligned}
        A&=AI && \textrm{Algebraic identities} \\
        &=A\l(CC^{-1}\r) && \textrm{Substitution} \\
        &=\l(AC\r)C^{-1} && \textrm{Algebraic identities} \\
        &=IC^{-1} && C\textrm{ is a left-inverse of }A \\
        &=C^{-1}. && \textrm{Algebraic identities}
    \end{aligned}
\end{equation}$$
Thus $A=C^{-1}$ is invertible with inverse $C$.<span style="float:right;">$\blacksquare$</span>
