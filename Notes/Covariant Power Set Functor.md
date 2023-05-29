<div class="topSpace"></div>

Date Created: 08/03/2022 13:46:59
Tags: #Type/Definition #Later/Category_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Covariant power set functor is a functor]]

``` ad-Definition
title: Definition.

Consider the category $\catset$. The **(covariant) power set functor on $\catset$** is the covariant functor $\ms{P}:\catset\to\catset$ sending each set $X$ to its power set $\pow\l(X\r)$ and each function $f:X\to Y$ to the direct image function $\im_f$. Formally, $\ms{P}\coloneqq\tpl{\ms{P}^{\Obj},\l\{\ms{P}^{\Hom}_{X,Y}\r\}_{X,Y\in\Obj\l(\catset\r)}}$ where
$$\begin{equation}
    \begin{aligned}
        \ms{P}^{\Obj}:\Obj\l(\catset\r)&\to\Obj\l(\catset\r)\\
        X&\mapsto\pow\l(X\r)
    \end{aligned}\ \ \ \ \ \ \ \ \textrm{\it{and}}\ \ \ \ \ \ \ \ \fa X,Y\in\Obj\l(\catset\r):\l[
    \begin{aligned}
        \ms{P}^{\Hom}_{X,Y}:\Hom_{\catset}\!\l(X,Y\r)&\to\Hom_{\catset}\!\l(\pow\l(X\r),\pow\l(Y\r)\r)\\
        f&\mapsto\im_f
    \end{aligned}\r].
\end{equation}$$

```
