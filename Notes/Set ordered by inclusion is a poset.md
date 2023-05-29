<div class="topSpace"></div>

Date Created: 26/01/2022 12:09:33
Tags: #Type/Proposition #Later/Set_Theory

Proved by: [[Subset relation is transitive]], [[Axiom of Extensionality]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $X$ be a set. Then the pair $\tpl{X,\subseteq}$ is a poset.

```

<i>Proof.</i> Observe that the subset relation is transitive, and it is trivial to see that $x\subseteq x$ for all $x\in X$. For antisymmetry, take $x_1,x_2\in X$ such that $x_1\subseteq x_2$ and $x_2\subseteq x_1$. By definition of subsets and the biconditional, we see that
$$\begin{equation}
    \fa y\l(y\in x_1\Leftrightarrow y\in x_2\r)
\end{equation}$$
and thus $x_1=x_2$ by $\axiext$.<span style="float:right;">$\blacksquare$</span>
