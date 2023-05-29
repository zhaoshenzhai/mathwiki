<div class="topSpace"></div>

Date Created: 23/01/2022 12:26:56
Tags: #Type/Proposition #Later/Set_Theory

Proved by: [[Reflexive closure of strict orders is non-strict]], [[Strict lexicographical order is a strict partial order]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $\leq$ and $\preceq$ be partial orders on the sets $X$ and $Y$, respectively. Then the binary relation defined by
$$\begin{equation}
    \tpl{x_1,y_1}\sqsubseteq\tpl{x_2,y_2}\ \ \ \ \Leftrightarrow\ \ \ \ \l[x_1<x_2\lor\l(x_1=x_2\land y_1\preceq y_2\r)\r]
\end{equation}$$
for all $x_1,x_2\in X$ and $y_1,y_2\in Y$ is a partial order on $X\times Y$.

```

<i>Proof.</i> Since $\sqsubseteq\,=\rfcl\sqsubset$ and $\sqsubset$ is a strict partial order, we see that $\sqsubseteq$ is a partial order on $X\times Y$.<span style="float:right;">$\blacksquare$</span>
