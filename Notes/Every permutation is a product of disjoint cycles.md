<div class="topSpace"></div>

Date Created: 06/10/2022 14:04:08
Tags: #Proposition #Courses/MATH235

Proved by: [[Omega is an ordinal]]
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $X\coloneqq\l\{1,\dots,n\r\}$ and consider a permutation $\sigma:X\to X$. Then there exist disjoint cycles $\sigma_1,\dots,\sigma_k:X\to X$ such that $\sigma=\sigma_1\cdots\sigma_k$._

```

_Proof_. Consider the set $S_1\coloneqq\l\{i\in X\mid\sigma^i\l(1\r)=1\r\}$. Since $\sigma$ is a bijection, there exist some $x_1\in X$ such that $\sigma\l(x_1\r)=1$.
* If $x_1=1$, then $\sigma^1\l(1\r)=1$ and so $S_1\neq\em$.
* Otherwise, $x_1=\sigma\l(x_2\r)$ for some $x_2\neq x_1$, for if $x_2=x_1$, then $\sigma\l(x_1\r)=\sigma\l(x_2\r)=x_1\neq1$.

Continuing this way until we reach some $x_j=1$ such that $\sigma\l(x_j\r)=x_{j-1}$, we see that $\sigma^j\l(1\r)=1$. Thus $S_1\neq\em$, so well-ordering of $\N$ furnishes a minimal $s_1\in S_1$. Consider now the set
$$\begin{equation}
    X_1\coloneqq\l\{\sigma^0\l(1\r),\sigma\l(1\r),\dots,\sigma^{s_1-1}\l(1\r)\r\}.
\end{equation}$$
Observe that $\sigma^{s_1}\l(1\r)=1$, so $\sigma_1\coloneqq\l(\sigma^0\l(1\r)\ \cdots\ \sigma^{s_1-1}\l(1\r)\r)$ is an $s_1$-cycle. Also, we see that $\l|X_1\r|=s_1\leq n=\l|X\r|$, so consider the set $T_1\coloneqq\l\{i\in X\mid i\not\in X_1\r\}$.
* If $T_1=\em$, then $X_1=X$ and we are done.
* Otherwise, well-ordering of $\N$ furnishes a minimal $t_1\in T_1$.

We proceed by applying the same argument above with $t_1$ instead of $1$; that is, with
$$\begin{equation}
    S_2\coloneqq\l\{i\in X\mid\sigma^i\l(t\r)=t\r\},\ \ \ \ \ \ \ \ X_2\coloneqq\l\{\sigma^0\l(t\r),\sigma\l(t\r),\dots,\sigma_{s_2-1}\l(t\r)\r\},\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ T_2\coloneqq\l\{i\in X\mid i\not\in X_1\cup X_2\r\},
\end{equation}$$
to obtain the cycle $\sigma_2\coloneqq\l(\sigma^0\l(t\r)\ \cdots\ \sigma^{s_2-1}\l(t\r)\r)$. Eventually, after no more than $n$ times, we have $T_k=\em$ where we have exhausted all the elements of $X$.

We claim that $\sigma=\sigma_1\cdots\sigma_k$ and the cycles $\sigma_1,\dots,\sigma_k$ are all disjoint.
* (Disjoint): This follows immediately from the fact that the sets $X_i$ and $X_j$ are all disjoint since $\sigma$ is an injection.
* ($\sigma=\sigma_1\cdots\sigma_k$): For all $x\in X$, there must be some $l\in\l\{1,\dots,k\r\}$ such that $x\in X_l$ and $x\not\in X_i$ otherwise, so $\sigma_l\l(x\r)=\sigma\l(x\r)$.<span style="float:right;">$\blacksquare$</span>
