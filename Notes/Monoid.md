---
mathLink-blocks:
    category-of-monoids: $\catmon$
---

<div class="topSpace"></div>

Date Created: 03/06/2023 23:00:36
Tags: #Type/Definition #Topic/Group_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Group]], [[Ring]], [[Monoid Ring or Algebra]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

A <b>monoid</b> is a triple $\tpl{M,\ast,e}$ where $\ast$ is an associative binary operation and $e\in M$ is a constant such that $m\ast e=m=e\ast m$ for all $m\in M$.
* A <b>monoid homomorphism</b> from $M$ to $N$ is a function $\phi:M\to N$ such that $\phi\l(m_1\ast m_2\r)=\phi\l(m_1\r)\ast\phi\l(m_2\r)$ for all $m_1,m_2\in M$.
* The <b>category of monoids</b> is the category $\catmon$ whose objects are monoids and whose morphisms are monoid homomorphisms.

```
^category-of-monoids
