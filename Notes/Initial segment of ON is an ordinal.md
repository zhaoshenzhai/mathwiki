---
mathLink: auto
---

<br />
<br />

Date Created: 02/02/2022 15:15:55
Tags: #Proposition #Closed 

Proved by: [[Well-ordering well-orders subsets]], [Transitive set $\Leftrightarrow$ every element is a subset](Transitive%20set%20iff%20every%20element%20is%20a%20subset.md)
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $X$ be an initial segment of $\ord$. Then $X$ is itself an ordinal. Formally,_
$$\begin{equation}
    \fa\beta\in X,\fa\alpha\in\ord:\alpha\in\beta\Rightarrow\alpha\in X\ \ \ \ \Rightarrow\ \ \ \ X\in\ord.
\end{equation}$$

```

_Proof_. Since $\in$ is well-orders $\ord$ and $X\subseteq\ord$, we see that $\in$ well-orders $X$ too. Our hypothesis that $X$ is an initial segment simply states that every $\beta\in X$ is a subset of $X$, so $X$ is a transitive set.<span style="float:right;">$\blacksquare$</span>
