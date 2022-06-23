<br />
<br />

Date Created: 23/06/2022 08:01:27
Tags: #Definition #In_Progress

Types: _Not Applicable_
Examples: [[Euclidean Vector Space]]
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $V$ be a complex (resp. real) vector space. An **inner product on $V$** is a positive-definite Hermitian (resp. symmetric bilinear) form on $V$; that is, a function_
$$\begin{equation}
    \inpro{\slot}{\slot}:V\times V\to\C\ \ \ \textrm{\it{(resp. $\R$)}}
\end{equation}$$
_such that:_
* _(Positive-definiteness): $\fa v\in V:\inpro{v}{v}\geq0$; equality holds iff $v=0$._

* _(Conjugate symmetry): $\fa v_1,v_2\in V:\inpro{v_1}{v_2}=\bar{\inpro{v_2}{v_1}}$._
* _(Sesquilinearity): $\fa v_1,v_2,w_1,w_2\in V,\fa\alpha,\beta\in K:\inpro{\alpha v_1+v_2}{\beta w_1+w_2}=\alpha\bar{\beta}\inpro{v_1}{w_1}+\alpha\inpro{v_1}{w_2}+\bar{\beta}\inpro{v_2}{w_1}+\inpro{v_2}{w_2}$._

_The pair $\tpl{V,\inpro{\slot}{\slot}}$ is called an **inner product space**._

```
