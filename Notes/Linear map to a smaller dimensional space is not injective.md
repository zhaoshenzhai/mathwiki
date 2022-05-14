<br />
<br />

Date Created: 14/05/2022 13:39:47
Tags: #Proposition #Closed

Proved by: [Linear map $T$ is injective $\Leftrightarrow$ $\ker T=\l\{0\r\}$](Linear%20map%20is%20injective%20iff%20kernel%20vanishes.md), [$\dim V=0$ $\Leftrightarrow$ $V=\l\{0\r\}$](Dimension%20of%20vector%20space%20is%20zero%20iff%20it%20is%20the%20zero%20vector%20space.md), [[Dimension Theorem]], [$\dim U\leq\dim V$ for $U\subseteq V$ finite-dim.; strict $\Leftrightarrow$ $U\subset V$](Dimension%20of%20subspace%20less%20than%20dimension%20of%20vector%20space%20(finite-dim.;%20strict%20iff%20proper).md)
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ and $W$ be finite-dimensional vector spaces over some field $K$ with $\dim V>\dim W$. Then no lienar map $T:V\to W$ is injective._

```

_Proof_. It suffices to show that $\ker T\neq\l\{0\r\}$, or, equivalently, that $\dim\ker T\neq0$. The result follows from the following computation:
$$\begin{align}
    \dim\ker T&=\dim V-\dim\im T && \textrm{Dimension Theorem} \\
    &\geq\dim V-\dim W && \im T\subseteq W \\
    &>0. && \textrm{Hypothesis}\qedin
\end{align}$$
