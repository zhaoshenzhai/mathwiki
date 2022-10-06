<div class="topSpace"></div>

Date Created: 01/04/2022 18:16:33
Tags: #Definition

Types: [[Linear Isomorphism]], [[Linear Operator]]
Examples: [[Left-multiplication of Matrices]], [[Transposition (Matrix)]]
Constructions: [[Matrix Representation of a Linear Map]], [[Kernel; Null Space]], [[Image; Column Space]], [[Composition (Linear Map)]], [[Vector Space of Linear Maps]]
Generalizations: [[Multilinear Map]]

Properties: [[Linear map is injective iff kernel vanishes]], [[Inverse of linear map is linear]], [[Linear map fixes zero vector]]
Sufficiencies: [[Existence of unique linear map via action on basis vectors]], [[Criteria for equality of linear maps via spanning set]]
Equivalences: [[Action of linear map repr under basis left-multiplication of matrix representation]]
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field and let $V$ and $W$ be vector spaces over $K$. A **linear map from $V$ to $W$** is a function $T:V\to W$ such that:_
* _$\axilin[1]$ (Additivity)$\bf{.}$ $\fa v_1,v_2\in V:T\l(v_1+v_2\r)=T\l(v_1\r)+T\l(v_2\r)$._
* _$\axilin[2]$ (Homogeneity)$\bf{.}$ $\fa\alpha\in K,\fa v\in V:T\l(\alpha v\r)=\alpha T\l(v\r)$._

```

**Remark.** Equivalently, $\axilin[1]$ and $\axilin[2]$ can be combined into
* $\axilin$ (Linearity)$\bf{.}$ $\fa\alpha\in K,\fa v_1,v_2\in V:T\l(\alpha v_1+v_2\r)=\alpha T\l(v_1\r)+T\l(v_2\r)$.

To see this, observe that $\axilin$ implies $\axilin[1]$ and $\axilin[2]$ since we can set $\alpha=1$ to obtain $\axilin[1]$ and set $v_2=0$ to obtain $\axilin[2]$. Conversely, we have
$$\begin{align}
    T\l(\alpha v_1+v_2\r)&=T\l(\alpha v_1\r)+T\l(v_2\r) && \textrm{Additivity} \\
    &=\alpha T\l(v_1\r)+T\l(v_2\r). && \textrm{Homogeneity}\exqedin
\end{align}$$
