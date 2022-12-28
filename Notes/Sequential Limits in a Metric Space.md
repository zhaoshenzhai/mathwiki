<div class="topSpace"></div>

Date Created: 01/12/2022 13:45:22
Tags: #Definition #Topics/Analysis

Types: _Not Applicable_
Examples: [[Sequential Limits in R]]
Constructions: [[Sequential Criterion for Functional Limits]], [[Sequential slash functional limit characterizations of continuity]]
Generalizations: [[Sequential Limits]]

Properties: [[Convergent implies bounded (sequential)]], [[Convergent implies Cauchy]]
Sufficiencies: [[Squeezed Distance Lemma]]
Equivalences: _Not Applicable_
Justifications: [[Hausdorff implies limits are unique]]

``` ad-Definition
title: Definition.

_Let $\tpl{X,d}$ be a metric space and fix $x\in X$. A sequence_ $\tpl{x_n}_{n\in\N}$ _in $X$ is said to **converge to $x$ w.r.t. $d$**, and $x$ is said to be the **limit of $\tpl{x_n}$ w.r.t. $d$**, if_
$$\begin{equation}
    \fa\epsilon>0,\fa^\infty n\in\N:d\l(x_n,x\r)<\epsilon,
\end{equation}$$
_in which case we write_ $\lim\limits_{n\to\infty}x_n=x$ _or $x_n\to x$ as $n\to\infty$._

```
