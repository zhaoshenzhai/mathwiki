<br />
<br />

Date Created: 01/04/2022 18:16:33
Tags: #Definition #Closed

Types: [[Linear Isomorphism]], [[Linear Operator]]
Examples: [[Transposition]], [[Identity function is a linear map]], [[Linear map Induced by a Matrix]]
Constructions: [$\catvect[K]$](Category%20of%20Vector%20Spaces.md), [$\hom_{\catvect[K]}\!\l(V,W\r)$](Vector%20Space%20of%20Linear%20Maps.md), [[Kernel]], [[Image (Linear Map)]], [[Composition (Linear Map)]]
Generalizations: _Not Applicable_

Properties: [Linear map $T$ is injective $\Leftrightarrow$ $\ker T=\l\{0\r\}$](Linear%20map%20is%20injective%20iff%20kernel%20vanishes.md), [Action of linear map $\Leftrightarrow^\textrm{repr.}_\textrm{bases}$ left-multiplication of matrix representation](Action%20of%20linear%20map%20repr%20under%20basis%20left-multiplication%20of%20matrix%20representation.md), [[Linear map fixes zero vector]]
Sufficiencies: [[Existence of unique linear map via action on basis vectors]], [[Criteria for equality of linear maps via spanning set]]
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field and consider vector spaces $V$ and $W$ over $K$. A **linear map from $V$ to $W$** is a function $T:V\to W$ such that:_
* _$\axilin[1]$ (Additivity)$\bf{.}$ $\fa v_1,v_2\in V:T\l(v_1+v_2\r)=T\l(v_1\r)+T\l(v_2\r)$._
* _$\axilin[2]$ (Homogeneity)$\bf{.}$ $\fa\alpha\in K,\fa v\in V:T\l(\alpha v\r)=\alpha T\l(v\r)$._

_The set of all linear maps from $V$ to $W$ is denoted_ $\hom_{\catvect[K]}\!\l(V,W\r)$_; that is, linear maps are $\l(\catvect[K]\r)$-morphisms._

```

**Remark.** Equivalently, $\axilin[1]$ and $\axilin[2]$ can be combined into
* $\axilin$ (Linearity)$\bf{.}$ $\fa\alpha\in K,\fa v_1,v_2\in V:T\l(\alpha v_1+v_2\r)=\alpha T\l(v_1\r)+T\l(v_2\r)$.

To see this, observe that $\axilin$ implies $\axilin[1]$ and $\axilin[2]$ since we can set $\alpha=1$ to obtain $\axilin[1]$ and set $v_2=0$ to obtain $\axilin[2]$. Conversely, observe that
$$\begin{align}
    T\l(\alpha v_1+v_2\r)&=T\l(\alpha v_1\r)+T\l(v_2\r) && \textrm{Additivity} \\
    &=\alpha T\l(v_1\r)+T\l(v_2\r). && \textrm{Homogeneity}\exqedin
\end{align}$$
