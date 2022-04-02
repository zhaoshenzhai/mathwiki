---
alias: auto_aliasing
---

<br />
<br />

Date Created: 01/04/2022 23:35:19
Tags: #Definition #Closed

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [$\cat{Vect}$ is a locally-small category](Category%20of%20vector%20spaces%20is%20a%20locally-small%20category.md)

``` ad-Definition
title: Definition.

_Let $K$ be a field. The **category of vector spaces over $K$** is the (locally-small) category $\cat{Vect}_K$ defined by the following data:_
* _The objects are vector spaces $\l\langle V,K,+,\cdot,0\r\rangle$._

* _For all vector spaces $\l\langle V_1,K,+_1,\cdot_1,0_1\r\rangle$ and $\l\langle V_2,K,+_2,\cdot_2,0_2\r\rangle$, the morphisms from $\l\langle V_1,K,+_1,\cdot_1,0_1\r\rangle$ to $\l\langle V_2,K,+_2,\cdot_2,0_2\r\rangle$ are linear maps $T:V_1\to V_2$._
* _For all vector spaces $\l\langle V,K,+,\cdot,0\r\rangle$, the identity morphism on $\l\langle V,K,+,\cdot,0\r\rangle$ is the identity function $\id_V:V\to V$._
* _For all linear maps $T_1:\l\langle V_1,K,+_1,\cdot_1,0_1\r\rangle\to\l\langle V_2,K,+_2,\cdot_2,0_2\r\rangle$ and $T_2:\l\langle V_2,K,+_2,\cdot_2,0_2\r\rangle\to\l\langle V_3,K,+_3,\cdot_3,0_3\r\rangle$, the composite morphism of $T_2$ after $T_1$ is the composite linear map $T_2\circ T_1:V_1\to V_3$._

```
