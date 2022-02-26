<br />
<br />

Date Created: 17/01/2022 13:00:40
Context: #FOL $\to$ #ZF
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: [[Union of empty set is empty]]
Constructions: [[Set of unions and intersections]], [[Successor]]
Generalizations: _Not Applicable_

Properties: [[Union of unions is a union]], [[De Morgan's Laws]], [[Union is monotone w.r.t. subsets]], [[Union with another set is monotone w.r.t. subsets]], [[Element of set is a subset of its union]], [[Union of subsets is a subset of union]], [[Union of set of subsets is a subset]], [[Union distributes over binary intersection]]
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $u$ be a set and let $z$ be any set asserted by the Axiom of Union. The **union of $u$** is the set_
$$\begin{equation}
    \bigcup u\coloneqq\l\{x\in z\mid\ex v\l(x\in v\land v\in u\r)\r\}.
\end{equation}$$

```

**Remark.** For the pair set $\l\{u,v\r\}$, write $u\cup v\coloneqq\bigcup\l\{u,v\r\}$.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** One can also write the union $\bigcup u$ using $\textrm{`}$index$\textrm{'}$ notation as $\bigcup_{v\in u}v$.<span style="float:right;">$\blacklozenge$</span>
