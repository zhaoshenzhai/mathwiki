<div class="topSpace"></div>

Date Created: 05/08/2023 17:22:19
References:
Tags: #Type/Theorem #Topic/Rings_and_Modules/Module_Theory

Proved by: [[Polynomial ring over fields is a EUD]], [[EUD implies PID]], [[Structure Theorem]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Canonical Forms).

Let $\alpha\in\End\l(V\r)$ be a linear operator in a fin-dim. $k$-vector space $V$. Define the <b>$f$-companion matrix</b> and <b>$\lambda$-Jordan blocks of size $r$</b> as the matrices
![[Images/2023-08-05_231331/image.svg|600]]where $f\coloneqq x^d+a_{d-1}x^{d-1}+\cdots+a_0$ is a monic polynomial, $\lambda\in k$, and $r\geq1$. Then $\alpha$ admits the following canonical forms.
* (Rational Canonical Form). There exist unique non-constant monic polynomials $f_1\divides\cdots\divides f_m\in k\l[x\r]$ so that $\alpha\sim\diag\l(C_{f_1},\dots,C_{f_m}\r)$.
* (Jordan Canonical Form). If $k$ is algebraically closed, then there exist distinct scalars $\lambda_i\in k$ and integers $r_{ij}\geq1$ so that $\alpha\sim\diag\l(J_{r_{ij}}\!\l(\lambda_i\r)\r)$.

Moreover, an operator $\alpha\in\End\l(V\r)$ is determined up to similarity by its invariant factors $f_j$ and elementary divisors $\l(x-\lambda_i\r)^{r_{ij}}$.

```

<i>Proof.</i> Equip $V$ with the $k\l[x\r]$-module structure induced by $\alpha$. Since $k$ is a field, $k\l[x\r]$ is a PID and hence $V$ can be decomposed as a direct sum of cyclic modules.
* The invariant factors decomposition gives us $V=\bigoplus_{j=1}^{m}V/f_j$ for some $f_1\divides\cdots\divides f_m\in k\l[x\r]$. Consider a polynomial $f\coloneqq a_dx^d+\cdots+a_0\in k\l[x\r]$, which we may assume to be monic since $\gen{f}$ depends only on $k\l[x\r]^\times=k^\times$. Since $k\l[x\r]$ is an EUD, any $g\in k\l[x\r]$ can be written as $g=qf+r$ for some unique $r\in k\l[x\r]$ with $\deg r<\deg f=d$. Thus, in the quotient, we see that $\l\{1,x,\dots,x^{d-1}\r\}$ is a $k$-basis for $V/f$. Since $\alpha$ acts as left-multiplication by $x$ and $x\cdot x^l=x^{l+1}$ for all $1\leq l<d-1$ and $x\cdot x^{d-1}=x^d=-\sum_{l=0}^{d-1}a_lx^l$, we see that its matrix representation in this basis is $\alpha\sim C\l(f\r)$. Glueing bases together gives us the desired result.
* Assume that $k$ is algebraically closed, so the irreducible elements of $k\l[x\r]$ are exactly the linear polynomials. The elementary divisors decomposition of $V$ is then $V\iso\bigoplus_{i=1}^{n}\bigoplus_{j=1}^{m}V/\l(x-\lambda_i\r)^{r_{ij}}$ for some distinct $\lambda_i\in k$ and some integers $r_{ij}\geq1$. As before, we fix a cyclic factor. The set $\{\l(x-\lambda\r)^{r-1},\dots,\l(x-\lambda\r),1\}$ is a $k$-basis for $V/\l(x-\lambda\r)^r$, and since $x\cdot\l(x-\lambda\r)^l=\l(x-\lambda\r)^{l+1}+\lambda\l(x-\lambda\r)^l$ for all $1\leq l<r$, we see that $\alpha\sim J_r\!\l(\lambda\r)$ in this basis.

 Lastly, since the two $k\l[x\r]$-module structures on $V$ induced by any two operators $\alpha,\beta\in\End\l(M\r)$ are isomorphic iff $\alpha$ and $\beta$ are similar, the invariant factors $f_j$ and elementary divisors $\l(x-\lambda_i\r)^{r_{ij}}$ depend only on the similarity class of $\alpha$.<span style="float:right;">$\blacksquare$</span>

