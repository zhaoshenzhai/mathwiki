<div class="topSpace"></div>

Date Created: 22/02/2022 12:14:26
Tags: #Type/Definition #Later/Category_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Opposite category is a category]]

``` ad-Definition
title: Definition.

Let $\cat{C}$ be a category. The **opposite category of $\cat{C}$** is the category $\cat{C}^\textrm{op}$ whose objects are $\cat{C}$-objects and whose morphisms are $\cat{C}$-morphisms with arrows reversed. Formally,
* $\Obj\l(\cat{C}^\textrm{op}\r)\coloneqq\Obj\l(\cat{C}\r)$,
* for all $X,Y\in\Obj\l(\cat{C}^\textrm{op}\r)$, $\Hom_{\cat{C}^\textrm{op}}\!\l(X,Y\r)\coloneqq\Hom_\cat{C}\!\l(Y,X\r)$,
* for all $X\in\Obj\l(\cat{C}^\textrm{op}\r)$, the $\cat{C}^\textrm{op}$-identity on $X$ is the $\cat{C}$-identity on $X$, and
* for all $X,Y,Z\in\Obj\l(\cat{C}^\textrm{op}\r)$, the composition function is
$$\begin{equation}
    \begin{aligned}
        \ast:\Hom_{\cat{C}^\textrm{op}}\!\l(X,Y\r)\times\Hom_{\cat{C}^\textrm{op}}\!\l(Y,Z\r)&\to\Hom_{\cat{C}^\textrm{op}}\!\l(X,Z\r)\\
        \tpl{f,g}&\mapsto\ast\l(f,g\r)\eqqcolon g\ast f\coloneqq f\circ g
    \end{aligned}
\end{equation}$$
where $f\circ g$ is the $\cat{C}$-composite of $f$ after $g$.

```

<b>Remark.</b> It is obvious that $\l(\cat{C}^\textrm{op}\r)^\textrm{op}=\cat{C}$.<span style="float:right;">$\blacklozenge$</span>
