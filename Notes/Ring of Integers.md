<div class="topSpace"></div>

Date Created: 09/01/2023 15:29:16
Tags: #Type/Example #Topic/Ring_Theory

Abstractions: [[Euclidean Domain (EUD)]]
Justifications: [[Universal Property of Free Groups]], [[Omega is an ordinal]]
Constructions: [[Characteristic]], [[Prime Field]], [[Gaussian Integers]]

``` ad-Example
title: Example (Integers).

We construct the <b>integers</b> as the quotient of $\N^2$ under the equivalence relation $\tpl{m_1,n_1}\sim\tpl{m_2,n_2}$ iff $m_1+n_2=m_2+n_1$, which identifies all points on diagonals. This construction induces binary operations $+$ and $\cdot$ on $\Z$ making $\tpl{\Z,+,\cdot}$ into a ring.
* The integers $\Z$ is initial in $\catring$ and is a Euclidean domain with the absolute value $\l|\slot\r|$ valuation.
* The subgroups of $\tpl{\Z,+}$ are of the form $n\Z$ for $n\in\Z$.

```

<i>Proof.</i> For any ring $R$, that $\Z=\gen{1}$ as a group furnishes a unique group homomorphism $\phi:\Z\to R$ sending $1$ to $1_R$. That $\phi\l(rs\r)=\phi\l(r\r)\phi\l(s\r)$ is easy to check, so $\phi$ is a ring homomorphism.

We now show that $\Z$ admits a <i>division algorithm</i>, that for any $a,b\in\Z$ with $b\neq0$, there exist unique integers $q,r\in\Z$ with $0\leq r\leq\l|b\r|$ such that $a=qb+r$.
* We shall prove the statement for when $b>0$, for then if $b<0$, the division algorithm with $a$ and $-b$ furnishes unique integers $\widetilde{q},\widetilde{r}\in\Z$ with $0\leq\widetilde{r}<-b$ such that $a=\widetilde{q}\l(-b\r)+\widetilde{r}$. Setting $q\coloneqq-\widetilde{q}$ and $r\coloneqq\widetilde{r}$ gives the desired result. Assume now that $b>0$. For existence, consider $S\coloneqq\l\{r\in\N\st\ex k\in\Z:r=a-kb\r\}$. Since
$$\begin{equation}
    0\leq a+a^2b=a-\l(-a^2\r)b\in S,
\end{equation}$$
we see that $S\neq\em$ and thus, by well-ordering of $\N$, there exists a minimal element $r\in S$. Hence there exists some $q\in\Z$ such that $r=a-bq$, so $a=qb+r$. It remains to show that $r<b$. Suppose, for sake of contradiction, that $r\geq b$. Then $0\leq r-b=a-\l(1+q\r)b\in S$, but since $b>0$, we have $r-b=a-\l(1+q\r)b<r$. This contradicts the fact that $r\in S$ is minimal, so $r<b$. For uniqueness, suppose that the integers $q',r'\in\Z$ satisfy the conditions too. Then $qb+r=q'b+r'$, which implies that $r'-r=\l(q-q'\r)b$. Assume w.l.o.g. that $r'\geq r$. Then $0\leq r'-r\leq r<b$, which implies that $0\leq\l(q-q'\r)b<b$. Cancelling $b$, and noting that $b>0$, we obtain $0\leq q-q'\leq 1$. But since $q,q'\in\Z$, they must coincide. Hence $r'=r$ too.

Finally, let $H\subgrpeq\Z$ be a subgroup. If $H$ is not trivial, let $a\geq0$ be the smallest positive integer in $H$. For every $x\in H$, the division algorithm furnishes unique integers $n,r\in\Z$ with $0\leq r\leq a$ so that $x=na+r$. Then $r=x-na\in H$, so minimality of $a$ forces $r=0$. Thus $x=na\in n\Z$, showing that $H\subseteq n\Z$. The other inclusion follows from closure of $H$ in $\Z$, so $H=n\Z$ for some $n\in\Z$, as desired.<span style="float:right;">$\blacksquare$</span>
