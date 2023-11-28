<div class="topSpace"></div>

Date Created: 27/11/2023 20:17:08
Tags: #Type/Theorem #Topic/Real_Analysis

Proved by: [[Calculus in Euclidean Space#^vitali-covering-lemma]]
References: <i>Not Applicable</i>
Justifications: [[Fubini-Tonelli Theorem]], [[Dominated Convergence Theorem]]

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Hardy-Littlewood Maximal Theorem).

For a locally-integrable function $f\in L^1_\textrm{loc}\!\l(\R^d,\lambda\r)$, the <b>Hardy-Littlewood Maximal function</b> of $f$ is the function $Hf:\R^d\to\R$ given by
$$\begin{equation}
    Hf\l(x\r)\coloneqq\sup_{r>0}A_r\!\l|f\r|\l(x\r)\coloneqq\sup_{r>0}\frac{1}{\lambda\l(B_r\r)}\int_{B_r\l(x\r)}\l|f\r|\d\lambda.
\end{equation}$$
There is a constant $C>0$ such that for all $f\in L^1\!\l(\R^d,\lambda\r)$ and all $\alpha>0$, we have $\lambda\l(\Delta_\alpha\!\l(Hf\r)\r)\leq C\|f\|_1/\alpha$, where $\Delta_\alpha\!\l(Hf\r)\coloneqq\l\{x\in\R^d\st Hf\l(x\r)\geq\alpha\r\}$.

```

<b>Remark.</b> For all $r>0$, the <i>averaging operator</i> $A_r:L^1_\textrm{loc}\to L^1_\textrm{loc}$ taking $f\mapsto A_rf$ defined by $A_rf\l(x\r)\coloneqq\frac{1}{\lambda\l(B_r\r)}\int_{B_r\l(x\r)}f\d\lambda$ is interesting in its own right.
* First, we have a <i>local-to-global bridge</i> $\int f\d\lambda=\int A_rf\d\lambda$ for all $f\in L^1$. Writing $\d x\coloneqq\d\lambda\l(x\r)$ and $\d y\coloneqq\d\lambda\l(y\r)$, this follows from Fubini-Tonelli as
$$\begin{equation}
    \begin{aligned}
        \int A_rf\l(x\r)\d x=\frac{1}{\lambda\l(B_r\r)}\int\l(\int_{B_r\l(x\r)}f\l(y\r)\d y\r)\d x&=\frac{1}{\lambda\l(B_r\r)}\iint\cchi_{B_r\l(x\r)}\!\l(y\r)f\l(y\r)\d y\d x \\
        &=\frac{1}{\lambda\l(B_r\r)}\iint\cchi_{B_r\l(y\r)}\!\l(x\r)f\l(y\r)\d x\d y=\frac{1}{\lambda\l(B_r\r)}\int f\l(y\r)\l(\int\cchi_{B_r\l(y\r)}\!\l(x\r)\d x\r)\d y=\int f\l(y\r)\d y.
    \end{aligned}
\end{equation}$$
* Next, it is jointly continuous in $\tpl{r,x}\in\R_{>0}\times\R^d$. Indeed, it suffices to show that $\int_{B_{r_n}\l(x_n\r)}f\d\lambda\to\int_{B_r\l(x\r)}f\d\lambda$ for any sequence $\tpl{r_n,x_n}\to\tpl{r,x}$. Indeed, for such a sequence, we have $\cchi_{B_{r_n}\l(x_n\r)}\to\cchi_{B_r\l(x\r)}$ pointwise on $\R^d\comp\del B_r\!\l(x\r)$. But $\lambda\l(\del B_r\!\l(x\r)\r)=0$, so $\cchi_{B_{r_n}\l(x_n\r)}\to\cchi_{B_r\l(x\r)}$ a.e. Finally, note that $\cchi_{B_{r_n}\l(x_n\r)}\leq\cchi_{B_{r+2}\l(x\r)}$ for all eventually $r_n<r+1$ and $\l|x_n-x\r|<1$, so we obtained the desired result from the Dominated Convergence Theorem.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> For each $x\in\Delta_\alpha$, there is some $r_x>0$ such that $A_{r_x}\!\l|f\r|\l(x\r)>\alpha$. The balls $B\l(r_x,x\r)$ cover $\Delta_\alpha$, so for all $c<\lambda\l(\Delta_\alpha\!\l(Hf\r)\r)$, the Vitali Covering Lemma furnishes a finite disjoint collection $B_i\coloneqq B_{r_{x_i}}\!\l(x_i\r)$ such that $\sum_{i<k}\lambda\l(B_i\r)\geq c/3^d$. Observe then that
$$\begin{equation}
    c\leq3^d\sum_{i<k}\lambda\l(B_i\r)<\frac{3^d}{\alpha}\sum_{i<k}\int_{B_j}\l|f\r|\d\lambda\leq\frac{3^d}{\alpha}\int\l|f\r|\d\lambda=\frac{3^d}{\alpha}\|f\|_1,
\end{equation}$$
so letting $c\to\lambda\l(\Delta_\alpha\!\l(Hf\r)\r)$ gives the desired result.<span style="float:right;">$\blacksquare$</span>
