<div class="topSpace"></div>

Date Created: 04/01/2023 13:53:37
Tags: #Type/Definition #Topic/Ring_Theory #Topic/Complex_Analysis

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [[Complex Conjugate]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Ideal is maximal iff quotient is a field]], [[Irreducible polynomial iff ideal maximal]]

``` ad-Definition
title: Definition.

_Let $I\coloneqq\sring{x^2+1}$ be an ideal in the ring $\R\l[x\r]$. The **field of complex numbers** is the field_
$$\begin{equation}
    \C\coloneqq\R\l[x\r]/I.
\end{equation}$$

```

**Remark.** Setting $i\coloneqq x+I$, we have that $i^2=\l(x+I\r)^2=-1+I$. This is usually written as $\textrm{`}i^2=-1\textrm{'}$, which is justified as follows.
* Observe that $\C=\l\{\alpha+\beta x+I\mid\alpha,\beta\in\R\r\}\iso\R^2$, so we may identify each complex number as a pair $\tpl{\alpha,\beta}$ of real numbers. Indeed, this isomorphism may be turned into a ring isomorphism if we define
$$\begin{align}
    \tpl{\alpha_1,\beta_1}+\tpl{\alpha_2,\beta_2}&\coloneqq\tpl{\alpha_1+\beta_1,\alpha_2+\beta_2} \\
    \tpl{\alpha_1,\beta_1}\cdot\tpl{\alpha_2,\beta_2}&\coloneqq\tpl{\alpha_1\beta_1-\alpha_2\beta_2,\alpha_1\beta_2+\alpha_2\beta_1}.
\end{align}$$
Writing $\alpha+i\beta\coloneqq\tpl{\alpha,\beta}$, we have that $i^2=\l(0,1\r)^2=\l(-1,0\r)=-1$.<span style="float:right;">$\blacklozenge$</span>
