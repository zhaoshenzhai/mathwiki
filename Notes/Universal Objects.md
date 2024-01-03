<div class="topSpace"></div>

Date Created: 30/08/2023 12:01:07
References:
Tags: #Type/Definition #Topic/Category_Theory

Types: <i>Not Applicable</i>
Examples: [[Abelianization]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

An object $A\in\Obj\l(\cat{C}\r)$ is said to be <b>initial</b> if $\Hom\l(A,B\r)$ is a singleton for all objects $B\in\Obj\l(\cat{C}\r)$.
* Similarly, $A$ is <b>final</b> if $\Hom\l(B,A\r)$ is a singleton for all objects $B\in\Obj\l(\cat{C}\r)$. An object is a <b>zero</b> object if it is both initial and final.

```

<b>Remark.</b> Initial objects are unique up to a unique isomorphism. Indeed, if $A,A'\in\Obj\l(\cat{C}\r)$ are both initial, then $\Hom\l(A,A'\r)=\l\{f\r\}$ and $\Hom\l(A',A\r)=\l\{g\r\}$ for some $f$ and $g$. Note that $g\circ f\in\Hom\l(A,A\r)$, which is also a singleton. But $1_A\in\Hom\l(A,A\r)$, so $g\circ f=1_A$. Similarly we have $f\circ g=1_B$, so $A\iso A'$.
* Similarly for final objects.<span style="float:right;">$\blacklozenge$</span>
