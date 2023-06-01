<div class="topSpace"></div>

Date Created: 22/11/2022 23:20:12
Tags: #Type/Definition #Topic/Ring_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Root (Polynomial)]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $R$ be a commutative ring with unit and fix $r\in R$. The <b>evaluation polynomial at $r$</b> is the ring homomorphism
$$\begin{equation}
    \eval_r\!:R\l[x\r]\to R\ \ \ \ \ \ \ \ \textrm{\it{mapping}}\ \ \ \ \ \ \ \ \sum_{i=0}^{n}a_nx^n\mapsto\sum_{i=0}^{n}a_nr^n.
\end{equation}$$

```

<b>Remark.</b> To emphasize that we are <i>not</i> just ‘replacing’ $x$’s with $r$’s, we may write the polynomial as $\tpl{a_0,\dots,a_n}$, so
$$\begin{equation}
    \eval_r\!\tpl{a_0,\dots,a_n}\coloneqq\sum_{i=0}^{n}a_nr^n
\end{equation}$$
where the sum is an <i>actual</i> sum that is an element in $R$, and _not_ a polynomial.<span style="float:right;">$\blacklozenge$</span>
