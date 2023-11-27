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

<i>Proof.</i> 

---

<b>Remark.</b> We may replace the balls $\l\{B_r\!\l(x\r)\r\}_{r>0}$ in the theorem by any family of $\lambda$-measurable sets $\{\widetilde{B}_r\!\l(x\r)\}$ that <i>shrink-nicely</i> to $x$, i.e. any family of $\lambda$-measurable sets such that there is some $p\in\l(0,1\r)$ where $\widetilde{B}_r\!\l(x\r)\subseteq B_r\!\l(x\r)$ and $\lambda\,(\widetilde{B}_r\!\l(x\r))\geq p\lambda\l(B_r\!\l(x\r)\r)$ for all $r>0$. To prove this, we first strengthen the classical version.
* We claim that $\lim_{r\to0}\frac{1}{\lambda\l(B_r\r)}\int_{B_r\!\l(x\r)}\l|f\l(x\r)-f\l(y\r)\r|\d\lambda\l(y\r)=0$ for a.e. $x\in\R^d$.
