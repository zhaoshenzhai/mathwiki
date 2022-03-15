<br />
<br />

Date Created: 30/01/2022 13:03:07
Tags: #Proposition #Closed 

Proved by: [[Formula in replacement image constructs a function]]
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let_ $\l\{X_i\r\}_{i\in I}$ _be an indexed family where each $X_i\neq\em$. Then the projection maps_
$$\begin{equation}
    \pi_j:\prod\limits_{i\in I}X_i\to X_j\ \ \ \ \textit{mapping}\ \ \ \ f\mapsto f\l(j\r)
\end{equation}$$
_for each $j\in I$ are surjective._

```

_Proof_. Fix $j\in I$. We first need to prove that $\pi_j$ is indeed a function; that is, we need a formula $\phi_j\l(f,x\r)$ such that
$$\begin{equation}
    \fa f\in\prod\limits_{i\in I}X_i,\ex!x:\phi_j\l(f,x\r).
\end{equation}$$
Indeed, we claim that $\phi_j\l(f,x\r)\,\colon\!\Leftrightarrow x=f\l(j\r)$; the uniqueness of $x$ follows directly from the fact that $f$ is a function. We now need to prove that $\ran\pi_j=X_j$.
* ($\subseteq$): Take $x\in\ran\pi_j$, so there exists $f\in\prod_{i\in I}X_i$ such that $x=\pi_j\l(f\r)=f\l(j\r)$. By definition of the Cartesian product, we see that $f\l(j\r)\in X_j$ and thus $x\in X_j$.
* ($\supseteq$): Take $x\in X_j$ and, for all $i\in I\setcomp\l\{j\r\}$, let $x_i\in X_i$ be arbitrary; they exist because each $X_i\neq\em$. Consider the function $f:I\to\bigcup_{i\in I}X_i$ where $f\l(i\r)=x_i$ for all $i\in I$, and observe that $x=f\l(j\r)=\pi_j\l(f\r)$.<span style="float:right;">$\blacksquare$</span>
