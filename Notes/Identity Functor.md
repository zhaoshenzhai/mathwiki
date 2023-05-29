<div class="topSpace"></div>

Date Created: 08/03/2022 14:53:57
Tags: #Type/Definition #Later/Category_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Identity functor is the identity of functor composition]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Identity functor is a functor]]

``` ad-Definition
title: Definition.

Let $\cat{C}$ be a category. The **identity functor on $\cat{C}$** is the covariant functor $\Id_\cat{C}:\cat{C}\to\cat{C}$ sending all objects and all morphisms to themselves. Formally, $\Id_\cat{C}\coloneqq\tpl{\Id_\cat{C}^{\Obj},\l\{\l(\Id_\cat{C}^{\Hom}\r)_{C,D}\r\}_{C,D\in\Obj\l(\cat{C}\r)}}$ where
$$\begin{equation}
    \l[\begin{aligned}
        \Id_\cat{C}^{\Obj}:\Obj\l(\cat{C}\r)&\to\Obj\l(\cat{C}\r)\\
        C&\mapsto C
    \end{aligned}\r]=\id_{\Obj\l(\cat{C}\r)}\ \ \ \ \ \ \ \ \textrm{\it{and}}\ \ \ \ \ \ \ \ \fa C,D\in\Obj\l(\cat{C}\r):\l[
    \begin{aligned}
        \l(\Id_\cat{C}^{\Hom}\r)_{C,D}:\Hom_\cat{C}\!\l(C,D\r)&\to\Hom_\cat{D}\l(C,D\r)\\
        f&\mapsto f
    \end{aligned}\r].
\end{equation}$$

```
