<div class="topSpace"></div>

Date Created: 27/09/2022 20:31:35
Tags: #Theorem #Courses/MATH254

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Theorem
title: Theorem (Nested Interval Theorem).

_Let $\tpl{X,<}$ be a Dedekind-complete totally ordered set and consider a sequence $I_n\coloneqq\l[a_n,b_n\r]$ of non-empty closed intervals in $X$ such that_
$$\begin{equation}
    \fa n\in\N:I_{n+1}\subseteq I_n.
\end{equation}$$
_Then_ $\alpha\coloneqq\sup_{n\in\N}\l\{a_n\r\}$ _and_ $\beta\coloneqq\inf_{n\in\N}\l\{b_n\r\}$_ exist and_
$$\begin{equation}
    \bigcap_{n\in\N}I_n=\l[\alpha,\beta\r]\neq\em.
\end{equation}$$

```

_Proof_. Let $A\coloneqq\l\{a_i\in X\mid i\in\N\r\}$ and $B\coloneqq\l\{b_i\in X\mid i\in\N\r\}$. We claim that $A$ is bounded above by every $b_n\in B$. Fix $a_m\in A$.
* If $n\leq m$, then $a_m\leq b_m\leq b_n$, where the second inequality follows from the fact that $I_m\subseteq I_n$.
* If $n>m$, then $a_m\leq a_n\leq b_n$, where the first inequality follows from the fact that $I_n\subseteq I_m$.

Dedekind-completeness of $X$ then furnishes some $\alpha\coloneqq\sup A$. Thus $\alpha\leq b_n$ for all $n\in\N$, so $B$ is bounded-below and thus we may let $\beta\coloneqq\inf B$. Observe that $\alpha\leq\beta$, and since $a_n\leq\alpha\leq\beta\leq b_n$ for all $n\in\N$, we see that
$$\begin{equation}
    \l[\alpha,\beta\r]\subseteq\bigcap_{n\in\N}I_n.
\end{equation}$$
Conversely, take $x\in\bigcap_{i\in\N}I_n$, so $a_n\leq x\leq b_n$ for all $n\in\N$. But since $a_n\leq\alpha\leq\beta\leq b_n$ too, we have three cases:
* If $a_n\leq x<\alpha$, then, since $\alpha$ is the _least_ upper bound of $A$, there exists some $a_k\in A$ such that $x<a_k$. But then $x\not\in\l[a_k,b_k\r]$, a contradiction.
* If $\beta<x\leq b_n$, then, since $\beta$ is the _greatest_ lower bound of $B$, there exists some $b_l\in B$ such that $x>b_l$. But then $x\not\in\l[a_l,b_l\r]$, a contradiction.

Thus $a_n\leq\alpha\leq x\leq\beta\leq b_n$, so $x\in\l[\alpha,\beta\r]$.<span style="float:right;">$\blacksquare$</span>
