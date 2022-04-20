---
alias: auto_aliasing
---

<br />
<br />

Date Created: 20/04/2022 18:45:16
Tags: #Proposition #Closed

Proved by: [Minkowski sum is direct $\Leftrightarrow$ only trivial decomposition exists for zero](Minkowski%20sum%20is%20direct%20iff%20only%20trivial%20decomposition%20exists%20for%20zero.md)
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $U_1$ and $U_2$ be linear subspaces of a vector space $V$ over $K$. Then the Minkowski sum $U\coloneqq U_1+U_2$ is a direct sum iff $U_1\cap U_2=\l\{0\r\}$._

```

_Proof_.
* ($\Rightarrow$): Take any $v\in U_1\cap U_2$. Observe that $0=v+\l(-v\r)$ and, in particular, that $v\in U_1$ and $-v\in U_2$, so $v=-v=0$ since the only decomposition of $0$ as a sum of vectors in $U_1$ and $U_2$ is the trivial one. Thus $U_1\cap U_2=\l\{0\r\}$.

* ($\Leftarrow$): It suffices to show that if $0=u_1+u_2$ for some $u_1\in U_1$ and $u_2\in U_2$, then $u_1=u_2=0$. Indeed, if $0=u_1+u_2$ for some $u_1\in U_1$ and $u_2\in U_2$, then $u_2=-u_1$ and thus $u_2\in U_1$. It follows then that $u_2\in U_1\cap U_2$, so $u_2=0$ by hypothesis. But then $u_1=0$ too, so the result follows.<span style="float:right;">$\blacksquare$</span>

---

**Remark.** The forward direction holds even if we consider more than two subspaces. Indeed, if $U_1,\dots,U_n$ are linear subspaces of a vector space $V$ over $K$, then
$$\begin{equation}
    \sum_{i=1}^nU_i=\bigoplus_{i=1}^nU_i\ \ \ \ \ \ \ \ \Rightarrow\ \ \ \ \ \ \ \ \fa i,j\in\l\{1,\dots,n\r\}:\l(i\neq j\Rightarrow U_i\cap U_j=\l\{0\r\}\r).
\end{equation}$$
The proof is identical to ($\Rightarrow$).<span style="float:right;">$\blacklozenge$</span>
