---
mathLink: $V=U\oplus U^\perp$
---

<div class="topSpace"></div>

Date Created: 25/06/2022 16:24:44
References: #Ref/Axl24
Tags: #Type/Proposition #Topic/Functional_Analysis

Proved by: [[Gram-Schmidt Orthonormalization]], [[Basic properties of orthogonal complements]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $V$ be an inner product space. If $U$ is a finite-dimensional linear subspace of $V$, then $V=U\oplus U^\perp$.

```

<i>Proof.</i> Since $U\cap U^\perp=\l\{0\r\}$, it suffices to show that $V=U+U^\perp$. To this end, let $\l\{e_1,\dots,e_m\r\}$ be an orthonormal basis for $U$. Take $v\in V$ and observe that
$$\begin{equation}
    v=\underbrace{\sum_{i=1}^m\inprod{v}{e_i}e_i}_{u\,\coloneqq}+\underbrace{v-\sum_{i=1}^m\inprod{v}{e_i}e_i}_{w\,\coloneqq}.
\end{equation}$$
Clearly $u\in U$. Observe that
$$\begin{equation}
    \begin{aligned}
        \inprod{w}{e_j}&=\inprod{v-\sum_{i=1}^m\inprod{v}{e_i}e_i}{e_j} && \textrm{Substitution} \\
        &=\inprod{v}{e_j}-\sum_{i=1}^n\inprod{v}{e_i}\inprod{e_i}{e_j} && \textrm{Linearity in the first slot} \\
        &=\inprod{v}{e_j}-\sum_{i=1}^n\inprod{v}{e_i}\delta_{ij} && \inprod{e_i}{e_j}=\delta_{ij} \\
        &=\inprod{v}{e_j}-\inprod{v}{e_j} && \delta_{ij}=0\textrm{ for all }i\neq j \\
        &=0 && \textrm{Simplification}
    \end{aligned}
\end{equation}$$
for all $j\in\l\{1,\dots,m\r\}$, so $w$ is orthogonal to every vector spanned by $\l\{e_1,\dots,e_n\r\}$. That is, $w\in U^\perp$. Thus $v=u+w$ for some $u\in U$ and $w\in U^\perp$, so $V=U+U^\perp$ and the result follows.<span style="float:right;">$\blacksquare$</span>
