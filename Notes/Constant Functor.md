<div class="topSpace"></div>

Date Created: 15/03/2022 12:34:22
Tags: #Type/Definition #Later/Category_Theory

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Constant functor is a functor]]

``` ad-Definition
title: Definition.

_Let $\cat{J}$ and $\cat{C}$ be categories and fix $C\in\Obj\l(\cat{C}\r)$. The **constant functor at $C$** is the covariant functor $\ms{C}_C:\cat{J}\to\cat{C}$ sending all objects to $C$ and all morphisms to $\id_C$. Formally,_ $\ms{C}_C\coloneqq\tpl{\ms{C}_C^{\Obj},\l\{\l(\ms{C}_C^{\Hom}\r)_{j,k}\r\}_{j,k\in\Obj\l(\cat{J}\r)}}$ _where_
$$\begin{equation}
    \begin{aligned}
        \ms{C}_C^{\Obj}:\Obj\l(\cat{J}\r)&\to\Obj\l(\cat{C}\r)\\
        j&\mapsto C
    \end{aligned}\ \ \ \ \ \ \ \ \textrm{\it{and}}\ \ \ \ \ \ \ \ \fa j,k\in\Obj\l(\cat{J}\r):\l[
    \begin{aligned}
        \l(\ms{C}_C^{\Hom}\r)_{j,k}:\Hom_\cat{J}\!\l(j,k\r)&\to\Hom_\cat{C}\!\l(C,C\r)\\
        f&\mapsto\id_C
    \end{aligned}\r].
\end{equation}$$

```
