<div class="topSpace"></div>

Date Created: 01/04/2022 22:34:08
Tags: #Proposition #Topics/Linear_Algebra

Proved by: [[Basic properties of matrix operations]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n\in\N^+$. Then, for every $A\in\mat{m\times n}{K}$, the left-multiplication map $L_A:K^n\to K^m$ induced by $A$ is a linear map._

```

_Proof_. Take $\v{x},\v{y}\in K^n$ and $\alpha\in K$, and observe that
$$\begin{align}
    L_A\l(\alpha\v{x}+\v{y}\r)&=A\l(\alpha\v{x}+\v{y}\r) && \textrm{Definition of $L_A$} \\
    &=A\l(\alpha\v{x}\r)+A\v{y} && \textrm{Matrix multiplication is distributive over addition} \\
    &=\alpha\l(A\v{x}\r)+A\v{y} && \textrm{Compatibility of matrix and scalar multiplications} \\
    &=\alpha L_A\l(\v{x}\r)+L_A\l(\v{y}\r). && \textrm{Definition of $L_A$}\qedin
\end{align}$$
