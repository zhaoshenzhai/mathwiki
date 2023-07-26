<div class="topSpace"></div>

Date Created: 27/02/2023 20:47:10
Tags: #Type/Definition #Topic/Real_Analysis

Types: <i>Not Applicable</i>
Examples: [[Frechet Differentiability and Derivative]]
Constructions: [[Operator Norm]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: [[Linear map from a finite-dimensional space is bounded]]
Equivalences: [[Bounded iff Lipschitz iff continuous (normed vector space)]]
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $\tpl{V,\|\slot\|_V}$ and $\tpl{V,\|\slot\|_W}$ be normed vector spaces. A linear map $T:V\to W$ is said to be <b>bounded</b> if there exists some $C\in\R^+$ such that
$$\begin{equation}
    \sup\limits_{v\neq0}\frac{\|Tv\|_W}{\|v\|_V}\leq C,
\end{equation}$$
or, equivalently, if $\|Tv\|_W\leq C\|v\|_V$ for all $v\in V$.

```
