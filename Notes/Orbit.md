<div class="topSpace"></div>

Date Created: 04/05/2023 23:00:23
Tags: #Type/Definition #Topic/Group_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Transitive Action]]
Generalizations: <i>Not Applicable</i>

Properties: [[Orbit-Stabilizer Theorem]], [[Class Equation]], [[Cauchy-Frobenius Formula]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Fundamental Theorem of Equivalence Relations]]

``` ad-Definition
title: Definition.

Let $G$ be a group acting on a set $X$. The **orbit of $x$ under $G$** is the set $Gx\coloneqq\l\{gx\in X\mid g\in G\r\}$.

```

<b>Remark.</b> Orbits induce a canonical equivalence relation on $X$ by defining $x\sim y$ iff $y=gx$ for some $g\in G$, which makes them the equivalence classes under this relation. Thus the orbits $Gx$ are elements in the quotient set $X/G\coloneqq X/\!\sim$, so we have a partition $X=\coprod_{i\in I}Gx_i$ of $X$ into its $\textrm{`}$connected components$\textrm{'}$. Within any one $Gx_i$, the restricted action is transitive.<span style="float:right;">$\blacklozenge$</span>
