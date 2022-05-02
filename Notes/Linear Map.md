<br />
<br />

Date Created: 01/04/2022 18:16:33
Tags: #Definition #Closed

Types: [[Linear Isomorphism]], [[Linear Operator]]
Examples: [[Linear map Induced by a Matrix]], [[Identity function is a linear map]]
Constructions: [[Set of Linear Maps]]
Generalizations: _Not Applicable_

Properties: [[Composition of linear maps is a linear map]], [[Linear map fixes zero vector]]
Sufficiencies: [[Linear map on tuple spaces is induced by a unique matrix]]
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field and consider the vector spaces $\mc{V}\coloneqq\l\langle V,K,\oplus_V,\odot_V,0_V\r\rangle$ and $\mc{W}\coloneqq\l\langle W,K,\oplus_W,\odot_W,0_W\r\rangle$. A **linear map from $\mc{V}$ to $\mc{W}$** is a function $T:V\to W$ such that_
* _$\axilin[1]$ (Additivity)$\bf{.}$ $\fa v_1,v_2\in V:T\l(v_1\oplus_Vv_2\r)=T\l(v_1\r)\oplus_WT\l(v_2\r)$._
* _$\axilin[2]$ (Homogeneity)$\bf{.}$ $\fa\alpha\in K,\fa v\in V:T\l(\alpha\odot_Vv\r)=\alpha\odot_WT\l(v\r)$._

```

**Remark.** Linear maps are $\catvect[K]$-morphisms.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** By induction, we see that
$$\begin{equation}
    T\l(\sum_{i=1}^n\alpha_iv_i\r)=\sum_{i=1}^n\alpha_iT\l(v_i\r)
\end{equation}$$
for all $v_1,\dots,v_n\in V$ and $\alpha_1,\dots,\alpha_n\in K$.<span style="float:right;">$\blacklozenge$</span>
