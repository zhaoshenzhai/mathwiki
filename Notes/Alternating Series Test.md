<div class="topSpace"></div>

Date Created: 16/03/2023 11:05:10
Tags: #Proposition #Topics/Analysis

Proved by: [[Monotone Convergence Theorem]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{a_k}$ be a sequence in $\R$ such that $a_k\geq0$ eventually. If $\tpl{a_k}$ is non-increasing and_ $a_k\to0$_, then_ $\sum_{k=0}^{\infty}\l(-1\r)^{k+1}a_k$ _converges._

```

_Proof_. Let $s_n$ be its sequence of partial sums of $\l(-1\r)^{k+1}a_k$ and observe that
$$\begin{equation}
    s_{2n}=\l(a_1-a_2\r)+\l(a_3-a_4\r)+\cdots+\l(a_{2n-1}-a_{2n}\r)\geq0.
\end{equation}$$
Then $\tpl{s_{2n}}$ is monotone, so, to show that it converges, it suffices to show that it is bounded. But observe also that
$$\begin{equation}
    s_{2n}=a_1-\l(a_2-a_3\r)-\l(a_4-a_5\r)-\cdots-\l(a_{2n-2}-a_{2n-1}\r)-a_{2n},
\end{equation}$$
so $s_{2n}\leq a_1$. Thus $s_{2n}$ converges, say to some $s\in\R$. We now show that $s_{2n+1}\to s$. Let $\epsilon>0$. Then $\l|s_{2n}-s\r|<\epsilon/2$ and $\l|a_{2n+1}\r|<\epsilon/2$ eventually, so
$$\begin{equation}
    \l|s_{2n+1}-s\r|=\l|a_{2n+1}+s_{2n}-s\r|\leq\l|a_{2n+1}\r|+\l|s_{2n}-s\r|<\epsilon/2+\epsilon/2=\epsilon
\end{equation}$$
eventually. Thus $s_{2n},s_{2n+1}\to s$, so $s_n\to s$.<span style="float:right;">$\blacksquare$</span>
