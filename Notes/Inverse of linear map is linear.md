<div class="topSpace"></div>

Date Created: 28/05/2022 14:44:08
Tags: #Proposition

Proved by: [[Invertible iff bijective]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ and $W$ be vector spaces over some field $K$, and let $T:V\to W$ be an invertible linear map. Then $T^{-1}:W\to V$ is linear._

```

_Proof_. Take $w_1,w_2\in W$ and $\alpha\in K$. Since $T$ is invertible, it is both injective and surjective, so there exist unique vectors $v_1,v_2\in V$ such that $T\l(v_1\r)=w_1$ and $T\l(v_2\r)=w_2$. Observe then that
$$\begin{align}
    T^{-1}\l(\alpha w_1+w_2\r)&=T^{-1}\l(\alpha T\l(v_1\r)+T\l(v_2\r)\r) && \textrm{Substitution} \\
    &=T^{-1}\l(T\l(\alpha v_1+v_2\r)\r) && T\textrm{ is linear} \\
    &=\alpha v_1+v_2 && T^{-1}\circ T=\id_V \\
    &=\alpha T^{-1}\l(w_1\r)+T^{-1}\l(w_2\r). && \textrm{Uniqueness of $v_1$ and $v_2$}\qedin
\end{align}$$
