---
mathLink: auto
---

<br />
<br />

Date Created: 25/02/2022 12:02:58
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [$\catrel$ is a locally-small category](Category%20of%20relations%20is%20a%20locally-small%20category.md)

``` ad-Definition
title: Definition.

_The **category of relations** is the (locally-small) category $\catrel$ defined by the following data:_
* _The objects are pairs $\tpl{X,\rho}$ where $X$ is a set and $\rho$ is a (binary) relation on $X$._
* _For all $\catrel$-objects $\tpl{X,\rho}$ and $\tpl{Y,\sigma}$, the morphisms from $\tpl{X,\rho}$ to $\tpl{Y,\sigma}$ are relation-preserving functions $f:X\to Y$; that is,_
$$\begin{equation}
    \hom\l(\tpl{X,\rho},\tpl{Y,\sigma}\r)\coloneqq\l\{f\in Y^X\mid\fa x_1,x_2\in X:\tpl{x_1,x_2}\in \rho\Rightarrow\tpl{f\l(x_1\r),f\l(x_2\r)}\in\sigma\r\}.
\end{equation}$$
* _For all $\catrel$-objects $\tpl{X,\rho}$, the identity morphism on $\tpl{X,\rho}$ is the identity function $\id_X:X\to X$._
* _For all $\catrel$-morphisms $f:\tpl{X,\rho}\to\tpl{Y,\sigma}$ and $g:\tpl{Y,\sigma}\to\tpl{Z,\tau}$, the composite morphism of $g$ after $f$ is the composite function $g\circ f:X\to Z$._

```
