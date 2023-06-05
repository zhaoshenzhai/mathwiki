<div class="topSpace"></div>

Date Created: 23/11/2022 00:21:20
Tags: #Type/Proposition #Topic/Ring_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $R$ be an integral domain. Then the following properties hold:
* For all $f,g\in R\l[x\r]$, we have $\deg\l(fg\r)=\deg f+\deg g$.
* $R\l[x\r]$ is an integral domain.
* $\l(R\l[x\r]\r)^\times=R^\times$.

```

<i>Proof.</i> We prove the first two properties together. If one of $f$ and $g$ vanishes, then there is nothing to check. Otherwise, let the leading terms of $f$ and $g$ be $a_nx^n$ and $b_mx^m$, respectively. Then the leading term of $fg$ is $a_nb_mx^{n+m}$ with $a_nb_m\neq0$. Thus $fg\neq0$, so $R\l[x\r]$ is an integral domain with $\deg\l(fg\r)=n+m=\deg f+\deg g$.

* Obviously $R^\times\subseteq\l(R\l[x\r]\r)^\times$, so take $f\in\l(R\l[x\r]\r)^\times$. Thus $fg=1$ for some $g\in R\l[x\r]$, so $\deg f+\deg g=\deg\l(fg\r)=\deg1=0$. But $\deg f,\deg g\geq0$, so this forces $\deg f,\deg g=0$. Hence $f,g\in R$ is such that $fg=1$, so $f\in R^\times$.<span style="float:right;">$\blacksquare$</span>
