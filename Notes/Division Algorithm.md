<div class="topSpace"></div>

Date Created: 07/08/2023 13:38:19
Tags: #Type/Proposition #Topic/Ring_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition (Division Algorithm).

For any $a,b\in\Z$ with $b\neq0$, there exist unique integers $q,r\in\Z$ with $0\leq r<\l|b\r|$ such that $a=qb+r$. In particular, $\Z$ is an EUD.

```

<i>Proof.</i> We shall prove the statement for when $b>0$, for then if $b<0$, the division algorithm with $a$ and $-b$ furnishes unique integers $\widetilde{q},\widetilde{r}\in\Z$ with $0\leq\widetilde{r}<-b$ such that $a=\widetilde{q}\l(-b\r)+\widetilde{r}$. Setting $q\coloneqq-\widetilde{q}$ and $r\coloneqq\widetilde{r}$ gives the desired result. Assume now that $b>0$. For existence, consider $S\coloneqq\l\{r\in\N\st\ex k\in\Z:r=a-kb\r\}$. Since
$$\begin{equation}
    0\leq a+a^2b=a-\l(-a^2\r)b\in S,
\end{equation}$$
we see that $S\neq\em$ and thus, by well-ordering of $\N$, there exists a minimal element $r\in S$. Hence there exists some $q\in\Z$ such that $r=a-bq$, so $a=qb+r$. It remains to show that $r<b$. Suppose, for sake of contradiction, that $r\geq b$. Then $0\leq r-b=a-\l(1+q\r)b\in S$, but since $b>0$, we have $r-b=a-\l(1+q\r)b<r$. This contradicts the fact that $r\in S$ is minimal, so $r<b$. For uniqueness, suppose that the integers $q',r'\in\Z$ satisfy the conditions too. Then $qb+r=q'b+r'$, which implies that $r'-r=\l(q-q'\r)b$. Assume w.l.o.g. that $r'\geq r$. Then $0\leq r'-r\leq r<b$, which implies that $0\leq\l(q-q'\r)b<b$. Cancelling $b$, and noting that $b>0$, we obtain $0\leq q-q'\leq 1$. But since $q,q'\in\Z$, they must coincide. Hence $r'=r$ too.<span style="float:right;">$\blacksquare$</span>
