<div class="topSpace"></div>

Date Created: 16/11/2022 14:28:08
Tags: #Type/Definition #Topic/Ring_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Ideal is prime iff quotient is an integral domain]], [[Ideal is maximal iff quotient is a field]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Quotient ring is a ring]], [[Basic properties of cosets]]

``` ad-Definition
title: Definition.

Let $I\subseteq R$ be an ideal of a ring $R$. Then the <b>quotient ring of $R$ under $I$</b> is the ring $\tpl{R/I,+,\cdot}$, where
* $\tpl{R/I,+}$ is the quotient group of $R$ under $I$ and
* $\cdot$ is the binary operation on $R/I$ defined by $\l(r_1+I\r)\cdot\l(r_2+I\r)\coloneqq r_1r_2+I$ for all $r_1,r_2\in R$.

```

<b>Remark.</b> If $I$ is only a left-ideal of $R$, then the quotient group $R/I$ no longer has a ring structure. However, it is still a left $R$-module via the action $R\times R/I\to R/I:\tpl{r,x+I}\mapsto rx+I$. This map is well-defined since for any $x+I=y+I\in R/I$ and any $r\in R$, we have that $rx-ry=r\l(x-y\r)\in I$, and hence $rx+I=ry+I$. The $R$-module axioms then follow from the ring axioms for $R$.<span style="float:right;">$\blacklozenge$</span>
