<div class="topSpace"></div>

Date Created: 27/03/2022 21:04:03
Tags: #Definition

Types: [[Finite-dimensional Vector Space]], [[Inner Product Space]]
Examples: [[Function Space (Linear Algebra)]]
Constructions: [[Linear Combination]], [[Linear Subspace]], [[Direct Product (Vector Space)]], [$\catvect$](Category%20of%20Vector%20Spaces.md)
Generalizations: _Not Applicable_

Properties: [[Basic properties of vector spaces]], [[Every vector space has a basis]]
Sufficiencies: [[Unique Representation Theorem (Hamel)]]
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $\tpl{K,+,\cdot,0,1}$ be a field. A **vector space over $K$** is a quintuple $\tpl{V,K,\boxplus,\boxdot,0_V}$ consisting of_
* _a set $V$ whose elements are called **vectors**,_
* _a field $K$ whose elements are called **scalars**,_
* _a binary operation $\boxplus:V\times V \to V$ called **vector addition**,_
* _a function $\boxdot:K\times V\to V$ called **scalar-vector multiplication**, and_
* _an element $0_V\in V$ called the **zero vector**,_

_such that $\tpl{V,\boxplus,0_V}$ is an Abelian group and_
* _$\axivec[1]$ (Compatibility of $\cdot$ and $\boxdot$)$\bf{.}$ $\fa\alpha_1,\alpha_2\in K,\fa v\in V:\alpha_1\boxdot\l(\alpha_2\boxdot v\r)=\l(\alpha_1\cdot\alpha_2\r)\boxdot v$._
* _$\axivec[2]$ (Left-identity of $\boxdot$)$\bf{.}$ $\fa v\in V:1\boxdot v=v$._
* _$\axivec[3]$ (Left-distribution of scalars)$\bf{.}$ $\fa\alpha\in K:\fa v,w\in V:\alpha\boxdot\l(v\boxplus w\r)=\l(\alpha\boxdot v\r)\boxplus\l(\alpha\boxdot w\r)$._
* _$\axivec[4]$ (Right-distribution of vectors)$\bf{.}$ $\fa\alpha_1,\alpha_2\in K:\fa v\in V:\l(\alpha_1+\alpha_2\r)\boxdot v=\l(\alpha_1\boxdot v\r)\boxplus\l(\alpha_2\boxdot v\r)$._

```

**Remark.** Drop the notations $\boxplus$ and $\boxdot$ unless it is clearer to distinguish them from $+$ and $\cdot$.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** Since $\tpl{V,\boxplus,0_V}$ is required to be a group, we see that the zero vector and the additive inverses of each vector are unique.<span style="float:right;">$\blacklozenge$</span>
