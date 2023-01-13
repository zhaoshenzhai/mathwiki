<div class="topSpace"></div>

Date Created: 27/03/2022 21:04:03
Tags: #Definition #Topics/Linear_Algebra

Types: [[Finite-dimensional Vector Space]], [[Inner Product Space]]
Examples: [[Function Space (Linear Algebra)]], [[Vector Space of Polynomials]]
Constructions: [[Linear Combination]], [[Linear Map]], [[Linear Subspace]], [[External Direct Product (Vector Space)]], [[Category of Vector Spaces]]
Generalizations: _Not Applicable_

Properties: [[Basic properties of vector spaces]], [[Every vector space has a basis]]
Sufficiencies: [[Unique Representation Theorem (Linear Algebra)]]
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $\tpl{K,+,\cdot,0,1}$ be a field. A **vector space over $K$** is a quintuple $\tpl{V,K,\boxplus,\boxdot,0_V}$ consisting of_
* _an Abelian group $\tpl{V,\boxplus,0_V}$ whose elements are called **vectors**,_
* _a field $K$ whose elements are called **scalars**,_
* _a binary operation $\boxplus:V\times V \to V$ called **vector addition**,_
* _a group action $\boxdot:K\times V\to V$ called **scalar-vector multiplication**, and_
* _an element $0_V\in V$ called the **zero vector**,_

_such that the distributive laws hold:_
* _(Left-distribution of scalars)$\bf{.}$ $\fa\alpha\in K:\fa v,w\in V:\alpha\boxdot\l(v\boxplus w\r)=\l(\alpha\boxdot v\r)\boxplus\l(\alpha\boxdot w\r)$._
* _(Right-distribution of vectors)$\bf{.}$ $\fa\alpha_1,\alpha_2\in K:\fa v\in V:\l(\alpha_1+\alpha_2\r)\boxdot v=\l(\alpha_1\boxdot v\r)\boxplus\l(\alpha_2\boxdot v\r)$._

```

**Remark.** Drop the notations $\boxplus$ and $\boxdot$ unless it is clearer to distinguish them from $+$ and $\cdot$.<span style="float:right;">$\blacklozenge$</span>
