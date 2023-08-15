<div class="topSpace"></div>

Date Created: 22/02/2022 12:40:06
Tags: #Type/Proposition #Topic/Category_Theory/Later

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\cat{C}$ be a category. Then its opposite category $\cat{C}^\textrm{op}$ is a category.

```

<i>Proof.</i> We verify the axioms of a category.
* ($\axicat[1]$). Take $X,Y,Z,W\in\Obj\l(\cat{C}^\textrm{op}\r)$ and $\cat{C}^\textrm{op}$-morphisms $f:X\to Y$, $g:Y\to Z$, and $h:Z\to W$. Observe then that
$$\begin{equation}
    \begin{alignedat}{2}
        h\ast\l(g\ast f\r)&=h\ast\l(f\circ g\r)&&\textrm{Definition of }\ast\\
        &=\l(f\circ g\r)\circ h&&\textrm{Definition of }\ast\\
        &=f\circ\l(g\circ h\r)&&\axicat[1]\textrm{ of }\cat{C}\\
        &=f\circ\l(h\ast g\r)&&\textrm{Definition of }\ast\\
        &=\l(h\ast g\r)\ast f.\ \ \ \ \ \ \ \ &&\textrm{Definition of }\ast
    \end{alignedat}
\end{equation}$$
* ($\axicat[2]$). Take $X,Y\in\Obj\l(\cat{C}^\textrm{op}\r)$ and $f\in\Hom_{\cat{C}^\textrm{op}}\!\l(X,Y\r)$. Observe then that

$\begin{alignat}{2}
    f\ast\id_X&=\id_X\circ f&&\textrm{Definition of }\ast\textrm{; }f\in\Hom_\cat{C}\!\l(Y,X\r)\\
    &=f&&\axicat[2]\textrm{ of }\cat{C}\\
    &=f\circ\id_Y\ \ \ \ \ \ \ \ &&\axicat[2]\textrm{ of }\cat{C}\textrm{; }f\in\Hom_\cat{C}\!\l(Y,X\r)\\
    &=\id_Y\ast f.&&\textrm{Definition of }\ast\qedin
\end{alignat}$
