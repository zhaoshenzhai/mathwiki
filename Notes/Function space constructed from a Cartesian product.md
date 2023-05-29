<div class="topSpace"></div>

Date Created: 29/01/2022 11:01:25
Tags: #Type/Proposition #Later/Set_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $X$ be a set and let $\l\{X_i\r\}_{i\in I}$ be an indexed family with $X_i=X$ for all $i\in I$. Then $\prod_{i\in I}X_i=X^I$.

```

<i>Proof.</i> Observe that
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
