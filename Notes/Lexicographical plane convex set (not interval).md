<br />
<br />

Date Created: 18/02/2022 10:31:57
Tags: #Proposition #Closed 

Proved by: [[Lexicographical order is total if orders are total]]
Generalizations: _Not Applicable_

Converses: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\l\langle\R^2,\sqsubset\r\rangle$ be the set of pairs of real numbers equipped with its lexicographical ordering and fix the subset_
$$\begin{equation}
    W\coloneqq\l\{w\in\R^2\mid\ex x,y\in\R:w=\l\langle x,y\r\rangle\land-1\leq x\leq1\r\}.
\end{equation}$$
_Then $W$ is convex in $\R^2$ but cannot be written as an interval in $\R^2$._

```

_Proof_. To see that $W$ is convex in $\R^2$, take $\l\langle p,q\r\rangle,\l\langle r,s\r\rangle\in W$ with $\l\langle p,q\r\rangle\sqsubset\l\langle r,s\r\rangle$ and take $w=\l\langle x,y\r\rangle\in\l(\l\langle p,q\r\rangle,\l\langle r,s\r\rangle\r)_{\R^2}$. It follows then that
$$\begin{equation}
    -1\leq p\leq x\leq r\leq 1
\end{equation}$$
and thus $-1\leq x\leq 1$, so $w\in W$. Suppose now that there exists $\l\langle a,b\r\rangle,\l\langle c,d\r\rangle\in\R^2$ such that $W=\l(\l\langle a,b\r\rangle,\l\langle c,d\r\rangle\r)_{\R^2}$. It is easy to see that $a=-1$ since $\sqsubset$ is a total order and we can eliminate cases.
* ($a<-1$): Observe that $\l\langle a,b+1\r\rangle\in\l(\l\langle a,b\r\rangle,\l\langle c,d\r\rangle\r)_{\R^2}$ but $\l\langle a,b+1\r\rangle\not\in W$, a contradiction.

* ($a>-1$): Observe that $\l\langle a,b-1\r\rangle\in W$ but $\l\langle a,b-1\r\rangle\not\in\l(\l\langle a,b\r\rangle,\l\langle c,d\r\rangle\r)_{\R^2}$, a contradiction.

However, for whatever value of $b$, the point $\l\langle-1,b-1\r\rangle\in W$ but $\l\langle-1,b-1\r\rangle\not\in\l(\l\langle-1,b\r\rangle,\l\langle c,d\r\rangle\r)_{\R^2}$, a contradiction. Similarly for closed and half-open intervals.<span style="float:right;">$\blacksquare$</span>
