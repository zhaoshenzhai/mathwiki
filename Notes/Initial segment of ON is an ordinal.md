<div class="topSpace"></div>

Date Created: 02/02/2022 15:15:55
Tags: #Proposition #Later/Set_Theory

Proved by: [[Well-ordering well-orders subsets]], [[Transitive set iff every element is a subset]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $X$ be an initial segment of $\ordinal$. Then $X$ is itself an ordinal. Formally,_
$$\begin{equation}
    \fa\beta\in X,\fa\alpha\in\ordinal:\alpha\in\beta\Rightarrow\alpha\in X\ \ \ \ \Rightarrow\ \ \ \ X\in\ordinal.
\end{equation}$$

```

_Proof_. Since $\in$ is well-orders $\ordinal$ and $X\subseteq\ordinal$, we see that $\in$ well-orders $X$ too. Our hypothesis that $X$ is an initial segment simply states that every $\beta\in X$ is a subset of $X$, so $X$ is a transitive set.<span style="float:right;">$\blacksquare$</span>
