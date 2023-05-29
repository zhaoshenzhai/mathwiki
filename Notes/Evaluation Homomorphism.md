<div class="topSpace"></div>

Date Created: 22/11/2022 23:20:12
Tags: #Type/Definition #Topic/Ring_Theory

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [[Root (Polynomial)]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

Let $R$ be a commutative ring with unit and fix $r\in R$. The **evaluation polynomial at $r$** is the ring homomorphism
$$\begin{equation}
    \eval_r\!:R\l[x\r]\to R\ \ \ \ \ \ \ \ \textrm{\it{mapping}}\ \ \ \ \ \ \ \ \sum_{i=0}^{n}a_nx^n\mapsto\sum_{i=0}^{n}a_nr^n.
\end{equation}$$

```

**Remark.** To emphasize that we are <i>not</i> just $\textrm{`}$replacing$\textrm{'}$ $x$$\textrm{'}$s with $r$$\textrm{'}$s, we may write the polynomial as $\tpl{a_0,\dots,a_n}$, so
$$\begin{equation}
    \eval_r\!\tpl{a_0,\dots,a_n}\coloneqq\sum_{i=0}^{n}a_nr^n
\end{equation}$$
where the sum is an <i>actual</i> sum that is an element in $R$, and _not_ a polynomial.<span style="float:right;">$\blacklozenge$</span>
