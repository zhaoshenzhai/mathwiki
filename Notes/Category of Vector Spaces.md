---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 01/04/2022 23:35:19
Tags: #Definition #Closed

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [$\catvect$ is a locally-small category](Category%20of%20vector%20spaces%20is%20a%20locally-small%20category.md)

``` ad-Definition
title: Definition.

_Let $K$ be a field. The **category of vector spaces over $K$** is the (locally-small) category $\catvect$ defined by the following data:_
* _The objects are vector spaces $\tpl{V,K,+,\cdot,0}$._

* _For all vector spaces $\tpl{V_1,K,+_1,\cdot_1,0_1}$ and $\tpl{V_2,K,+_2,\cdot_2,0_2}$, the morphisms from $\tpl{V_1,K,+_1,\cdot_1,0_1}$ to $\tpl{V_2,K,+_2,\cdot_2,0_2}$ are linear maps $T:V_1\to V_2$._
* _For all vector spaces $\tpl{V,K,+,\cdot,0}$, the identity morphism on $\tpl{V,K,+,\cdot,0}$ is the identity function $\id_V:V\to V$._
* _For all linear maps $T_1:\tpl{V_1,K,+_1,\cdot_1,0_1}\to\tpl{V_2,K,+_2,\cdot_2,0_2}$ and $T_2:\tpl{V_2,K,+_2,\cdot_2,0_2}\to\tpl{V_3,K,+_3,\cdot_3,0_3}$, the composite morphism of $T_2$ after $T_1$ is the composite linear map $T_2\circ T_1:V_1\to V_3$._

```
