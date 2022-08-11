<div class="topSpace"></div>

Date Created: 30/01/2022 13:03:07
Tags: #Proposition

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let_ $\l\{X_i\r\}_{i\in I}$ _be an indexed family where each $X_i\neq\em$. Then, for each $j\in I$, the projection map_
$$\begin{equation}
    \pi_j:\prod\limits_{i\in I}X_i\to X_j\ \ \ \ \textrm{\it{mapping}}\ \ \ \ f\mapsto f\l(j\r)
\end{equation}$$
_is surjective._

```

_Proof_. Fix $j\in I$. We first need to prove that $\pi_j$ is indeed a function; that is, we need
$$\begin{equation}
    \fa f\in\prod\limits_{i\in I}X_i,\ex!x:\pi_j\l(f\r)=x.
\end{equation}$$
But $\pi_j\l(f\r)=f\l(j\r)$, so the existence and uniqueness of $x$ follows directly from the fact that $f$ is a function. We now need to prove that $\ran\pi_j=X_j$.
* ($\subseteq$): Take $x\in\ran\pi_j$, so there exists $f\in\prod_{i\in I}X_i$ such that $x=\pi_j\l(f\r)=f\l(j\r)$. By definition of the Cartesian product, we see that $f\l(j\r)\in X_j$ and thus $x\in X_j$.

* ($\supseteq$): Take $x\in X_j$ and, for all $i\in I\setcomp\l\{j\r\}$, let $x_i\in X_i$ be arbitrary; they exist because each $X_i\neq\em$. Let
$$\begin{equation}
    \prod\limits_{i\in I}X_i\ni f:I\to\bigcup_{i\in I}X_i\ \ \ \ \ \ \ \ \textrm{mapping}\ \ \ \ \ \ \ \ i\mapsto x_i
\end{equation}$$
and observe that $x=f\l(j\r)=\pi_j\l(f\r)$.<span style="float:right;">$\blacksquare$</span>
