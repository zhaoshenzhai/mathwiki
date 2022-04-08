---
custom_alias: Linear system $A\v{x}=\v{b}$ is consistent for all $\v{b}$ $\Rightarrow$ $A$ is right-invertible
---

<br />
<br />

Date Created: 08/04/2022 10:00:52
Tags: #Proposition #Closed

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider $A\in\mat{n}{K}$ for some fixed $n\in\N$. If the linear system $A\v{x}=\v{b}$ is consistent for all $\v{b}\in\mat{n\times1}{K}$, then $A$ is right-invertible._

```

_Proof_. Consider the standard basis $\l\{\v{e}_1,\dots,\v{e}_n\r\}$ of $K^n$, regarded here as elements of $\mat{n\times1}{K}$. Since the system $A\v{x}=\v{e}_k$ has a solution for all $k\in\l\{1,\dots,n\r\}$, we see that $A\v{s}_k=\v{e}_k$ for some $\v{s}_k\in\mat{n\times1}{K}$. Letting $S\coloneqq\l[\v{s}_1\ \ \cdots\ \ \v{s}_n\r]$ with each $\v{s}_k$ as its columns, we see that
$$\begin{equation}
    \begin{aligned}
        \l(AS\r)_{ik}&=\sum_{j=1}^na_{ij}s_{jk} && \textrm{Definition of matrix multiplication} \\
        &=\sum_{j=1}^na_{ij}\l(\v{s}_k\r)_j && \v{s}_k\textrm{ are column vectors and $j$ indices rows of $S$} \\
        &=\l(A\v{s}_k\r)_i && \textrm{Definition of matrix multiplication; $A\v{s}_k\in\mat{m\times1}{K}$} \\
        &=\l(\v{e}_k\r)_i && A\v{s}_k=\v{e}_k \\
        &=\delta_{ik} && \textrm{Definition of $\v{e}_k$}
    \end{aligned}
\end{equation}$$
and thus $AS=I$. The result follows.<span style="float:right;">$\blacksquare$</span>
