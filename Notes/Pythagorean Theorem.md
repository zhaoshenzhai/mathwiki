<br />
<br />

Date Created: 26/06/2022 16:54:24
Tags: #Proposition #Closed

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition (Pythagoras).

_Let $K$ denote either $\R$ or $\C$ and let $V$ be an inner product space over $K$. If $\l\{v_1,\dots,v_m\r\}$ is an orthogonal set in $V$, then_
$$\begin{equation}
    \l\|\sum_{i=1}^m\alpha_iv_i\r\|^2=\sum_{i=1}^m\l|\alpha_i\r|^2\l\|v_i\r\|^2
\end{equation}$$
_for all $\alpha_1,\dots,\alpha_m\in K$._

```

_Proof_. It suffices to prove the statement for $\alpha_1=\cdots=\alpha_m=1$, for since $\bilform{v_i}{v_j}=0$ implies $\bilform{\alpha_iv_i}{\alpha_jv_j}=\alpha_i\bar{\alpha_j}\bilform{v_i}{v_j}=0$ for all $i,j\in\l\{1,\dots,m\r\}$, we may apply the result with $w_i\coloneqq\alpha_i v_i$.

We proceed by induction on $m$. The base case for when $m=1$ is obviously true, so assume that
$$\begin{equation}
    \l\|\sum_{i=1}^kv_i\r\|^2=\sum_{i=1}^k\l\|v_i\r\|^2
\end{equation}$$
for some $k\in\N^\ast$. Then
$$\begin{align}
    \l\|\sum_{i=1}^{k+1}v_i\r\|^2&=\l\|\sum_{i=1}^kv_i+v_{k+1}\r\|^2 && \textrm{Expand the sum} \\
    &=\bilform{\sum_{i=1}^kv_i+v_{k+1}}{\sum_{i=1}^kv_i+v_{k+1}} && \textrm{Definition of $\|\slot\|$} \\
    &=\bilform{\sum_{i=1}^kv_i}{\sum_{i=1}^kv_i}+\bilform{\sum_{i=1}^kv_i}{v_{k+1}}+\bilform{v_{k+1}}{\sum_{i=1}^kv_i}+\bilform{v_{k+1}}{v_{k+1}} && \textrm{Additivity} \\
    &=\l\|\sum_{i=1}^kv_i\r\|^2+\l\|v_{k+1}\r\|^2+\bilform{\sum_{i=1}^kv_i}{v_{k+1}}+\bilform{v_{k+1}}{\sum_{i=1}^kv_i} && \textrm{Definition of $\|\slot\|$} \\
    &=\sum_{i=1}^k\l\|v_i\r\|^2+\l\|v_{k+1}\r\|^2+\bilform{\sum_{i=1}^kv_i}{v_{k+1}}+\bilform{v_{k+1}}{\sum_{i=1}^kv_i} && \textrm{Induction hypothesis} \\
    &=\sum_{i=1}^{k+1}\l\|v_i\r\|^2+\bilform{\sum_{i=1}^kv_i}{v_{k+1}}+\bilform{v_{k+1}}{\sum_{i=1}^kv_i} && \textrm{Combine sums} \\
    &=\sum_{i=1}^{k+1}\l\|v_i\r\|^2+\bilform{\sum_{i=1}^kv_i}{v_{k+1}}+\bar{\bilform{\sum_{i=1}^kv_i}{v_{k+1}}} && \textrm{Conjugate-symmetry} \\
    &=\sum_{i=1}^{k+1}\l\|v_i\r\|^2+2\Re\bilform{\sum_{i=1}^kv_i}{v_{k+1}} && 2\Re z=z+\bar{z} \\
    &=\sum_{i=1}^{k+1}\l\|v_i\r\|^2+2\Re\l(\sum_{i=1}^k\bilform{v_i}{v_{k+1}}\r) && \textrm{Additivity} \\
    &=\sum_{i=1}^{k+1}\l\|v_i\r\|^2+2\Re0 && v_i\perp v_{k+1}\textrm{ for all }i\in I \\
    &=\sum_{i=1}^{k+1}\l\|v_i\r\|^2. && \textrm{Simplification}\qedin
\end{align}$$
