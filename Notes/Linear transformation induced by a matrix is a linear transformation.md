<br />
<br />

Date Created: 01/04/2022 22:34:08
Tags: #Proposition #Closed

Proved by: [[Matrix multiplication is distributive over addition]], [[Compatibility of matrix and scalar multiplications]]
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n\in\N$. Then, for every $A\in\mat{m\times n}{K}$, the linear transformation $T_A:K^n\to K^m$ induced by $A$ is a linear transformation._

```

_Proof_. Take $\v{x},\v{y}\in K^n$ and $\alpha\in K$, and observe that
$$\begin{align}
    T_A\l(\alpha\v{x}+\v{y}\r)&=A\l(\alpha\v{x}+\v{y}\r) && \textrm{Definition of $T_A$} \\
    &=A\l(\alpha\v{x}\r)+A\v{y} && \textrm{Matrix multiplication is distributive over addition} \\
    &=\alpha\l(A\v{x}\r)+A\v{y} && \textrm{Compatibility of matrix and scalar multiplications} \\
    &=\alpha T_A\l(\v{x}\r)+T_A\l(\v{y}\r). && \textrm{Definition of $T_A$}\qedin
\end{align}$$
