<div class="topSpace"></div>

Date Created: 02/02/2022 15:15:55
References:
Tags: #Type/Proposition #Topic/Set_Theory/Later/Ordinal

Proved by: [[Well-ordering well-orders subsets]], [[Transitive set iff every element is a subset]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $X$ be an initial segment of $\ON$. Then $X$ is itself an ordinal. Formally,
$$\begin{equation}
    \fa\beta\in X,\fa\alpha\in\ON:\alpha\in\beta\Rightarrow\alpha\in X\ \ \ \ \Rightarrow\ \ \ \ X\in\ON.
\end{equation}$$

```

<i>Proof.</i> Since $\in$ is well-orders $\ON$ and $X\subseteq\ON$, we see that $\in$ well-orders $X$ too. Our hypothesis that $X$ is an initial segment simply states that every $\beta\in X$ is a subset of $X$, so $X$ is a transitive set.<span style="float:right;">$\blacksquare$</span>
