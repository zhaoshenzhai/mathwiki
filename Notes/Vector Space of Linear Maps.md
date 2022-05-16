<br />
<br />

Date Created: 16/05/2022 19:38:42
Tags: #Definition #In_Progress

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [[Matrix Representation of Linear Maps]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $V$ and $W$ be vector spaces over some field $K$. The **vector space of linear maps from $V$ to $W$** is the hom-set_
$$\begin{equation}
    \hom\l(V,W\r)\coloneqq\l\{T\in W^V\mid T\textrm{ \it{is a linear map}}\r\}
\end{equation}$$
_equipped with the functions_
$$\begin{equation}
        \oplus:\hom\l(V,W\r)\times\hom\l(V,W\r)\to\hom\l(V,W\r)\ \ \ \ \ \ \ \ \textrm{\it{and}}\ \ \ \ \ \ \ \ \odot:K\times\hom\l(V,W\r)\to\hom\l(V,W\r)
\end{equation}$$
_defined, for all $T,U\in\hom\l(V,W\r)$ and $\alpha\in K$, by_
$$\begin{equation}
    \l(T\oplus U\r)\l(v\r)\coloneqq T\l(v\r)+_WU\l(v\r)\ \ \ \ \ \ \ \ \textrm{\it{and}}\ \ \ \ \ \ \ \ \l(\alpha\odot T\r)\l(v\r)\coloneqq \alpha\cdot_WT\l(v\r)
\end{equation}$$
_for all $v\in V$, respectively, and whose zero vector $0\in\hom\l(V,W\r)$ is the linear map that sends $v\mapsto 0_W$ for all $v\in V$._

```
