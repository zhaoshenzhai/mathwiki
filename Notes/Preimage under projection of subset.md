<div class="topSpace"></div>

Date Created: 21/06/2022 10:29:38
Tags: #Type/Proposition #Later/Set_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\l\{X_i\r\}_{i\in I}$ be an indexed family of sets and fix $j\in I$. Then
$$\begin{equation}
    \fa U\subseteq X_j:\preim_{\pi_j}\!\l(U\r)=U\times\prod\limits_{i\neq j}X_j.
\end{equation}$$

```

<i>Proof.</i> First observe that
$$\begin{equation}
    U\times\prod\limits_{i\neq j}X_i=\l\{f:I\to U\cup\bigcup\limits_{i\neq j}X_i\mid f\l(j\r)\in U\land\fa i\in I:f\l(i\r)\in X_i\r\},
\end{equation}$$
but since $U\subseteq X_j$, the statement $f:I\to U\cup\bigcup_{i\neq j}X_i$ is equivalent to $f:I\to\bigcup_{i\in I}X_i$. Thus
$$\begin{equation}
    U\times\prod\limits_{i\neq j}X_i=\l\{f:I\to\bigcup\limits_{i\in I}X_i\mid f\l(j\r)\in U\land\fa i\in I:f\l(i\r)\in X_i\r\}.\cref{\ast}
\end{equation}$$
Now take $f\in\preim_{\pi_j}\!\l(U\r)$ and observe that
$$\begin{align}
    f\in\preim_{\pi_j}\!\l(U\r)&\Leftrightarrow f\in\prod\limits_{i\in I}X_i\land\pi_j\l(f\r)\in U && \textrm{Definition of $\preim_{\pi_j}\!\l(U\r)$} \\
    &\Leftrightarrow f:I\to\bigcup_{i\in I}X_i\land\fa i\in I:f\l(i\r)\in X_i\land\pi_j\l(f\r)\in U && \textrm{Definition of $\prod\limits_{i\in I}X_i$} \\
    &\Leftrightarrow f:I\to\bigcup_{i\in I}X_i\land\fa i\in I:f\l(i\r)\in X_i\land f\l(j\r)\in U && \textrm{Definition of $\pi_j$} \\
    &\Leftrightarrow f\in U\times\prod\limits_{i\neq j}X_i. && \ref{\ast}\qedin
\end{align}$$
