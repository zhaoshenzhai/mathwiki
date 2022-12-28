---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 18/11/2022 19:27:11
Tags: #Theorem #Topics/Analysis

Proved by: [[Sequential Criterion for Functional Limits]], [[Sequential Limit Theorems in R]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Functional Limit Theorems in $\R$).

_Let $X$ be a metric space, let $\Omega_1,\Omega_2\subseteq X$ be such that $\Omega\coloneqq\Omega_1\cap\Omega_2\neq\em$, fix a cluster point $p\in\Omega$, and let $L_1,L_2\in\R$. For functions $f:\Omega_1\to\R$ and $g:\Omega_2\to\R$ such that_ $\lim\limits_{x\to p}f\l(x\r)=L_1$ _and_ $\lim\limits_{x\to p}g\l(x\r)=L_2$_, the following properties hold:_
* _(Linearity): For all $\alpha\in\R$,_ $\lim\limits_{x\to p}\l(\alpha f+g\r)\l(x\r)=\alpha L_1+L_2$_._
* _(Multiplicativity):_ $\lim\limits_{x\to p}\l(f\cdot g\r)\l(x\r)=L_1\cdot L_2$_._
* _(Invertibility): Let $\Omega_2'\coloneqq\l\{x\in\Omega_2\mid g\l(x\r)\neq0\r\}$ and assume that $L_2\neq0$. Then_ $\lim\limits_{x\to p}\l(1/g\r)\l(x\r)=1/L_2$ _where the limit is taken over $\Omega_2'$._
* _(Respects absolute value):_ $\lim\limits_{x\to p}\l|f\l(x\r)\r|=\l|L_1\r|$_._
* _(Respects root): Let $\Omega_1'\coloneqq\l\{x\in\Omega_1\mid f\l(x\r)\geq0\r\}$ and assume that $L_1\geq0$. Then_ $\lim\limits_{x\to p}\sqrt{f}\l(x\r)=\sqrt{L_1}$ _where the limit is taken over $\Omega_1'$._
* _(Respects boundedness): For all $A\in\R$, if $\fa x\in\Omega_1\comp\l\{p\r\}:f\l(x\r)\geq A$ (resp. $f\l(x\r)\leq A$), then $L_1\geq A$ (resp. $L_1\leq A$)._
* _(Respects order): If $\fa x\in\Omega\comp\l\{p\r\}:f\l(x\r)\leq g\l(x\r)$, then $L_1\leq L_2$._
* _(Squeeze Theorem): If $L\coloneqq L_1=L_2$ and $h:\Omega\to\R$ is such that $\fa x\in\Omega\comp\l\{p\r\}:f\l(x\r)\leq h\l(x\r)\leq g\l(x\r)$, then_ $\lim\limits_{x\to p}h\l(x\r)=L$_._

```

_Proof_. Let $\tpl{x_n}$ and $\tpl{y_n}$ respectively be sequences in $\Omega_1\comp\l\{p\r\}$ and $\Omega_2\comp\l\{p\r\}$ such that $x_n,y_n\to c$. Then $f\l(x_n\r)$ and $g\l(y_n\r)$ are both sequences in $\R$, and
$$\begin{equation}
    \lim\limits_{n\to\infty}f\l(x_n\r)=\lim\limits_{x\to p}f\l(x\r)\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ \lim\limits_{n\to\infty}g\l(y_n\r)=\lim\limits_{x\to p}g\l(x\r),
\end{equation}$$
so everything follows by sequential limit theorems.<span style="float:right;">$\blacksquare$</span>
