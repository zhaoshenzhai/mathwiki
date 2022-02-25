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

_The **category of relations** is the category $\cat{Rel}$ whose objects are pairs $\l\langle X,\rho\r\rangle$, where $X$ is a set and $\rho$ is a (binary) relation on $X$, and whose morphisms $f:\l\langle X,\rho\r\rangle\to\l\langle R,\sigma\r\rangle$ are relation-preserving maps. Formally,_
* _$\obj\l(\cat{Rel}\r)$ is the collection of all sets of the form $\l\langle X,\rho\r\rangle$ where $X$ is a set and $\rho\subseteq X\times X$._
* _for all $\l\langle X,\rho\r\rangle,\l\langle Y,\sigma\r\rangle\in\obj\l(\cat{Rel}\r)$,_
$$\begin{equation}
    \hom\l(\l\langle X,\rho\r\rangle,\l\langle Y,\sigma\r\rangle\r)\coloneqq\l\{f\in Y^X\mid\fa x_1,x_2\in X:\l\langle x_1,x_2\r\rangle\in \rho\Rightarrow\l\langle f\l(x_1\r),f\l(x_2\r)\r\rangle\in\sigma\r\},
\end{equation}$$
* _for all $\l\langle X,\rho\r\rangle\in\obj\l(\cat{Rel}\r)$,_ $\id_{\l\langle X,\rho\r\rangle}\coloneqq\id_X$_, and_
* _for all $f:\l\langle X,\rho\r\rangle\to\l\langle Y,\sigma\r\rangle$ and $g:\l\langle Y,\sigma\r\rangle\to\l\langle Z,\tau\r\rangle$, the composite morphism $g\circ f:\l\langle X,\rho\r\rangle\to\l\langle Z,\tau\r\rangle$ is the composite function of $g$ after $f$._

```
