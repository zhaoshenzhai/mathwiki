<div class="topSpace"></div>

Date Created: 01/12/2022 13:45:22
Tags: #Type/Definition #Topic/Analysis

Types: <i>Not Applicable</i>
Examples: [[Sequential Limits in R]]
Constructions: [[Sequential Criterion for Functional Limits]], [[Sequential and functional limit characterizations of continuity]]
Generalizations: [[Sequential Limits]]

Properties: [[Convergent implies bounded (sequential)]], [[Convergent implies Cauchy]]
Sufficiencies: [[Squeezed Distance Lemma]]
Equivalences: <i>Not Applicable</i>
Justifications: [[Hausdorff implies limits are unique]]

``` ad-Definition
title: Definition.

Let $\tpl{X,d}$ be a metric space and fix $x\in X$. A sequence $\tpl{x_n}_{n\in\N}$ in $X$ is said to <b>converge to $x$ w.r.t. $d$</b>, and $x$ is said to be the <b>limit of $\tpl{x_n}$ w.r.t. $d$</b>, if
$$\begin{equation}
    \fa\epsilon>0,\fa^\infty n\in\N:d\l(x_n,x\r)<\epsilon,
\end{equation}$$
in which case we write $\lim\limits_{n\to\infty}x_n=x$ or $x_n\to x$ as $n\to\infty$.

```
