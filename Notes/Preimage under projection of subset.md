<div class="topSpace"></div>

Date Created: 21/06/2022 10:29:38
Tags: #Proposition

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let_ $\l\{X_i\r\}_{i\in I}$ _be an indexed family of sets and fix $j\in I$. Then_
$$\begin{equation}
    \fa U\subseteq X_j:\preim_{\pi_j}\!\l(U\r)=U\times\prod\limits_{i\neq j}X_j.
\end{equation}$$

```

_Proof_. First observe that
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
