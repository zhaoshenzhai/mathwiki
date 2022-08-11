<div class="topSpace"></div>

Date Created: 22/03/2022 22:25:59
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [[Left-multiplication of Matrices]]
Generalizations: _Not Applicable_

Properties: [[Basic properties of matrix operations]]
Sufficiencies: _Not Applicable_
Equivalences: [Composition of linear maps $\Leftrightarrow^\textrm{repr.}_\textrm{bases}$ matrix product of representations](Composition%20of%20linear%20maps%20repr%20under%20basis%20matrix%20product%20of%20representations.md), [Matrix multiplication (columns/rows)](Matrix%20multiplication%20(columns%20slash%20rows).md)
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field and fix $m,n,p\in\N^\ast$. The **matrix multiplication operation between an $m\times n$ and an $n\times p$ matrix over $K$** is the function_
$$\begin{equation}
    \begin{aligned}
        \odot:\mat{m\times n}{K}\times\mat{n\times p}{K}&\to\mat{m\times p}{K} \\
        \tpl{\l[a_{ij}\r],\l[b_{jk}\r]}&\mapsto\sum_{j=1}^na_{ij}b_{jk}.
    \end{aligned}
\end{equation}$$

```
