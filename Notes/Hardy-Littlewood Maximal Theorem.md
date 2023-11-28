<div class="topSpace"></div>

Date Created: 27/11/2023 20:17:08
Tags: #Type/Theorem #In_Progress

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Hardy-Littlewood Maximal Theorem).

For a locally-integrable function $f\in L^1_\textrm{loc}\!\l(\R^d,\lambda\r)$, the <b>Hardy-Littlewood Maximal function</b> of $f$ is the measurable function $Hf:\R^d\to\R$ given by
$$\begin{equation}
    Hf\l(x\r)\coloneqq\sup_{r>0}A_r\!\l|f\r|\l(x\r)\coloneqq\sup_{r>0}\frac{1}{\lambda\l(B_r\r)}\int_{B_r\l(x\r)}\l|f\r|\d\lambda.
\end{equation}$$
There is a constant $C>0$ such that for all $f\in L^1\!\l(\R^d,\lambda\r)$ and all $\alpha>0$, we have $\lambda\l(\Delta_\alpha\!\l(Hf\r)\r)<C\|f\|_1/\alpha$, where $\Delta_\alpha\!\l(Hf\r)\coloneqq\l\{x\in\R^d\st Hf\l(x\r)\geq\alpha\r\}$.

```

<i>Proof.</i> 
