<br />
<br />

Date Created: 22/03/2022 22:25:59
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: [Matrix multiplication over $\R$ (dot product)](Matrix%20multiplication%20over%20R%20(dot%20product).md)
Constructions: [[Linear map Induced by a Matrix]]
Generalizations: _Not Applicable_

Properties: [[Algebraic identities of matrix operations]], [Linear map induced by product of matrices is composition of linear maps](Linear%20map%20induced%20by%20product%20of%20matrices%20is%20composition%20of%20linear%20maps.md), [[Matrix multiplication is associative]]
Sufficiencies: _Not Applicable_
Equivalences: [$\l[U\circ T\r]_\mc{B}=\l[U\r]_\mc{B}\l[T\r]_\mc{B}$ for $U,T\in\edm\l(V\r)$](Composition%20of%20linear%20maps%20is%20represented%20by%20their%20matrix%20product.md)
Justifications: [Matrix multiplication (via entries $=$ via columns)](Matrix%20multiplication%20(via%20entries%20equals%20via%20columns).md), [Matrix multiplication (via entries $=$ via rows)](Matrix%20multiplication%20(via%20entries%20equals%20via%20rows).md)

``` ad-Definition
title: Definition.

_Let $K$ be a field and fix $m,n,p\in\N^\ast$. The **matrix multiplication operation between an $m\times n$ and an $n\times p$ matrix over $K$** is the binary operation_
$$\begin{equation}
    \odot:\mat{m\times n}{K}\times\mat{n\times p}{K}\to\mat{m\times p}{K}
\end{equation}$$
_where $C\coloneqq A\odot B$ is defined, equivalently, as:_
* _(Entries): The $\l(i,k\r)^\textrm{\it{th}}$ entry of $C$ is the $\textrm{`}$dot product$\textrm{'}$ of the $i^\textrm{\it{th}}$ row of $A$ the and $k^\textrm{\it{th}}$ column of $B$:_
$$\begin{equation}
    c_{ik}\coloneqq\sum\limits_{j=1}^na_{ij}b_{jk}.
\end{equation}$$

* _(Columns): The $k^\textrm{\it{th}}$ column of $C$ is the linear combination of all columns_ $\v{a}_{\blob;j}$ _of $A$ with coefficients_ $b_{jk}$_:_
$$\begin{equation}
    \fa k\in\l\{1,\dots,p\r\}:\v{c}_{\blob;k}\coloneqq\sum_{j=1}^nb_{jk}\v{a}_{\blob;j}.
\end{equation}$$
* _(Rows): The $i^\textrm{\it{th}}$ row of $C$ is the linear combination of all rows_ $\v{b}_{j;\blob}$ _of $B$ with coefficients_ $a_{ij}$_:_
$$\begin{equation}
    \fa i\in\l\{1,\dots,m\r\}:\v{c}_{i;\blob}\coloneqq\sum_{j=1}^na_{ij}\v{b}_{j;\blob}.
\end{equation}$$

```
