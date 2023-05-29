<div class="topSpace"></div>

Date Created: 07/03/2022 16:24:13
Tags: #Type/Proposition #Later/Category_Theory

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: [[Comma category is a category]]

``` ad-Proposition
title: Proposition.

Let $\cat{C}$ be a category and fix $C\in\Obj\l(\cat{C}\r)$. Then the coslice category $\l(C\downarrow\cat{C}\r)$ is a category.

```

<i>Proof.</i> It suffices to check that the identities and composite morphisms are well-defined since the axioms are inherited directly from that of $\cat{C}$.
* Take $\tpl{X,f}\in\Obj\l(C\downarrow\cat{C}\r)$ and consider the identity $\id_{\tpl{X,f}}\coloneqq\id_X$. The fact that $f=f\circ\id_X$ is clear and thus $\id_\tpl{X,f}\in\End\l(\tpl{X,f}\r)$.
* Take $\tpl{X_i,f_i}\in\Obj\l(C\downarrow\cat{C}\r)$ for $i\in\l\{1,2,3\r\}$ and consider the morphisms $\psi:X_1\to X_2$ and $\psi':X_2\to X_3$; we need to prove that the diagram
    ![[Images/2022-03-07_162637/image.svg|220]]

    commutes; that is, we need $f_3=\l(\psi'\circ\psi\r)\circ f_1$. To do so, observe that 

$\begin{alignat}{2}
    f_3&=\psi'\circ f_2&&\psi'\in\Hom\l(\tpl{X_2,f_2},\tpl{X_3,f_3}\r)\\
    &=\psi'\circ\l(\psi\circ f_2\r)&&\psi\in\Hom\l(\tpl{X_1,f_1},\tpl{X_2,f_2}\r)\\
    &=\l(\psi'\circ\psi\r)\circ f_1.\ \ \ \ \ \ \ \ \qedin
\end{alignat}$
