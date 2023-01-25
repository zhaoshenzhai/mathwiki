<div class="topSpace"></div>

Date Created: 14/05/2022 14:20:01
Tags: #Proposition #Later/Linear_Algebra

Proved by: [[Dimension of subspace]], [[Dimension Theorem]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ and $W$ be finite-dimensional $K$-vector spaces with $\dim V<\dim W$. Then no linear map $T:V\to W$ is surjective._

```

_Proof_. It suffices to show that $\im T\subset W$, or, equivalently, that $\dim\im T<\dim W$. The result follows from the following computation:
$$\begin{align}
    \dim\im T&=\dim V-\dim\ker T && \textrm{Dimension Theorem} \\
    &\leq\dim V && \dim\ker T\geq0 \\
    &<\dim W. && \textrm{Hypothesis}\qedin
\end{align}$$
