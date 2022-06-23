<br />
<br />

Date Created: 23/06/2022 08:01:27
Tags: #Definition #Closed

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

_Let $V$ be a vector space over $K\in\l\{\R,\C\r\}$. An **inner product on $V$** is a function_
$$\begin{equation}
    \inpro{\slot}{\slot}:V\times V\to K
\end{equation}$$
_such that:_
* _(Positive-definiteness): $\fa v\in V:\inpro{v}{v}\in\R\land\inpro{v}{v}\geq0$, equality holds iff $v=0$._

* _(Linearity in the first slot): $\fa v_1,v_2,w\in V,\fa\alpha\in K:\inpro{\alpha v_1+v_2}{w}=\alpha\inpro{v_1}{w}+\inpro{v_2}{w}$._
* _(Conjugate symmetry): $\fa v_1,v_2\in V:\inpro{v_1}{v_2}=\bar{\inpro{v_2}{v_1}}$._

_The pair $\tpl{V,\inpro{\slot}{\slot}}$ is called an **inner product space**._

```

**Remark.** If $K=\R$, then conjugate reduces to symmetry.<span style="float:right;">$\blacklozenge$</span>
