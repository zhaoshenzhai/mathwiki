---
mathLink-blocks:
    minimal-polynomial: Minimal Polynomial
    structure-of-characteristic-minimal: Structure of $\cchi_\alpha$ and $\mu_\alpha$
---

<div class="topSpace"></div>

Date Created: 06/08/2023 18:19:04
References:
Tags: #Type/Theorem #Topic/Rings_and_Modules/Module_Theory

Proved by: [[Canonical Forms]], [[Leibniz Formula]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Cayley-Hamilton).

Let $\alpha\in\End\l(V\r)$ be a linear operator on a finite-dimensional $k$-vector space $V$. Then the unique monic polynomial $\mu_\alpha\in k\l[x\r]$ generating $\Ann_{k\l[x\r]}\!\l(V\r)$ divides $\cchi_\alpha$.

```

<b>Remark.</b> This monic generator $\mu_\alpha$ is called the <i>minimal polynomial of $\alpha$</i>.<span style="float:right;">$\blacklozenge$</span>
^minimal-polynomial

---

<i>Proof.</i> Equip $V$ with the $k\l[x\r]$-module structure induced by $\alpha$ and express $\alpha$ in Rational Canonical Form, so $\alpha\sim\diag\l(C_{f_1},\dots,C_{f_m}\r)$ for some monic polynomials $f_1\divides\cdots\divides f_m\in k\l[x\r]$. We claim that $\cchi_\alpha=\prod_{j=1}^{m}f_j$ and that $\mu_\alpha=f_m$, from which the result follows.
^structure-of-characteristic-minimal
* Indeed, to prove $\cchi_\alpha=\prod_{j=1}^{m}f_j$ it suffices to restrict to a cyclic submodule $V/\!\gen{f}$ and prove that $f$ is the characteristic polynomial of $C_f$. We compute
![[Images/2023-08-06_161211/image.svg|975]]where $g\coloneqq a_1+a_2x+\cdots+a_{d-1}x^{d-1}+x^d$, from which $\det\l(x\id-C_f\r)=\sum_{i=0}^{d}a_ix^i=f$ follows by induction.
* Observe that a polynomial $f\in k\l[x\r]$ acts on $V\iso\bigoplus_{j=1}^{m}k\l[x\r]/f_j$ as $0$ iff it acts on $k\l[x\r]/f_m$ as $0$, which occurs precisely when $f\in\gen{f_m}$. Thus $f_m\divides\mu_\alpha$, so equality follows since $\mu_\alpha$ generates $\Ann_{k\l[x\r]}\!\l(V\r)$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> If $k$ is algebraically closed, then chasing the equivalence between the invariant factors and the elementary divisors decompositions of $V$ shows us that
$$\begin{equation}
    \cchi_\alpha=\prod_{i=1}^{n}\prod_{j=1}^{m_i}\l(x-\lambda_i\r)^{r_{ij}}=\prod_{i=1}^{n}\l(x-\lambda_i\r)^{\sum_jr_{ij}}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ \mu_\alpha=\prod_{i=1}^{n}\l(x-\lambda_i\r)^{\max_jr_{ij}}
\end{equation}$$
where $\lambda_i\in k$ are distinct scalars and $r_{ij}\geq1$.<span style="float:right;">$\blacklozenge$</span>
