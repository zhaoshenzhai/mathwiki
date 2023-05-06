<div class="topSpace"></div>

Date Created: 14/01/2022 15:43:46
Tags: #Type/Definition #Topic/Set_Theory

Types: _Not Applicable_
Examples: [[Intersection of empty set is a proper class]] 
Constructions: [[Set of Unions and Intersections]]
Generalizations: _Not Applicable_

Properties: [[Basic properties of unions, intersections, and power sets]], [[De Morgan's Laws]], [[Image of intersection subset of intersection of images; left-unique implies equality]], [[Preimage of intersection is intersection of preimages; right-unique implies equality]], [[Cartesian product of intersections]]
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Axiom Schema of Specification]], [[Axiom of Extensionality]]

``` ad-Definition
title: Definition.

_Let $\mc{A}$ be a non-empty set. The **intersection of $\mc{A}$** is the set_
$$\begin{equation}
    \bigcap\mc{A}\coloneqq\l\{a\mid\fa A\in\mc{A}:a\in A\r\}.
\end{equation}$$

```

**Remark.** The intersection $\bigcap\mc{A}$ exists and is unique by $\axispec$ (since $a\in A$ for any $A\in\mc{A}$) and $\axiext$.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** One can also write the intersection $\bigcap\mc{A}$ using $\textrm{`}$index$\textrm{'}$ notation as $\bigcap_{i\in I}A_i$ This is formalized by viewing $\mc{A}$ as an indexed family $\l\{A_i\r\}_{i\in I}$, so the focus shifts from $\mc{A}$ to its elements $A_i$.<span style="float:right;">$\blacklozenge$</span>
