<br />
<br />

Date Created: 27/03/2022 21:04:03
Tags: #Definition #In_Progress

Types: _Not Applicable_
Examples: [[Real Coordinate Space]]
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $\l\langle K,+,\cdot\r\rangle$ be a field. A **vector space over $K$** is a quadruple $\l\langle V,K,\oplus,\odot\r\rangle$ consisting of_
* _a set $V$ whose elements are called **vectors**,_
* _a field $K$ whose elements are called **scalars**,_
* _a binary operation $\oplus:V\times V \to V$ called **vector addition**, and_
* _a function $\odot:K\times V\to V$ called **scalar-vector multiplication**,_

_such that $\l\langle V,\oplus\r\rangle$ is an Abelian group and_
* _$\axivec[1]$ (Compatibility)$\bf{.}$ $\fa\alpha_1,\alpha_2\in K,\fa\v{v}\in V:\alpha_1\odot\l(\alpha_2\odot\v{v}\r)=\l(\alpha_1\cdot\alpha_2\r)\odot\v{v}$._
* _$\axivec[2]$ (Identity)$\bf{.}$ $\ex\v{1}\in V,\fa\v{v}\in V:\v{1}\odot\v{v}=v$._
* _$\axivec[3]$ (Left-distributivity of scalars)$\bf{.}$ $\fa\alpha\in K:\fa\v{v},\v{w}\in V:\alpha\odot\l(\v{v}\oplus \v{w}\r)=\l(\alpha\odot\v{v}\r)\oplus\l(\alpha\odot\v{w}\r)$._
* _$\axivec[4]$ (Right-distributivity of vectors)$\bf{.}$ $\fa\alpha_1,\alpha_2\in K:\fa\v{v}\in V:\l(\alpha_1+\alpha_2\r)\odot\v{v}=\l(\alpha_1\odot\v{v}\r)\oplus\l(\alpha_2\odot\v{w}\r)$._

```

**Remark.** In this context, the identity element of $\l\langle V,\oplus\r\rangle$ is referred to as the **neutral element of $V$** and is denote by $\v{0}$.<span style="float:right;">$\blacklozenge$</span>
