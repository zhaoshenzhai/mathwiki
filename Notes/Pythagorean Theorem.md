<div class="topSpace"></div>

Date Created: 26/06/2022 16:54:24
Tags: #Theorem

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Theorem
title: Theorem (Pythagoras).

_Let $K$ denote either $\R$ or $\C$ and let $V$ be an inner product space over $K$. If $\l\{v_1,\dots,v_m\r\}$ is an orthogonal set in $V$, then_
$$\begin{equation}
    \l\|\sum_{i=1}^m\alpha_iv_i\r\|^2=\sum_{i=1}^m\l|\alpha_i\r|^2\l\|v_i\r\|^2
\end{equation}$$
_for all $\alpha_1,\dots,\alpha_m\in K$._

```

_Proof_. The result follows from the following computation:
$$\begin{align}
    \l\|\sum_{i=1}^m\alpha_iv_i\r\|^2&=\bilform{\sum_{i=1}^m\alpha_iv_i}{\sum_{j=1}^m\alpha_jv_j} && \textrm{Definition of $\|\slot\|$} \\
    &=\sum_{i=1}^m\sum_{j=1}^m\alpha_i\bar{\alpha_j}\bilform{v_i}{v_j} && \textrm{Sesquilinearity of }\bilform{\slot}{\slot} \\
    &=\sum_{i=1}^m\sum_{j=1}^m\alpha_i\bar{\alpha_j}\bilform{v_i}{v_i}\delta_{ij} && v_i\perp v_j\textrm{ for }i\neq j \\
    &=\sum_{i=1}^m\sum_{j=1}^m\alpha_i\bar{\alpha_j}\l\|v_i\r\|^2\delta_{ij} && \textrm{Definition of $\|\slot\|$} \\
    &=\sum_{i=1}^m\alpha_i\bar{\alpha_i}\l\|v_i\r\|^2 && \delta_{ij}=0\textrm{ for }i\neq j \\
    &=\sum_{i=1}^m\l|\alpha_i\r|^2\l\|v_i\r\|^2. && \textrm{Definition of $\l|\,\slot\,\r|$}\qedin
\end{align}$$
