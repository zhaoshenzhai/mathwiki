<div class="topSpace"></div>

Date Created: 15/03/2022 12:34:22
Tags: #Type/Definition #Later/Category_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Constant functor is a functor]]

``` ad-Definition
title: Definition.

Let $\cat{J}$ and $\cat{C}$ be categories and fix $C\in\Obj\l(\cat{C}\r)$. The <b>constant functor at $C$</b> is the covariant functor $\ms{C}_C:\cat{J}\to\cat{C}$ sending all objects to $C$ and all morphisms to $\id_C$. Formally, $\ms{C}_C\coloneqq\tpl{\ms{C}_C^{\Obj},\l\{\l(\ms{C}_C^{\Hom}\r)_{j,k}\r\}_{j,k\in\Obj\l(\cat{J}\r)}}$ where
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
