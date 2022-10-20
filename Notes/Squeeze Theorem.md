<div class="topSpace"></div>

Date Created: 19/10/2022 21:52:21
Tags: #Theorem #Courses/MATH254

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Theorem
title: Theorem (Squeeze Theorem).

_Let $\tpl{x_n}$ and $\tpl{z_n}$ be convergent sequences in $\R$ and let $\tpl{y_n}$ be a sequence such that $\fa n^\infty\in\N:x_n\leq y_n\leq z_n$. If_
$$\begin{equation}
    \lim\limits_{n\to\infty}x_n=l=\lim\limits_{n\to\infty}z_n
\end{equation}$$
_for some $l\in\R$, then_ $\lim\limits_{n\to\infty}y_n=l$_._

```

_Proof_. By the Triangle Inequality, we see that
$$\begin{equation}
    d\l(y_n,l\r)\leq d\l(y_n,x_n\r)+d\l(x_n,l\r)
\end{equation}$$
for all $n\in\N$. But since $y_n\leq z_n$ for all eventually $n\in\N$, we have $\l|y_n-x_n\r|\leq\l|z_n-x_n\r|$ and hence
$$\begin{equation}
    d\l(y_n,l\r)\leq d\l(z_n,x_n\r)+d\l(x_n,l\r)\leq2d\l(x_n,l\r)+d\l(z_n,l\r)
\end{equation}$$
for all eventually $n\in\N$. Then, for all $\epsilon>0$, we have $d\l(x_n,l\r)<\epsilon/4$ and $d\l(z_n,l\r)<\epsilon/2$ for all eventually $n\in\N$ and hence $d\l(y_n,l\r)<\epsilon$ for all eventually $n\in\N$.<span style="float:right;">$\blacksquare$</span>
