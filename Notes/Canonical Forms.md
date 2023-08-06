<div class="topSpace"></div>

Date Created: 05/08/2023 17:22:19
Tags: #Type/Theorem #In_Progress

Proved by: [[Polynomial ring over fields is a EUD]], [[EUD implies PID]], [[Structure Theorem]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Canonical Forms).

Let $\alpha\in\End\l(V\r)$ be a linear operator in a fin-dim. $k$-vector space $V$.
* (Rational Canonical Form). There exist unique non-constant monic polynomials $f_1\divides\cdots\divides f_m$ in $k\l[x\r]$ so that $\alpha\sim\diag\l(C_{f_1},\dots,C_{f_m}\r)$.
* (Jordan Canonical Form). If $k$ is algebraically closed, then there exist scalars $\lambda_i\in k$ and integers $n_i\geq1$ so that $\alpha\sim\diag\l(J_{n_1}\!\l(\lambda_1\r),\dots,J_{n_m}\!\l(\lambda_m\r)\r)$.

Moreover, the <b>invariant factors</b> $f_i$ and <b>elementary divisors</b> $\l(x-\lambda_i\r)^{n_i}$ are uniquely determined by $\alpha$ up to similarity.
![[Images/2023-08-05_231331/image.svg|600]] EUD

```

<i>Proof.</i> Equip $V$ with the $k\l[x\r]$-module structure induced by $\alpha$. Since $k$ is a field, we see that $k\l[x\r]$ is a PID and hence $V=k\l[x\r]^r\oplus\bigoplus_{i=1}^{m}V/\!\gen{f_i}$ for some $r\in\N$ and invariant factors $f_1\divides\cdots\divides f_m\in k\l[x\r]$. But $\dim_kk\l[x\r]=\infty$ while $V$ is finite-dimensional, so $r=0$ and hence $V$ is a direct sum of cyclic modules $V/\!\gen{f_i}$.
* Fix $1\leq i\leq m$ and let $f\coloneqq f_i\coloneqq\sum_{j=0}^{d}a_jx^j$. Since $\gen{f}$ depends only on $k\l[x\r]^\times=k^\times$, we can assume that $f$ is monic. Since $k\l[x\r]$ is an EUD, any $g\in k\l[x\r]$ can be written as $g=qf+r$ for some unique $r\in k\l[x\r]$ with $\deg r<\deg f=d$. Thus, in the quotient, we see that $\l\{1,x,\dots,x^{d-1}\r\}$ is a $k$-basis for $V/\!\gen{f}$. Since $\alpha$ acts as left-multiplication by $x$ and $x\cdot x^i=x^{i+1}$ for all $1\leq i<d-1$ and $x\cdot x^{d-1}=x^d=-\sum_{j=0}^{d-1}a_jx^j$, we see that its matrix representation in this basis is $\alpha\sim C\l(f\r)$.

But $V=\bigoplus_{i=1}^{m}V/\!\gen{f_i}$, so glueing the bases together gives us the block-diagonal form $\alpha\sim\diag\l(C_{f_1},\dots,C_{f_m}\r)$. Lastly, since the two $k\l[x\r]$-module structures on $V$ induced by operators $\alpha,\beta\in\End\l(M\r)$ are isomorphic iff $\alpha$ and $\beta$ are similar, the invariant factors $f_i$ depend only on the similarity class of $\alpha$.

Assume now that $k$ is algebraically closed.
