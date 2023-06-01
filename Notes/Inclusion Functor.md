<div class="topSpace"></div>

Date Created: 09/03/2022 11:07:20
Tags: #Type/Definition #Later/Category_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $\cat{C}$ be a category and fix a subcategory $\cat{S}$ of $\cat{C}$. The <b>inclusion functor of $\cat{S}$ to $\cat{C}$</b> is the covariant functor $\ms{I}:\cat{S}\to\cat{C}$ sending all objects and morphisms to themselves (in $\cat{C}$). Formally, $\ms{I}\coloneqq\tpl{\ms{I}^{\Obj},\l\{\ms{I}^{\Hom}_{X,Y}\r\}_{X,Y\in\Obj\l(\cat{S}\r)}}$ where
$$\begin{equation}
    \begin{aligned}
        \ms{I}^{\Obj}:\Obj\l(\cat{S}\r)&\to\Obj\l(\cat{C}\r) \\
        X&\mapsto X
    \end{aligned}\ \ \ \ \ \ \ \ \textrm{\it{and}}\ \ \ \ \ \ \ \ \fa X,Y\in\Obj\l(\cat{S}\r):
    \l[\begin{aligned}
        \ms{I}^{\Hom}_{X,Y}:\Hom_\cat{S}\!\l(X,Y\r)&\to\Hom_\cat{C}\!\l(X,Y\r) \\
        f&\mapsto f
    \end{aligned}\r]
\end{equation}$$
are the appropriate inclusion functions.

```
