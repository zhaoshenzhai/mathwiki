<br />
<br />

Date Created: 27/03/2022 21:04:03
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: [[Tuple Space (Linear Algebra)]], [[Vector Space of Matrices]]
Constructions: [[Vector]], [[Linear Transformation]]
Generalizations: _Not Applicable_

Properties: [[Algebraic consequences (vector space)]]
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $\l\langle K,+,\cdot,0,1\r\rangle$ be a field. A **vector space over $K$** is a quintuple $\l\langle V,K,\oplus,\odot,0_V\r\rangle$ consisting of_
* _a set $V$ whose elements are called **vectors**,_
* _a field $K$ whose elements are called **scalars**,_
* _a binary operation $\oplus:V\times V \to V$ called **vector addition**,_
* _a function $\odot:K\times V\to V$ called **scalar-vector multiplication**, and_
* _an element $0_V\in V$ called the **zero vector**,_

_such that $\l\langle V,\oplus,0_V\r\rangle$ is an Abelian group and_
* _$\axivec[1]$ (Compatibility of $\cdot$ and $\odot$)$\bf{.}$ $\fa\alpha_1,\alpha_2\in K,\fa v\in V:\alpha_1\odot\l(\alpha_2\odot v\r)=\l(\alpha_1\cdot\alpha_2\r)\odot v$._
* _$\axivec[2]$ (Left-identity of $\odot$)$\bf{.}$ $\fa v\in V:1\odot v=v$._
* _$\axivec[3]$ (Left-distributivity of scalars)$\bf{.}$ $\fa\alpha\in K:\fa v,w\in V:\alpha\odot\l(v\oplus w\r)=\l(\alpha\odot v\r)\oplus\l(\alpha\odot w\r)$._
* _$\axivec[4]$ (Right-distributivity of vectors)$\bf{.}$ $\fa\alpha_1,\alpha_2\in K:\fa v\in V:\l(\alpha_1+\alpha_2\r)\odot v=\l(\alpha_1\odot v\r)\oplus\l(\alpha_2\odot v\r)$._

```

**Remark.** Drop the notations $\oplus$ and $\odot$ unless it is clearer to distinguish them from $+$ and $\cdot$.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** Since $\l\langle V\oplus,0_V\r\rangle$ is required to be a group, we see that the zero vector and the additive inverses of each vector are unique.<span style="float:right;">$\blacklozenge$</span>
