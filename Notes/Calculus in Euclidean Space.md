---
mathLink: Calculus in $\R^d$
mathLink-blocks:
    integration: Integration in $\R^d$
---

<div class="topSpace"></div>

Date Created: 27/11/2023 16:47:20
Tags: #Type/Example #In_Progress
^integration

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Lebesgue Differentiation Theorem]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Lebesgue-Stieltjes Measure]], [[Fubini-Tonelli Theorem]]

``` ad-Example
title: Example (Differentiation and Integration in $\R^d$).

Consider $\R^d$ equipped with the Lebesgue measure $\lambda$.

```

<b>Remark.</b> A function $f:\R^d\to\bar{\R}$ with the Lebesgue measure $\lambda$ is said to be <i>locally-integrable</i> if $f\cdot\cchi_K\in L^1\!\l(\R^d,\lambda\r)$ for all compacts $K\subseteq X$. Denote the collection of all such functions by $L^1_\textrm{loc}$ and consider the <i>averaging operator</i> $A_r:L^1_\textrm{loc}\to L^1_\textrm{loc}$ by $A_rf\l(x\r)\coloneqq\frac{1}{\lambda\l(B_r\r)}\int_{B_r\l(x\r)}f\d\lambda$. A Fubini-Tonelli argument establishes the <i>local-global bridge</i>, i.e. $\int f\d\lambda=\int A_r f\d\lambda$ for all $f\in L^1$ and $r>0$. Indeed, we have
$$\begin{equation}
    \begin{aligned}
        \int A_rf\l(x\r)\d\lambda\l(x\r)=\frac{1}{\lambda\l(B_r\r)}\int\l(\int_{B_r\l(x\r)}f\l(y\r)\d\lambda\l(y\r)\r)\d\lambda\l(x\r)&\overset{!}{=}\frac{1}{\lambda\l(B_r\r)}\iint\cchi_{B_r\l(x\r)}\!\l(y\r)f\l(y\r)\d\lambda\l(y\r)\d\lambda\l(x\r) \\
        &=\frac{1}{\lambda\l(B_r\r)}\iint\cchi_{B_r\l(y\r)}\!\l(x\r)f\l(y\r)\d\lambda\l(x\r)\d\lambda\l(y\r)=\int f\l(y\r)\d\lambda\l(y\r).
    \end{aligned}
\end{equation}$$
The same computation also shows that $\|A_rf\|_1\leq\|f\|_1$, so $A_r:L^1_\textrm{loc}\to L^1_\textrm{loc}$ is a contraction.<span style="float:right;">$\blacklozenge$</span>
