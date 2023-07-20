<div class="topSpace"></div>

Date Created: 23/04/2022 12:48:57
Tags: #Type/Proposition #Later/Module_Theory

Proved by: [[Basis Extension Theorem]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $K$ be a field and let $V$ be a finite-dimensional vector space over $K$. If $W$ is a subspace of $V$, then $W$ is finite-dimensional and $\dim W\leq\dim V$. Furthermore, $\dim W<\dim V$ iff $W\subset V$.

Let $R$ be a PID. If $M$ is a free $R$-module of finite rank $n$, then any submodule $N\subgrpeq M$ is free with rank $\rk_RN\leq n$..

```

<i>Proof.</i> We proceed by induction on $n$, with the trivial base case $M=\l\{0\r\}$. Consider the homomorphism $\phi:R^n\to R$ mapping $\tpl{r_1,\dots,r_n}\mapsto r_n$, so $\ker\phi\iso R^{n-1}$. By induction, we see that $N'\coloneqq\ker\l.\phi\r|_N\subgrpeq\ker\phi$ is free of rank at most $n-1$. The image $\phi\l(N\r)\subgrpeq R$ is an $R$-submodule of $R$, which is an ideal and hence $\phi\l(N\r)=\gen{x}$ for some $x\in R$. If $x=0$, then $\phi\l(N\r)=\l\{0\r\}$

<i>Proof.</i> Let $\mc{B}_W$ be a basis for $W$; since it is a linearly independent subset of $V$, we may extend it to a basis $\mc{B}_V$ of $V$ with $\mc{B}_W\subseteq\mc{B}_V$. Since $\l|\mc{B}_V\r|<\infty$, we see that $\l|\mc{B}_W\r|\leq\l|\mc{B}_V\r|<\infty$ too and hence $W$ is finite-dimensional with $\dim W\leq\dim V$.
* ($\Rightarrow$): If $W=V$, then $\dim W=\dim V$ trivially. Thus, by contradiction, we have $W\subset V$.

* ($\Leftarrow$): Since $W\subset V$, there exists $v\in V$ with $v\not\in W=\span\mc{B}_W$. Thus $\mc{B}_W\cup\l\{v\r\}$ is a linearly independent subset of $V$, and since $\span\mc{B}_V=V$, we see that $\l|\mc{B}_W\cup\l\{v\r\}\r|\leq\l|\mc{B}_V\r|$; the result follows since $\mc{B}_W\cap\l\{v\r\}=\em$, so $\l|\mc{B}_W\cup\l\{v\r\}\r|=\dim W+1\leq\dim V$.<span style="float:right;">$\blacksquare$</span>
