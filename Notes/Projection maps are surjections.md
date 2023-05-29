<div class="topSpace"></div>

Date Created: 30/01/2022 13:03:07
Tags: #Type/Proposition #Later/Set_Theory

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $\l\{X_i\r\}_{i\in I}$ be an indexed family where each $X_i\neq\em$. Then, for each $j\in I$, the projection map
$$\begin{equation}
    \pi_j:\prod\limits_{i\in I}X_i\to X_j\ \ \ \ \textrm{\it{mapping}}\ \ \ \ f\mapsto f\l(j\r)
\end{equation}$$
is surjective.

```

<i>Proof.</i> We shall show $\ran\pi_j=X_j$ by double inclusion.
* ($\subseteq$): Take $x\in\ran\pi_j$, so there exists $f\in\prod_{i\in I}X_i$ such that $x=\pi_j\l(f\r)=f\l(j\r)$. By definition of the Cartesian product, we see that $f\l(j\r)\in X_j$ and thus $x\in X_j$.

* ($\supseteq$): Take $x\in X_j$ and, for all $i\in I\comp\l\{j\r\}$, let $x_i\in X_i$ be arbitrary; they exist because each $X_i\neq\em$. Let
$$\begin{equation}
    \prod\limits_{i\in I}X_i\ni f:I\to\bigcup_{i\in I}X_i\ \ \ \ \ \ \ \ \textrm{mapping}\ \ \ \ \ \ \ \ i\mapsto x_i
\end{equation}$$
and observe that $x=f\l(j\r)=\pi_j\l(f\r)$.<span style="float:right;">$\blacksquare$</span>
