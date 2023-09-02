---
mathLink-blocks:
    category-of-representations: $\catrep[k]{G}$
---

<div class="topSpace"></div>

Date Created: 02/09/2023 11:35:32
Tags: #Type/Definition #Topic/Representation_Theory

Types: <i>Not Applicable</i>
Examples: [[Regular Action#^regular-representation]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: [[Complex representations equivalent to finitely-generated modules over group algebra]]
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $G$ be a group. A  <b>representation</b> of $G$ is a pair $\tpl{\rho,V}$ where $V$ is a $k$-vector space and $\rho:G\to\GL\l(V\r)$ is a group homomorphism.
* The <b>category of representations of $G$</b> is the category $\catrep[k]{G}$ whose objects are representations of $G$ and whose morphisms $T:\tpl{\rho,V}\to\tpl{\tau,W}$ are maps $T\in\Hom_k\!\l(V,W\r)$ such that $T\circ\rho\l(g\r)=\tau\l(g\r)\circ T$ for all $g\in G$.
![[Images/2023-09-02_115145/image.svg|150]]

```
^category-of-representations

<b>Remark.</b> Usually, $k$ is taken to be $\C$ and $V$ is finite-dimensional. To emphasize, we say that $\rho$ is a <i>finite-dimensional complex representation</i> of $G$. We denote this subcategory as $\catfgrep[\C]{G}$.<span style="float:right;">$\blacklozenge$</span>
