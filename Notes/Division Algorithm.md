<div class="topSpace"></div>

Date Created: 14/09/2022 22:46:36
Tags: #Theorem #Ring_Theory

Proved by: [[Omega is an ordinal]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: [[Euclidean Domain]]

``` ad-Theorem
title: Theorem (Division Algorithm).

_Let $a,b\in\Z$ with $b\neq0$. Then there exist unique integers $q,r\in\Z$ with $0\leq r<\l|b\r|$ such that $a=qb+r$._

```

_Proof_. We shall first prove the statement for when $b>0$, for then if $b<0$, the Division Algorithm with $a$ and $-b$ furnishes unique integers $\tilde{q},\tilde{r}\in\Z$ with $0\leq\tilde{r}<-b$ such that $a=\tilde{q}\l(-b\r)+\tilde{r}$. Setting $q\coloneqq-\tilde{q}$ and $r\coloneqq\tilde{r}$ gives the desired result.

Assume now that $b>0$.
* (Existence): Consider the set $S\coloneqq\l\{r\in\N\mid\ex k\in\Z:r=a-kb\r\}$. Since
$$\begin{equation}
    0\leq a+a^2b=a-\l(-a^2\r)b\in S,
\end{equation}$$
we see that $S\neq\em$ and thus, by well-ordering of $\N$, there exists a minimal element $r\in S$. Hence there exists some $q\in\Z$ such that $r=a-bq$, so $a=qb+r$. It remains to show that $r<b$. Suppose, for sake of contradiction, that $r\geq b$. Then
$$\begin{equation}
    0\leq r-b=a-bq-b=a-\l(1+q\r)b\in S,
\end{equation}$$
but since $b>0$, we have $r-b=a-\l(1+q\r)b<r$. This contradicts the fact that $r\in S$ is minimal, so $r<b$.

* (Uniqueness): Suppose, in addition to $q,r\in Z$, that there exist some integers $q',r'\in\Z$ with $0\leq r'<b$ such that $a=q'b+r'$. Then $qb+r=q'b+r'$, which implies that
$$\begin{equation}
    r'-r=\l(q-q'\r)b.
\end{equation}$$
Assume, w.l.o.g., that $r'\geq r$. Then $0\leq r'-r\leq r<b$, which implies that $0\leq\l(q-q'\r)b<b$. Cancelling $b$, and noting that $b>0$, we obtain $0\leq q-q'\leq 1$. But since $q,q'\in\Z$, they must coincide. Hence $r'=r$ too.<span style="float:right;">$\blacksquare$</span>
