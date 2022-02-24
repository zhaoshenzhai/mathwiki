<br />
<br />

Date Created: 22/02/2022 12:40:06
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Converses: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\cat{C}$ be a category. Then its opposite category $\cat{C}^\textrm{op}$ is a category._

```

_Proof_. We verify the axioms of a category.
* ($\axicat{1}$): Take $X,Y,Z,W\in\obj\l(\cat{C}^\textrm{op}\r)$ and $\cat{C}^\textrm{op}$-morphisms $f:X\to Y$, $g:Y\to Z$, and $h:Z\to W$. Observe then that
$$\begin{equation}
    \begin{alignedat}{2}
        h\ast\l(g\ast f\r)&=h\ast\l(f\circ g\r)&&\textrm{Definition of }\ast\\
        &=\l(f\circ g\r)\circ h&&\textrm{Definition of }\ast\\
        &=f\circ\l(g\circ h\r)&&\axicat{1}\textrm{ of }\cat{C}\\
        &=f\circ\l(h\ast g\r)&&\textrm{Definition of }\ast\\
        &=\l(h\ast g\r)\ast f.\ \ \ \ \ \ \ \ &&\textrm{Definition of }\ast
    \end{alignedat}
\end{equation}$$
* ($\axicat{2}$): Take $X,Y\in\obj\l(\cat{C}^\textrm{op}\r)$ and $f\in\hom_{\cat{C}^\textrm{op}}\!\l(X,Y\r)$. Observe then that
$$\begin{alignat}{2}
    f\ast\id_X&=\id_X\circ f&&\textrm{Definition of }\ast\textrm{; }f\in\hom_\cat{C}\!\l(Y,X\r)\\
    &=f&&\axicat{2}\textrm{ of }\cat{C}\\
    &=f\circ\id_Y\ \ \ \ \ \ \ \ &&\axicat{2}\textrm{ of }\cat{C}\textrm{; }f\in\hom_\cat{C}\!\l(Y,X\r)\\
    &=\id_Y\ast f.&&\textrm{Definition of }\ast\qedin
\end{alignat}$$
