<div class="topSpace"></div>

Date Created: 26/01/2022 17:34:39
Tags: #Type/Definition #Topic/Set_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i> 
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Preimage of union is union of preimages]], [[Preimage of intersection is intersection of preimages; right-unique implies equality]], [[Complement of preimages subset of preimage of complement; right-unique implies equality]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $R$ be a binary relation and let $T$ be a set. The **preimage of $T$ under $R$** is the set
$$\begin{equation}
    \preim_R\l(T\r)\coloneqq R^{-1}\l[T\r]\coloneqq\ran\l(R^{-1}\rest T\r).
\end{equation}$$

```

<b>Remark.</b> Expanding, we see that $\preim_R\l(T\r)=\l\{x\mid\ex y\in T:xRy\r\}$. Observe that $\preim_R\l(\ran R\r)=\dom R$.<span style="float:right;">$\blacklozenge$</span>
