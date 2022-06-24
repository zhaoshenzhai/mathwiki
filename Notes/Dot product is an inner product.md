<br />
<br />

Date Created: 23/06/2022 08:54:36
Tags: #Proposition #Closed

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Fix $n\in\N$ and consider the real $n$-coordinate space $\R^n$. Then the dot product_
$$\begin{equation}
    \bilform{\slot}{\slot}:\R^n\times\R^n\to\R\ \ \ \ \ \ \ \ \textrm{\it{mapping}}\ \ \ \ \ \ \ \ \tpl{\v{x},\v{y}}\mapsto\sum_{i=1}^nx_iy_i
\end{equation}$$
_is an inner product on $\R^n$._

```

_Proof_. We verify the axioms for an inner product over a real vector space.
* (Positive-definiteness): Take $\v{x}\in\R^n$ and observe that $\bilform{\v{x}}{\v{x}}=\sum_{i=1}^nx_i^2\geq0$. Now $\v{x}=\v{0}$ iff each $x_i=0$ iff $\sum_{i=1}^nx_i^2=0$; the backwards direction for the last equivalence holds since if there exists some $j$ such that $x_j\neq0$, then $x_j^2\neq0$ and since every other $x_i^2\geq0$, their sum is nonzero, a contradiction.

* (Linearity in the first slot): Take $\v{x}_1,\v{x}_2,\v{y}\in\R^n$ and $\alpha\in\R$, and observe that
$$\begin{equation}
    \begin{aligned}
        \bilform{\alpha\v{x}_1+\v{x}_2}{\v{y}}&=\sum_{i=1}^n\l(\alpha x_{1i}+x_{2i}\r)y_i && \textrm{Definition of }\bilform{\slot}{\slot} \\
        &=\sum_{i=1}^n\l(\alpha x_{1i}y_i\r)+x_{2i}y_i && \textrm{Distributvity in $\R$} \\
        &=\sum_{i=1}^n\l(\alpha x_{1i}\r)y_i+\sum_{i=1}^nx_{2i}y_i && \textrm{Associativity of $+$ in $\R$} \\
        &=\alpha\sum_{i=1}^nx_{1i}y_i+\sum_{i=1}^nx_{2i}y_i && \textrm{Distributivity in $\R$} \\
        &=\alpha\bilform{\v{x}_1}{\v{y}}+\bilform{\v{x}_2}{\v{y}}. && \textrm{Definition of }\bilform{\slot}{\slot}
    \end{aligned}
\end{equation}$$
* (Symmetry): Take $\v{x},\v{y}\in\R^n$ and observe that
$$\begin{align}
    \bilform{\v{x}}{\v{y}}&=\sum_{i=1}^nx_iy_i && \textrm{Definition of }\bilform{\slot}{\slot} \\
    &=\sum_{i=1}^ny_ix_i && \textrm{Commutativity of $\cdot$ in $\R$} \\
    &=\bilform{\v{y}}{\v{x}}. && \textrm{Definition of }\bilform{\slot}{\slot}\qedin
\end{align}$$
