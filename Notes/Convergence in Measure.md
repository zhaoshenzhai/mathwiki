<div class="topSpace"></div>

Date Created: 07/11/2023 14:03:38
Tags: #Type/Definition #In_Progress

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $\tpl{X,\mu}$ be a measure space and fix $\alpha\geq0$. For measurable functions $f,g:X\to\R$, set $\Delta_\alpha\!\l(f,g\r)\coloneqq\l\{x\in X\st\l|f\l(x\r)-g\l(x\r)\r|\geq\alpha\r\}$ and $\delta_\alpha\!\l(f,g\r)\coloneqq\mu\l(\Delta_\alpha\!\l(f,g\r)\r)$.
* We say that a sequence $f_n:X\to\R$ of measurable functions <b>converges in measure</b> to $f:X\to\R$, and write $f_n\to_\mu\!f$, if $\delta_\alpha\!\l(f_n,f\r)\to0$ for all $\alpha>0$. It is said to be <b>Cauchy in measure</b> if $\delta_\alpha\!\l(f_n,f_m\r)\to0$ as $n,m\to\infty$ for all $\alpha>0$.

```

<b>Remark.</b> For a fixed $\alpha>0$, the function $\delta_\alpha:X^\R\times X^\R\to\R$ <i>fails</i> the triangle-inequality. However, the family $\l\{\delta_\alpha\r\}$ satisfies a ‘quasi-triangle-inequality’, which states that $\delta_{\alpha+\beta}\!\l(f,h\r)\leq\delta_\alpha\!\l(f,g\r)+\delta_\beta\!\l(g,h\r)$, which follows from $\Delta_{\alpha+\beta}\!\l(f,h\r)\subseteq\Delta_\alpha\!\l(f,g\r)+\Delta_\beta\!\l(g,h\r)$. Indeed, for $x\in X$, if $\l|f\l(x\r)-h\l(x\r)\r|\geq\alpha+\beta$, then either $\l|f\l(x\r)-g\l(x\r)\r|\geq\alpha$ or $\l|g\l(x\r)-h\l(x\r)\r|\geq\beta$ by the triangle-inequality in $\R$. This quasi-triangle-inequality gives us many familiar properties that hold in metric spaces:
* 
