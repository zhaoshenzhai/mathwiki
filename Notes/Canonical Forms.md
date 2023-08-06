<div class="topSpace"></div>

Date Created: 05/08/2023 17:22:19
Tags: #Type/Theorem #Topic/Module_Theory

Proved by: [[Polynomial ring over fields is a EUD]], [[EUD implies PID]], [[Structure Theorem]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Canonical Forms).

Let $\alpha\in\End\l(V\r)$ be a linear operator in a fin-dim. $k$-vector space $V$. Define the <b>$f$-companion matrix</b> and <b>$\lambda$-Jordan blocks of size $n$</b> as the matrices
![[Images/2023-08-05_231331/image.svg|600]]where $f\coloneqq\sum_{j=0}^{d}a_jx^j\in k\l[x\r]$ is a monic polynomial. Then $\alpha$ admits the following canonical forms.
* (Rational Canonical Form). There exist unique non-constant monic polynomials $f_1\divides\cdots\divides f_m\in k\l[x\r]$ so that $\alpha\sim\diag\l(C_{f_1},\dots,C_{f_m}\r)$.
* (Jordan Canonical Form). If $k$ is algebraically closed, then there exist scalars $\lambda_i\in k$ and integers $n_i\geq1$ so that $\alpha\sim\diag\l(J_{n_1}\!\l(\lambda_1\r),\dots,J_{n_m}\!\l(\lambda_m\r)\r)$.

Moreover, an operator $\alpha\in\End\l(V\r)$ is determined up to similarity by its invariant factors $f_i$ and elementary divisors $\l(x-\lambda_i\r)^{n_i}$.

```

<i>Proof.</i> Equip $V$ with the $k\l[x\r]$-module structure induced by $\alpha$. Since $k$ is a field, $k\l[x\r]$ is a PID and hence $V$ can be decomposed as a direct sum of cyclic modules.
* The invariant factors decomposition gives us $V=\bigoplus_{i=1}^{m}V/\!\gen{f_i}$ for some $f_1\divides\cdots\divides f_m\in k\l[x\r]$. Fix $1\leq i\leq m$ and let $f\coloneqq f_i\coloneqq\sum_{j=0}^{d}a_jx^j$. Since $\gen{f}$ depends only on $k\l[x\r]^\times=k^\times$, we can assume that $f$ is monic. Since $k\l[x\r]$ is an EUD, any $g\in k\l[x\r]$ can be written as $g=qf+r$ for some unique $r\in k\l[x\r]$ with $\deg r<\deg f=d$. Thus, in the quotient, we see that $\l\{1,x,\dots,x^{d-1}\r\}$ is a $k$-basis for $V/\!\gen{f}$. Since $\alpha$ acts as left-multiplication by $x$ and $x\cdot x^j=x^{j+1}$ for all $1\leq j<d-1$ and $x\cdot x^{d-1}=x^d=-\sum_{j=0}^{d-1}a_jx^j$, we see that its matrix representation in this basis is $\alpha\sim C\l(f\r)$.
* Assume that $k$ is algebraically closed, so the irreducible elements of $k\l[x\r]$ are exactly the linear polynomials. The elementary divisors decomposition of $V$ is then $V\iso\bigoplus_{i=1}^{m}V/\!\gen{\l(x-\lambda_i\r)^{n_i}}$ for some (not necessarily distinct) $\lambda_i\in k$ and integers $n_i\geq1$. As before, we fix a cyclic factor. The set $\{\l(x-\lambda\r)^{n-1},\dots,\l(x-\lambda\r),1\}$ is a $k$-basis for $V/\!\gen{\l(x-\lambda\r)^n}$, and since $x\cdot\l(x-\lambda\r)^j=\l(x-\lambda\r)^{j+1}+\lambda\l(x-\lambda\r)^j$ for all $1\leq j<n$, we see that $\alpha\sim J_n\!\l(\lambda\r)$ in this basis.

 Lastly, since the two $k\l[x\r]$-module structures on $V$ induced by any two operators $\alpha,\beta\in\End\l(M\r)$ are isomorphic iff $\alpha$ and $\beta$ are similar, the invariant factors $f_i$ and elementary divisors $\l(x-\lambda_i\r)^{n_i}$ depend only on the similarity class of $\alpha$.<span style="float:right;">$\blacksquare$</span>

