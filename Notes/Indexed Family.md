<div class="topSpace"></div>

Date Created: 29/01/2022 10:38:17
Tags: #Type/Definition #Topic/Set_Theory

Types: <i>Not Applicable</i>
Examples: [[Tuples and Sequences]]
Constructions: <i>Not Applicable</i>
Generalizations: [[Diagram]]

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $I$ and $\mc{A}$ be sets. An **$I$-indexed family of sets in $\mc{A}$** is a function $f:I\to\mc{A}$, where $I$ is thought of as an **indexing set**.

```

<b>Remark.</b> If $f:I\to\mc{A}$ is an indexed family, write $A_i\coloneqq f\l(i\r)$ and $\l\{A_i\r\}_{i\in I}\coloneqq f$ instead. A function is considered to be an indexed family if the focus is on the set $\mc{A}$ where we allow duplicate elements. The set $\mc{A}$ by itself excludes this possibility, so we need to $\textrm{`}$index$\textrm{'}$ the elements $A\in\mc{A}$ to differentiate duplicate elements.
* Indeed, we shall sometimes call $\l\{A_i\r\}$ an **indexed set** and, if $\mc{A}\subseteq\mc{B}$ for some set $\mc{B}$, we say that $\l\{A_i\r\}$ is an **indexed subset of $\mc{B}$**. Abusing notation, we write $\l\{A_i\r\}\subseteq\mc{B}$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Usually, the index set $I$ carries a total order. However, it need not be enumerable (think $I=\R$).<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Indexed families can be defined as class functions too, albeit informally.<span style="float:right;">$\blacklozenge$</span>
