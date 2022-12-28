<div class="topSpace"></div>

Date Created: 23/11/2022 00:21:20
Tags: #Proposition #Topics/Ring_Theory

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $R$ be an integral domain. Then the following properties hold:_
* _For all $f,g\in R\l[x\r]$, we have $\deg\l(fg\r)=\deg f+\deg g$._
* _$R\l[x\r]$ is an integral domain._
* _$\l(R\l[x\r]\r)^\times=R^\times$._

```

_Proof_.
* If either $f=0$ or $g=0$, then the equation holds by definition since $\deg\l(fg\r)=-\infty$. Otherwise, let the leading terms of $f$ and $g$ be $a_nx^n$ and $b_mx^m$, respectively. Then the leading term of $fg$ is $a_nb_mx^{n+m}$, and since $a_n,b_m\neq0$, we see that $a_nb_m\neq0$. Thus $fg\neq0$, so $R\l[x\r]$ is an integral domain with $\deg\l(fg\r)=n+m=\deg f+\deg g$.

* Obviously $R^\times\subseteq\l(R\l[x\r]\r)^\times$, so take $f\in\l(R\l[x\r]\r)^\times$. Thus $fg=1$ for some $g\in R\l[x\r]$, so
$$\begin{equation}
    \deg f+\deg g=\deg\l(fg\r)=\deg1=0.
\end{equation}$$
But $\deg f,\deg g\geq0$, so this forces $\deg f,\deg g=0$. Hence there exists some $g\in R$ such that $fg=1$, so $f\in R^\times$.<span style="float:right;">$\blacksquare$</span>
