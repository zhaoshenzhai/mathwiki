<div class="topSpace"></div>

Date Created: 29/01/2022 11:01:25
Tags: #Proposition

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $X$ be a set and let_ $\l\{X_i\r\}_{i\in I}$ _be an indexed family with $X_i=X$ for all $i\in I$. Then_ $\prod_{i\in I}X_i=X^I$_._

```

_Proof_. Observe that
$$\begin{equation}
    \bigcup\limits_{i\in I}X_i=\bigcup\l\{X_i\mid i\in I\r\}=\bigcup\l\{X\mid i\in I\r\}=\bigcup\l\{X\r\}=X,
\end{equation}$$
so we have

$\begin{alignat}{2}
    \prod\limits_{i\in I}X_i&=\l\{f:I\to\bigcup\limits_{i\in I}X_i\mid\fa i\in I:f\l(i\r)\in X_i\r\}\ \ \ \ \ \ \ \ &&\textrm{Definition of Cartesian product}\\
    &=\l\{f:I\to X\mid\fa i\in I:f\l(i\r)\in X\r\}&&\textrm{Substitution}\\
    &=\l\{f:I\to X\r\}&&\ran f\subseteq X\\
    &=X^I.&&\textrm{Definition of function space}\qedin
\end{alignat}$
