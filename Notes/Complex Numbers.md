<div class="topSpace"></div>

Date Created: 04/01/2023 13:53:37
Tags: #Type/Definition #Topic/Rings_and_Modules/Ring_Theory

Abstractions: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>

Properties: [[Fundamental Theorem of Algebra]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Polynomial ring over fields is a EUD]], [[EUD implies PID]], [[Basic properties of prime and irreducible elements]], [[Ideal is maximal iff quotient is a field]]

``` ad-Example
title: Example.

The <b>field of complex numbers</b> is the field $\C\coloneqq\R\l[x\r]/\!\gen{x^2+1}$.

```

<b>Remark.</b> Setting $i\coloneqq x+I$, we have that $i^2=\l(x+I\r)^2=-1+I$. This is usually written as $\textrm{`}i^2=-1\textrm{'}$, which is justified as follows.
* Observe that $\C=\l\{\alpha+\beta x+I\st\alpha,\beta\in\R\r\}\iso\R^2$, so we may identify each complex number as a pair $\tpl{\alpha,\beta}$ of real numbers. Indeed, this isomorphism may be turned into a ring isomorphism if we define
$$\begin{align}
    \tpl{\alpha_1,\beta_1}+\tpl{\alpha_2,\beta_2}&\coloneqq\tpl{\alpha_1+\beta_1,\alpha_2+\beta_2} \\
    \tpl{\alpha_1,\beta_1}\cdot\tpl{\alpha_2,\beta_2}&\coloneqq\tpl{\alpha_1\beta_1-\alpha_2\beta_2,\alpha_1\beta_2+\alpha_2\beta_1}.
\end{align}$$
Writing $\alpha+i\beta\coloneqq\tpl{\alpha,\beta}$, we have that $i^2=\l(0,1\r)^2=\l(-1,0\r)=-1$.<span style="float:right;">$\blacklozenge$</span>
