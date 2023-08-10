<div class="topSpace"></div>

Date Created: 01/02/2022 20:24:48
Tags: #Type/Definition #Topic/Set_Theory/Later/Ordinal

Types: [[Prime Number]]
Examples: <i>Not Applicable</i>
Constructions: [[Set of Natural Numbers]], [[Finite Set]]
Generalizations: <i>Not Applicable</i>

Properties: [[Successor of natural number is a natural number]]
Sufficiencies: [[Fundamental Theorem of Arithmetic]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

An ordinal $\beta$ is called a <b>natural number</b> if for all $\alpha\in\ON$ with $\alpha\subseteq\beta$, either $\alpha=\em$ or $\alpha$ is a successor ordinal.

```

<b>Remark.</b> Recall that $\alpha\subseteq\beta\Leftrightarrow\alpha\in\beta\lor\alpha=\beta$.
* Letting $\alpha=\beta$ shows that natural numbers are either empty or successor ordinals.
* Letting $\alpha\in\beta$ shows that they cannot contain any limit ordinals.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Observe that $\em$ is (vacuously) an ordinal. It is also a natural number since its only subset is itself. Define
* $0\coloneqq\em$,
* $1\coloneqq S\l(0\r)=\l\{\em\r\}=\l\{0\r\}$,
* $2\coloneqq S\l(1\r)=\l\{\em,\l\{\em\r\}\r\}=\l\{0,1\r\}$,
* $3\coloneqq S\l(2\r)=\l\{\em,\l\{\em\r\},\l\{\em,\l\{\em\r\}\r\}\r\}=\l\{0,1,2\r\}$,

and so on.<span style="float:right;">$\blacklozenge$</span>
