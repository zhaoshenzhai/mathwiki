<div class="topSpace"></div>

Date Created: 14/01/2022 15:43:46
Tags: #Type/Definition #Topic/Set_Theory

Types: <i>Not Applicable</i>
Examples: [[Intersection of empty set is a proper class]] 
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Axiom Schema of Specification]], [[Axiom of Extensionality]]

``` ad-Definition
title: Definition.

Let $\mc{A}$ be a non-empty set. The <b>intersection of $\mc{A}$</b> is the set
$$\begin{equation}
    \bigcap\mc{A}\coloneqq\l\{a\st\fa A\in\mc{A}:a\in A\r\}.
\end{equation}$$

```

<b>Remark.</b> The intersection $\bigcap\mc{A}$ exists and is unique by $\axispec$ (since $a\in A$ for any $A\in\mc{A}$) and $\axiext$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> One can also write the intersection $\bigcap\mc{A}$ using ‘index’ notation as $\bigcap_{i\in I}A_i$ This is formalized by viewing $\mc{A}$ as an indexed family $\l\{A_i\r\}_{i\in I}$, so the focus shifts from $\mc{A}$ to its elements $A_i$.<span style="float:right;">$\blacklozenge$</span>
