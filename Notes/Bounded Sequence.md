<div class="topSpace"></div>

Date Created: 15/10/2022 19:54:30
Tags: #Type/Definition #Topic/Analysis

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Limit Superior slash Inferior]]
Generalizations: <i>Not Applicable</i>

Properties: [[Monotone Convergence Theorem]], [[Bolzano-Weierstrass Theorem]]
Sufficiencies: [[Convergent implies bounded (sequential)]], [[Cauchy implies bounded]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $\tpl{X,d}$ be a metric space. A sequence $\tpl{x_n}_{n\in\N}$ in $X$ is <b>bounded</b> if there exists an open ball containing it; that is, if
$$\begin{equation}
    \ex x_0\in X,\ex r>0,\fa n\in\N:x_n\in B_r\!\l(x_0\r).
\end{equation}$$

```

<b>Remark.</b> If $X$ carries a vector space structure, we may choose $x_0=0$. Thus $\tpl{x_n}$ is bounded if there exists some $r>0$ such that $d\l(x_n,0\r)<r$ for all $n\in\N$.<span style="float:right;">$\blacklozenge$</span>
