<div class="topSpace"></div>

Date Created: 25/01/2022 11:58:09
Tags: #Type/Proposition #Topic/Topology/Later

Proved by: [[Discrete topology (basis)]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $X$ be a set. The discrete topology is the finest topology on $X$.

```

<i>Proof.</i> Let $\mc{T}$ be any topology on $X$ and take $U\in\mc{T}$. Recall that we have
$$\begin{equation}
    U=\bigcup\limits_{x\in U}\l\{x\r\}=\bigcup\underbrace{\l\{\l\{x\r\}\in\pow\l(x\r)\st x\in U\r\}}_{\mathclap{\subseteq\mc{B}_\textrm{discrete}}}\in\mc{T}_\textrm{discrete}
\end{equation}$$
where the last inclusion follows from $\axitop[2]$ of $\mc{T}_\textrm{discrete}$. It follows that $\mc{T}\subseteq\mc{T}_\textrm{discrete}$.<span style="float:right;">$\blacksquare$</span>
