---
mathLink-blocks:
    differentiation: Differentiation of Borel measures on $\R^d$
---

<div class="topSpace"></div>

Date Created: 27/11/2023 16:00:03
Tags: #Type/Theorem #In_Progress
^differentiation

Proved by: <i>Not Applicable</i>
References: [[Lebesgue-Radon-Nikodym Theorem]]
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Lebesgue Differentiation Theorem).

For each locally-integrable function $f\in L^1_\textrm{loc}\!\l(\R^d,\lambda\r)$, we have $f\l(x\r)=\lim_{r\to0}\frac{1}{\lambda\l(B_r\l(x\r)\r)}\int_{B_r\l(x\r)}f\d\lambda$ for a.e. $x\in\R^d$.

```

<i>Proof.</i> For each $r>0$, define the <i>averaging operator</i> $A_r:L^1_\textrm{loc}\to L^1_\textrm{loc}$ by $A_rf\l(x\r)\coloneqq\frac{1}{\lambda\l(B_r\r)}\int_{B_r\l(x\r)}f\d\lambda$. For a continuous locally-integrable function $g:\R^d\to\R$, note that
$$\begin{equation}
    \l|A_rg\l(x\r)-g\l(x\r)\r|=\l|\frac{1}{\lambda\l(B_r\r)}\int_{B_r\l(x\r)}g\l(y\r)\d\lambda\l(y\r)-g\l(x\r)\r|\leq\frac{1}{\lambda\l(B_r\r)}\int_{B_r\l(x\r)}\l|g\l(y\r)-g\l(x\r)\r|\d\lambda\l(y\r)<\frac{1}{\lambda\l(B_r\r)}\int_{B_r\l(x\r)}\epsilon\d\lambda\l(y\r)=\epsilon
\end{equation}$$
for small enough $r>0$, so $A_rg\l(x\r)\to g\l(x\r)$ for all $x\in\R^d$. In general, it suffices to show that for any $N\in\N$, we have $A_rf\l(x\r)\to f\l(x\r)$ for a.e. $\l|x\r|\leq N$. But for $\l|x\r|\leq N$ and $r\leq1$, we have $A_rf=A_r\!\l(f\cdot\cchi_{B_{N+1}\l(0\r)}\r)$, so we may w.l.o.g. assume that $f\in L^1$ by replacing $f$ with $f\cdot\cchi_{B_{N+1}\l(0\r)}$. In this case, 

---

<b>Remark.</b> We may replace the balls $\l\{B_r\!\l(x\r)\r\}_{r>0}$ in the theorem by any family of $\lambda$-measurable sets $\{\widetilde{B}_r\!\l(x\r)\}$ that <i>shrink-nicely</i> to $x$, i.e. any family of $\lambda$-measurable sets such that there is some $p\in\l(0,1\r)$ where $\widetilde{B}_r\!\l(x\r)\subseteq B_r\!\l(x\r)$ and $\lambda\,(\widetilde{B}_r\!\l(x\r))\geq p\lambda\l(B_r\!\l(x\r)\r)$ for all $r>0$. To prove this, we first strengthen the classical version.
* We claim that $\lim_{r\to0}\frac{1}{\lambda\l(B_r\r)}\int_{B_r\!\l(x\r)}\l|f\l(x\r)-f\l(y\r)\r|\d\lambda\l(y\r)=0$ for a.e. $x\in\R^d$.
