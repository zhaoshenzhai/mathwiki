<div class="topSpace"></div>

Date Created: 04/10/2022 13:36:05
Tags: #Theorem #Courses/MATH254

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Theorem
title: Theorem (Squeeze Theorem).

_Let_ $\tpl{x_n}_{n\in\N}$ _be a sequence in $\R$. If there exist a sequence_ $\tpl{a_n}_{n\in\N}$ _of positive reals that converges to $0$ and_
$$\begin{equation}
    \fa^\infty n\in\N:d\l(x_n,x\r)\leq ca_n
\end{equation}$$
_for some $c\in\R^+$, then_ $\lim_{n\to\infty}x_n=x$_._

```

_Proof_. Let $\epsilon>0$. Then, since $\lim_{n\to\infty}a_n=0$, we see that
$$\begin{equation}
    \ex N_1\in\N,\fa n\geq N_1:d\l(a_n,0\r)<\epsilon/c.
\end{equation}$$
Furthermore, we have that
$$\begin{equation}
    \ex N_2\in\N,\fa n\geq N_2:d\l(x_n,x\r)\leq ca_n.
\end{equation}$$
But then for all $n\geq\max\l\{N_1,N_2\r\}$, we see that
$$\begin{equation}
    d\l(x_n,x\r)<ca_n=cd\l(a_n,0\r)<c\epsilon/c=\epsilon
\end{equation}$$
and thus $\lim_{n\to\infty}x_n=x$.<span style="float:right;">$\blacksquare$</span>
