<div class="topSpace"></div>

Date Created: 15/10/2022 19:54:30
Tags: #Type/Definition #Topic/Analysis

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [[Limit Superior slash Inferior]]
Generalizations: _Not Applicable_

Properties: [[Monotone Convergence Theorem]], [[Bolzano-Weierstrass Theorem]]
Sufficiencies: [[Convergent implies bounded (sequential)]], [[Cauchy implies bounded]]
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

Let $\tpl{X,d}$ be a metric space. A sequence $\tpl{x_n}_{n\in\N}$ in $X$ is **bounded** if there exists an open ball containing it; that is, if
$$\begin{equation}
    \ex x_0\in X,\ex r>0,\fa n\in\N:x_n\in B_r\!\l(x_0\r).
\end{equation}$$

```

**Remark.** If $X$ carries a vector space structure, we may choose $x_0=0$. Thus $\tpl{x_n}$ is bounded if there exists some $r>0$ such that $d\l(x_n,0\r)<r$ for all $n\in\N$.<span style="float:right;">$\blacklozenge$</span>
