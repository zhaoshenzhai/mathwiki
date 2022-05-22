<br />
<br />

Date Created: 08/03/2022 13:46:59
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Covariant power set functor is a functor]]

``` ad-Definition
title: Definition.

_Consider the category $\catset$. The **(covariant) power set functor on $\catset$** is the covariant functor $\ms{P}:\catset\to\catset$ sending each set $X$ to its power set $\pow\l(X\r)$ and each function $f:X\to Y$ to the direct image function $\im_f$. Formally,_ $\ms{P}\coloneqq\tpl{\ms{P}^{\obj},\l\{\ms{P}^{\hom}_{X,Y}\r\}_{X,Y\in\obj\l(\catset\r)}}$ _where_
$$\begin{equation}
    \begin{aligned}
        \ms{P}^{\obj}:\obj\l(\catset\r)&\to\obj\l(\catset\r)\\
        X&\mapsto\pow\l(X\r)
    \end{aligned}\ \ \ \ \ \ \ \ \textrm{\it{and}}\ \ \ \ \ \ \ \ \fa X,Y\in\obj\l(\catset\r):\l[
    \begin{aligned}
        \ms{P}^{\hom}_{X,Y}:\hom_{\catset}\!\l(X,Y\r)&\to\hom_{\catset}\!\l(\pow\l(X\r),\pow\l(Y\r)\r)\\
        f&\mapsto\im_f
    \end{aligned}\r].
\end{equation}$$

```
