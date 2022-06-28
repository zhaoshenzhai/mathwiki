---
custom_alias: $V=U\oplus U^\perp$
---

<br />
<br />

Date Created: 25/06/2022 16:24:44
Tags: #Proposition #Closed

Proved by: [[Algebraic identities of orthogonal complements]], [[Orthogonal complement is a linear subspace]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ denote either $\R$ or $\C$ and let $V$ be a finite-dimensional inner product space over $K$. If $U\subseteq V$ is a linear subspace, then_
$$\begin{equation}
    V=U\oplus U^\perp.
\end{equation}$$

```

_Proof_. It suffices to show that $V=U+U^\perp$ since $U\cap U^\perp=\l\{0\r\}$. To this end, let $\l\{e_1,\dots,e_m\r\}$ be an orthonormal basis for $U$. Take $v\in V$ and observe that
$$\begin{equation}
    v=\underbrace{\sum_{i=1}^m\bilform{v}{e_i}e_i}_{u\,\coloneqq}+\underbrace{v-\sum_{i=1}^m\bilform{v}{e_i}e_i}_{w\,\coloneqq}.
\end{equation}$$
Clearly $u\in U$. Observe that
$$\begin{equation}
    \begin{aligned}
        \bilform{w}{e_j}&=\bilform{v-\sum_{i=1}^m\bilform{v}{e_i}e_i}{e_j} && \textrm{Substitution} \\
        &=\bilform{v}{e_j}-\sum_{i=1}^n\bilform{v}{e_i}\bilform{e_i}{e_j} && \textrm{Linearity in the first slot} \\
        &=\bilform{v}{e_j}-\sum_{i=1}^n\bilform{v}{e_i}\delta_{ij} && \bilform{e_i}{e_j}=\delta_{ij} \\
        &=\bilform{v}{e_j}-\bilform{v}{e_j} && \delta_{ij}=0\textrm{ for all }i\neq j \\
        &=0 && \textrm{Simplification}
    \end{aligned}
\end{equation}$$
for all $j\in\l\{1,\dots,m\r\}$, so $w$ is orthogonal to every vector spanned by $\l\{e_1,\dots,e_n\r\}$. That is, $w\in U^\perp$. Thus $v=u+w$ for some $u\in U$ and $w\in U^\perp$, so $V=U+U^\perp$ and the result follows.<span style="float:right;">$\blacksquare$</span>
