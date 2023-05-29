<div class="topSpace"></div>

Date Created: 09/01/2023 11:30:55
Tags: #Type/Definition #Topic/Linear_Algebra

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

Let $K$ be a field. The **vector space of polynomials over $K$** is the vector space $\tpl{K\l[x\r],K,+,\cdot,0}$ consisting of all polynomials over $K$ equipped with the operations $+$ and $\cdot$, defined, for all $f\coloneqq\sum_{i=0}^{n}a_ix^1$, $g\coloneqq\sum_{i=0}^{m}b_ix_i$, and $\alpha\in K$, by
$$\begin{equation}
    f+g\coloneqq\sum_{i=0}^{u}\l(a_i+b_i\r)x^i\ \ \ \ \ \ \ \ \textrm{\it{and}}\ \ \ \ \ \ \ \ \alpha\cdot f\coloneqq\sum_{i=0}^{n}\l(\alpha a_i\r)x^i
\end{equation}$$
where $u\coloneqq\max\l\{m,n\r\}$ (so if $m>n$, $a_{n+1},\dots,a_m\coloneqq0$, and if $n>m$, $b_{m+1},\dots,b_n\coloneqq0$).

```

**Remark.** Clearly the set $\l\{1,x,x^2,x^3,\dots\r\}$ is a basis for $K\l[x\r]$. Thus $\dim K\l[x\r]=\infty$.<span style="float:right;">$\blacklozenge$</span>
