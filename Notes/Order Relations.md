---
mathLink-blocks:
    preorder-category: Preorder
    category-of-preordered-sets: $\catord$
---

<div class="topSpace"></div>

Date Created: 21/02/2022 18:38:44
Tags: #Type/Definition #Topic/Set_Theory

Types: <i>Not Applicable</i>
Examples: [[Topological Space]]
Constructions: [[Order Space]], [[Convergence of Nets]], [[Well-founded Relation]], [[Initial Segment]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $X$ be a set. A binary relation $\leq$ on $X$ is a <b>preorder</b> on $X$ if $\leq$ is reflexive and transitive on $X$.
* A <b>partial order</b> is an antisymmetric preorder and a <b>total order</b> is a connected partial order. The pair $\tpl{X,\leq}$ is called a <b>(partially)</b> ordered set.
* A <b>directed order</b> is a preorder $\leq$ on $X$ in which any two $x,x'\in X$ admits an upper bound. The pair $\tpl{X,\leq}$ is called a <b>directed set</b>.

The <b>category of preordered sets</b> is the category $\catord$ whose objects are preordered sets and whose morphisms are order-preserving maps.

```
^category-of-preordered-sets

<b>Remark.</b> A set $X$ equipped with a partial order $\leq$ is also called a <i>poset</i>. Fix a subset $A\subseteq X$ of a poset $\tpl{X,\leq}$.
* A <i>minimal</i> element of $A$ is an element $m\in A$ such that $\lnot(a<m)$ for all $a\in A$, and the <i>least</i> element of $A$ is the $l\in A$ such that $l\leq a$ for all $a\in A$. Minimal elements are not necessarily unique, but least elements are. They coincide for totally-ordered sets. Similarly for <i>maximal</i> and <i>greatest</i> elements.
* A <i>lower bound</i> of $A$ is an element $l\in X$ such that $l\leq a$ for all $a\in A$. They are not necessarily unique, but the <i>greatest lower bound</i> is, i.e. a lower bound $l$ of $A$ such that $l'\leq l$ for all lower bounds $l'$ of $A$, in which case we write $\inf A\coloneqq l$ and also call it the <i>infimum</i>. Dually, we also have <i>upper bounds</i> and the <i>least upper bound/supremum</i> $\sup A$. A poset $\tpl{X,\leq}$ in which every non-empty subset bounded from above admits a supremum is said to be <i>Dedekind-complete</i>.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> A preordered set induces a category whose objects are elements $x\in X$ and whose morphisms $x\to x'$ are singletons $\l\{\tpl{x,x'}\r\}$ if $x\leq x'$ and empty otherwise.
* Conversely, a category $C$ is said to be a <i>preorder category</i> if for any $x,x'\in C$, there is at most one morphism $x\to x'$.<span style="float:right;">$\blacklozenge$</span> ^preorder-category
