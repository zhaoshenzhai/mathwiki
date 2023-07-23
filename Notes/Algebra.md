<div class="topSpace"></div>

Date Created: 16/07/2023 16:56:16
Tags: #Type/Definition #Topic/Algebra/Later

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $R$ be a commutative ring. An <b>$R$-algebra</b> is, equivalently:
1. A ring $A$ equipped with a ring homomorphism $\phi:R\to Z\l(A\r)$.
2. An $R$-module $A$ equipped with an $R$-bilinear action $\rho:R\times A\to A$.

```

<b>Remark.</b> Given a ring homomorphism $\phi:R\to Z\l(A\r)$, we define the action $\rho\l(r,a\r)\coloneqq\phi\l(r\r)a$ which is $R$-bilinear since
$$\begin{equation}
    \rho\l(r_1,a_1\r)\rho\l(r_2,a_2\r)=\phi\l(r_1\r)a_1\phi\l(r_2\r)a_2=\phi\l(r_1r_2\r)a_1a_2=\rho\l(r_1r_2,a_1a_2\r).
\end{equation}$$
Conversely, given an $R$-bilinear action $\rho:R\times A\to A$, we define the function $\phi\l(r\r)\coloneqq\rho\l(r,1\r)$ which is a ring homomorphism since
$$\begin{equation}
    \phi\l(1\r)=\rho\l(1,1\r)=1,\ \ \ \ \ \ \ \ \phi\l(r_1+r_2\r)=\rho\l(r_1+r_2,1\r)=\rho\l(r_1,1\r)+\rho\l(r_2,1\r)=\phi\l(r_1\r)+\phi\l(r_2\r),\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ \phi\l(r_1r_2\r)=\rho\l(r_1r_2,1\r)=\rho\l(r_1,1\r)\rho\l(r_2,1\r)=\phi\l(r_1\r)\phi\l(r_2\r).
\end{equation}$$
Furthermore, $\phi\l(r\r)a=\rho\l(r,1\r)a=$
