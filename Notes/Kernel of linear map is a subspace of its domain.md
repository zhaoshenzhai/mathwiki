<div class="topSpace"></div>

Date Created: 02/05/2022 19:40:34
Tags: #Proposition

Proved by: [[Linear map fixes zero vector]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ and $W$ be vector spaces over some field $K$ and consider a linear map $T:V\to W$. Then $\ker T$ is a $K$-linear subspace of $V$._

```

_Proof_. It suffices to verify that $0\in\ker T$ and, for every $v_1,v_2\in\ker T$ and $\alpha\in K$, that $\alpha v_1+v_2\in\ker T$.
* ($0\in\ker T$): This follows readily since $T\l(0\r)=0$.

* ($\alpha v_1+v_2\in\ker T$): The result follows from the following computation:
$$\begin{align}
    T\l(\alpha v_1+v_2\r)&=T\l(\alpha v_1\r)+T\l(v_2\r) && \textrm{Additivity of $T$} \\
    &=\alpha T\l(v_1\r)+T\l(v_2\r) && \textrm{Homogeneity of $T$} \\
    &=\alpha\l(0\r)+0 && v_1,v_2\in\ker T \\
    &=0. && \textrm{Arithmetic}\qedin
\end{align}$$
