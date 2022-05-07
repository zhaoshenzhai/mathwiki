<br />
<br />

Date Created: 01/04/2022 18:16:33
Tags: #Definition #Closed

Types: [[Linear Isomorphism]], [[Linear Operator]]
Examples: [[Linear map Induced by a Matrix]], [[Transposition]], [[Identity function is a linear map]]
Constructions: [[Set of Linear Maps]], [[Kernel]]
Generalizations: _Not Applicable_

Properties: [[Composition of linear maps is a linear map]], [[Image of linear map is a subspace of its codomain]], [[Linear map fixes zero vector]]
Sufficiencies: [[Existence of unique linear map via action on basis vectors]], [[Criteria for equality of linear maps via spanning set]]
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field and consider the vector spaces $V$ and $W$ over $K$. A **linear map from $V$ to $W$** is a function $T:V\to W$ such that_
* _$\axilin[1]$ (Additivity)$\bf{.}$ $\fa v_1,v_2\in V:T\l(v_1+v_2\r)=T\l(v_1\r)+T\l(v_2\r)$._
* _$\axilin[2]$ (Homogeneity)$\bf{.}$ $\fa\alpha\in K,\fa v\in V:T\l(\alpha v\r)=\alpha T\l(v\r)$._

```

**Remark.** Equivalently, $\axilin[1]$ and $\axilin[2]$ can be combined into
* $\axilin$ (Linearity)$\bf{.}$ $\fa\alpha\in K,\fa v_1,v_2\in V:T\l(\alpha v_1+v_2\r)=\alpha T\l(v_1\r)+T\l(v_2\r)$.

To see this, observe that $\axilin$ implies $\axilin[1]$ and $\axilin[2]$ since we can set $\alpha=1$ to obtain $\axilin[1]$ and set $v_2=0$ to obtain $\axilin[2]$. Conversely, observe that
$$\begin{align}
    T\l(\alpha v_1+v_2\r)&=T\l(\alpha v_1\r)+T\l(v_2\r) && \textrm{Additivity} \\
    &=\alpha T\l(v_1\r)+T\l(v_2\r). && \textrm{Homogeneity}\exqedin
\end{align}$$
---

**Remark.** By induction, we see that
$$\begin{equation}
    T\l(\sum_{i=1}^n\alpha_iv_i\r)=\sum_{i=1}^n\alpha_iT\l(v_i\r)
\end{equation}$$
for all $v_1,\dots,v_n\in V$ and $\alpha_1,\dots,\alpha_n\in K$.<span style="float:right;">$\blacklozenge$</span>
