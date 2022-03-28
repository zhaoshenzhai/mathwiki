<br />
<br />

Date Created: 28/03/2022 16:15:09
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider a homogeneous $m\times n$ linear system $A\v{x}=\v{0}$ over $K$. If $\v{s}_1,\dots,\v{s}_n\in K^n$ are solutions thereof, then any linear combination_
$$\begin{equation}
    \v{v}\coloneqq\sum_{k=1}^n\alpha_k\v{s}_k
\end{equation}$$
_for some $\alpha_1,\dots,\alpha_n\in K$ is also a solution thereof._

```

_Proof_. Take $i\in\l\{1,\dots,m\r\}$. The result follows from the following computation:

$\begin{align}
    \sum_{j=1}^na_{ij}v_j&=\sum_{j=1}^na_{ij}\l(\sum_{k=1}^m\alpha_k\v{s}_k\r)_j && \textrm{Substitution}\\
    &=\sum_{j=1}^na_{ij}\l(\sum_{k=1}^m\l(\alpha_k\v{s}_k\r)_j\r) && \textrm{Definition of vector addition}\\
    &=\sum_{j=1}^na_{ij}\l(\sum_{k=1}^m\alpha_k\l(\v{s}_k\r)_j\r) && \textrm{Definition of scalar-vector multiplication}\\
    &=\sum_{j=1}^n\sum_{k=1}^ma_{ij}\alpha_k\l(\v{s}_k\r)_j && a_{ij}\in K\textrm{; }\axivec[3]\textrm{ of }K^n\\
    &=\sum_{k=1}^m\sum_{j=1}^na_{ij}\alpha_k\l(\v{s}_k\r)_j && \textrm{Discrete Fubini's Theorem}\\
    &=\sum_{k=1}^m\alpha_k\l(\sum_{j=1}^na_{ij}\l(\v{s}_k\r)_j\r) && \alpha_k\in K\textrm{; }\axivec[3]\textrm{ of }K^n\\
    &=\sum_{k=1}^m\alpha_k\l(0\r) && \fa k\in\l\{1,\dots,m\r\}:A\v{s}_k=\v{0}\\
    &=0. && \textrm{Simplification}\qedin
\end{align}$
