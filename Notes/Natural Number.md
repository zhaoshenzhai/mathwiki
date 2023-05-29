<div class="topSpace"></div>

Date Created: 01/02/2022 20:24:48
Tags: #Type/Definition #Later/Set_Theory

Types: [[Prime Number]]
Examples: _Not Applicable_
Constructions: [[Set of Natural Numbers]], [[Finite Set]]
Generalizations: _Not Applicable_

Properties: [[Successor of natural number is a natural number]]
Sufficiencies: [[Fundamental Theorem of Arithmetic]]
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

An ordinal $\beta$ is called a **natural number** if
$$\begin{equation}
    \fa\alpha\in\ON:\alpha\subseteq\beta\Rightarrow\l(\alpha=\em\lor\alpha\textrm{\it{ is a successor ordinal}}\r).
\end{equation}$$

```

**Remark.** Recall that $\alpha\subseteq\beta\Leftrightarrow\alpha\in\beta\lor\alpha=\beta$.
* Letting $\alpha=\beta$ shows that natural numbers are either empty or successor ordinals.
* Letting $\alpha\in\beta$ shows that they cannot contain any limit ordinals.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** Observe that $\em$ is (vacuously) an ordinal. It is also a natural number since its only subset is itself. Define
* $0\coloneqq\em$,
* $1\coloneqq S\l(0\r)=\l\{\em\r\}=\l\{0\r\}$,
* $2\coloneqq S\l(1\r)=\l\{\em,\l\{\em\r\}\r\}=\l\{0,1\r\}$,
* $3\coloneqq S\l(2\r)=\l\{\em,\l\{\em\r\},\l\{\em,\l\{\em\r\}\r\}\r\}=\l\{0,1,2\r\}$,

and so on.<span style="float:right;">$\blacklozenge$</span>
