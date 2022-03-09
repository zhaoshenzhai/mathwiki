<br />
<br />

Date Created: 09/03/2022 11:07:20
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $\cat{C}$ be a category and fix a subcategory $\cat{S}$ of $\cat{C}$. The **inclusion functor of $\cat{S}$ to $\cat{C}$** is the covariant functor $\ms{I}:\cat{S}\to\cat{C}$ defined by:_
* _The inclusion (class) function which sends each object $S\in\obj\l(\cat{S}\r)$ to itself (in $\obj\l(\cat{C}\r)$)._
* _For all objects $X,Y\in\obj\l(\cat{S}\r)$, the inclusion function_
$$\begin{equation}
    \begin{aligned}
        \iota:\hom_\cat{S}\!\l(X,Y\r)&\to\hom_\cat{C}\!\l(X,Y\r)\\
        f&\mapsto\id_{\hom_\cat{C}\l(X,Y\r)}\l(f\r)=f.
    \end{aligned}
\end{equation}$$

```
