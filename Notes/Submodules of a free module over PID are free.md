<div class="topSpace"></div>

Date Created: 20/07/2023 10:44:57
Tags: #Type/Proposition #In_Progress

Proved by: [[Characterizations of Noetherian rings]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $F$ be a finitely-generated free $R$-module over a PID $R$, say with $F\iso R^n$ for some $n\in\N$. Then every submodule $M\subgrpeq F$ is free.
* Moreover, there is a basis $\tpl{x_i}_{i=1}^n$ of $F$ and non-zero elements $\tpl{a_j}_{j=1}^m$ of $R$ with $m\leq n$ such that $\tpl{a_jx_j}_{j=1}^m$ is a basis of $M$ with $a_j\divides a_{j+1}$ for all $1\leq j<m$.

```

<i>Proof.</i> We proceed by induction on $n$ with trivial base case $n=0$. For any non-trivial submodule $M\subgrpeq F$, we claim that there exist $a\in R$, $x\in F$, and $m\in M$ with $y=ax\neq0$ such that $F=\gen{x}\oplus F'$ and $M=\gen{m}\oplus M'$.
* Consider the collection $\mc{I}\coloneqq\l\{\phi\l(M\r)\subgrpeq R\mid\phi\in\Hom\l(F,R\r)\r\}$ of all ideals obtained as images of some $R$-module homomorphism $\phi:F\to R$.
