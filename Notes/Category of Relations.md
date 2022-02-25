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
Justifications: [[Category of relations is a category]]

``` ad-Definition
title: Definition.

_The **category of relations** is the category $\cat{Rel}$ defined by the following data:_
* _The objects are pairs $\l\langle X,\rho\r\rangle$ where $X$ is a set and $\rho$ is a (binary) relation on $X$._
* _For all $\cat{Rel}$-objects $\l\langle X,\rho\r\rangle$ and $\l\langle Y,\sigma\r\rangle$, the morphisms from $\l\langle X,\rho\r\rangle$ to $\l\langle Y,\sigma\r\rangle$ are relation-preserving functions $f:X\to Y$, that is,_
$$\begin{equation}
    \hom\l(\l\langle X,\rho\r\rangle,\l\langle Y,\sigma\r\rangle\r)\coloneqq\l\{f\in Y^X\mid\fa x_1,x_2\in X:\l\langle x_1,x_2\r\rangle\in \rho\Rightarrow\l\langle f\l(x_1\r),f\l(x_2\r)\r\rangle\in\sigma\r\}.
\end{equation}$$
* _For all $\cat{Rel}$-objects $\l\langle X,\rho\r\rangle$, the identity morphism on $\l\langle X,\rho\r\rangle$ is the identity function $\id_X:X\to X$._
* _For all $\cat{Rel}$-morphisms $f:\l\langle X,\rho\r\rangle\to\l\langle Y,\sigma\r\rangle$ and $g:\l\langle Y,\sigma\r\rangle\to\l\langle Z,\tau\r\rangle$, the composite morphism of $g$ after $f$ is the composite function $g\circ f:X\to Z$._

```
