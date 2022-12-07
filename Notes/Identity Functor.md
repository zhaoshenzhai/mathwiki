<div class="topSpace"></div>

Date Created: 08/03/2022 14:53:57
Tags: #Definition #Later/Category_Theory

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [[Identity functor is the identity of functor composition]]
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Identity functor is a functor]]

``` ad-Definition
title: Definition.

_Let $\cat{C}$ be a category. The **identity functor on $\cat{C}$** is the covariant functor_ $\Id_\cat{C}:\cat{C}\to\cat{C}$ _sending all objects and all morphisms to themselves. Formally,_ $\Id_\cat{C}\coloneqq\tpl{\Id_\cat{C}^{\obj},\l\{\l(\Id_\cat{C}^{\hom}\r)_{C,D}\r\}_{C,D\in\obj\l(\cat{C}\r)}}$ _where_
$$\begin{equation}
    \l[\begin{aligned}
        \Id_\cat{C}^{\obj}:\obj\l(\cat{C}\r)&\to\obj\l(\cat{C}\r)\\
        C&\mapsto C
    \end{aligned}\r]=\id_{\obj\l(\cat{C}\r)}\ \ \ \ \ \ \ \ \textrm{\it{and}}\ \ \ \ \ \ \ \ \fa C,D\in\obj\l(\cat{C}\r):\l[
    \begin{aligned}
        \l(\Id_\cat{C}^{\hom}\r)_{C,D}:\hom_\cat{C}\!\l(C,D\r)&\to\hom_\cat{D}\l(C,D\r)\\
        f&\mapsto f
    \end{aligned}\r].
\end{equation}$$

```
