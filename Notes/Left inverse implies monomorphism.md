<br />
<br />

Date Created: 22/02/2022 18:43:24
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\cat{C}$ be a category and fix a morphism $f:X\to Y$. If $f$ has a left inverse, then $f$ is a monomorphism._

```

_Proof_. Let $g:Y\to X$ be a left inverse of $f$ and take $Z\in\obj\l(\cat{C}\r)$. Consider any morphisms $\alpha_1,\alpha_2:Z\to X$ such that $f\circ\alpha_1=f\circ\alpha_2$ and compute
$$\begin{equation}
    \begin{alignedat}{2}
        \alpha_1&=\id_X\circ\alpha_1&&\axicat{2}\\
        &=\l(g\circ f\r)\circ\alpha_1\ \ \ \ \ \ \ \ &&g\textrm{ is a left inverse of }f\\
        &=g\circ\l(f\circ\alpha_1\r)&&\axicat{1}\\
        &=g\circ\l(f\circ\alpha_2\r)&&\textrm{Assumption}\\
        &=\l(g\circ f\r)\circ\alpha_2&&\axicat{1}\\
        &=\id_X\circ\alpha_2&&g\textrm{ is a left inverse of }f\\
        &=\alpha_2,&&\axicat{2}
    \end{alignedat}
\end{equation}$$
from which it follows that $f$ is a monomorphism.<span style="float:right;">$\blacksquare$</span>
