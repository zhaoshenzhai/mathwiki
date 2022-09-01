<div class="topSpace"></div>

Date Created: 17/01/2022 13:00:40
Tags: #Definition

Types: _Not Applicable_
Examples: [[Union of empty set is empty]]
Constructions: [[Set of Unions and Intersections]], [[Successor]]
Generalizations: _Not Applicable_

Properties: [[Basic properties of unions, intersections, and power sets]], [[De Morgan's Laws]]
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Axiom of Union]], [[Axiom of Extensionality]]

``` ad-Definition
title: Definition.

_Let $\mc{A}$ be a set. The **union of $\mc{A}$** is the set $\bigcup\mc{A}$ whose elements are exactly those that belong to some $A\in\mc{A}$. Formally, $\axiunion$ posits the existence of a set $\bigcup\mc{A}$ such that_
$$\begin{equation}
    \fa a\l[a\in\bigcup\mc{A}\Leftrightarrow\ex A\l(a\in A\land A\in\mc{A}\r)\r].
\end{equation}$$
_Such a set $\bigcup\mc{A}$ is unique by $\axiext$._

```

**Remark.** For any sets $A_1,A_2,A_3,\dots$, write $A_1\cup A_2\coloneqq\bigcup\l\{A_1,A_2\r\}$, $A_1\cup A_2\cup A_3\coloneqq\l(A_1\cup A_2\r)\cup A_3$, etc.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** One can also write the union $\bigcup\mc{A}$ using $\textrm{`}$index$\textrm{'}$ notation as $\bigcup_{i\in I}A_i$. This is formalized by viewing $\mc{A}$ as an indexed family $\l\{A_i\r\}_{i\in I}$, so the focus shifts from $\mc{A}$ to its elements $A_i$. Note that $\axiunion$ now takes the form
$$\begin{equation}
    \fa a\l(a\in\bigcup_{i\in I}A_i\Leftrightarrow\ex i\in I:a\in A_i\r),
\end{equation}$$
since specifying $i\in I$ uniquely determines $A_i\in\mc{A}$ and conversely too.<span style="float:right;">$\blacklozenge$</span>
