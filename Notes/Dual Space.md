<div class="topSpace"></div>

Date Created: 25/01/2023 09:37:02
Tags: #Type/Definition #Topic/Module_Theory/Later/Dual

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Dual Basis]]
Generalizations: <i>Not Applicable</i>

Properties: [[Vector space isomorphic to double dual (finite-dim.)]], [[Riesz Representation Theorem]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: [[Matrix representation of dual map is the transpose]]
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $V$ be a $K$-vector space. The <b>dual space of $V$</b> is the vector space $V^\dual\coloneqq\Hom\l(V,K\r)$, whose elements $\omega:V\to K$ are said to be <b>linear forms</b>.

```

<b>Remark.</b> Taking the dual defines a contravariant functor $\l(\slot\r)^\dual:\catvect[k]\to\catvect[k]$ mapping each morphism $T:V\to W$ to the morphism $T^\dual:W^\dual\to V^\dual$ defined by $T^\dual\!\l(\gamma\r)\coloneqq\gamma\circ T$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> If $V$ is finite-dimensional, we have that $\dim V^\dual=\dim\Hom\l(V,K\r)=\dim V\cdot\dim K=\dim V$, so $V\iso V^\dual$. However, this isomorphism depends on a choice of basis, and is hence not ‘natural’.<span style="float:right;">$\blacklozenge$</span>
