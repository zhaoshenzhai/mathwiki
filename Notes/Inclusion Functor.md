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

_Let $\cat{C}$ be a category and fix a subcategory $\cat{S}$ of $\cat{C}$. The **inclusion functor of $\cat{S}$ to $\cat{C}$** is the covariant functor $\ms{I}:\cat{S}\to\cat{C}$ sending all objects and morphisms to themselves (in $\cat{C}$). Formally, _ $\ms{I}\coloneqq\l\langle\ms{I}^{\obj},\l\{\ms{I}^{\hom}_{X,Y}\r\}_{X,Y\in\obj\l(\cat{S}\r)}\r\rangle$ _where_
$$\begin{equation}
    \begin{aligned}
        \ms{I}^{\obj}:\obj\l(\cat{S}\r)&\to\obj\l(\cat{C}\r)\\
        X&\mapsto X
    \end{aligned}\ \ \ \ \ \ \ \ \textrm{\it{and}}\ \ \ \ \ \ \ \ \fa X,Y\in\obj\l(\cat{S}\r):
    \l[\begin{aligned}
        \ms{I}^{\hom}_{X,Y}:\hom_\cat{S}\!\l(X,Y\r)&\to\hom_\cat{C}\!\l(X,Y\r)\\
        f&\mapsto f
    \end{aligned}\r]
\end{equation}$$
_are the appropriate inclusion functions._

```
