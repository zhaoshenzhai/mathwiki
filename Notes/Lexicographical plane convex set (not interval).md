<div class="topSpace"></div>

Date Created: 18/02/2022 10:31:57
Tags: #Proposition

Proved by: [[Lexicographical order is total if orders are total]]
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{\R^2,\sqsubset}$ be the set of pairs of real numbers equipped with its lexicographical ordering and fix the subset_
$$\begin{equation}
    W\coloneqq\l\{w\in\R^2\mid\ex x,y\in\R:w=\tpl{x,y}\land-1\leq x\leq1\r\}.
\end{equation}$$
_Then $W$ is convex in $\R^2$ but cannot be written as an interval in $\R^2$._

```

_Proof_. To see that $W$ is convex in $\R^2$, take $\tpl{p,q},\tpl{r,s}\in W$ with $\tpl{p,q}\sqsubset\tpl{r,s}$ and take $w=\tpl{x,y}\in\l(\tpl{p,q},\tpl{r,s}\r)_{\R^2}$. It follows then that
$$\begin{equation}
    -1\leq p\leq x\leq r\leq 1
\end{equation}$$
and thus $-1\leq x\leq 1$, so $w\in W$. Suppose now that there exists $\tpl{a,b},\tpl{c,d}\in\R^2$ such that $W=\l(\tpl{a,b},\tpl{c,d}\r)_{\R^2}$. It is easy to see that $a=-1$ since $\sqsubset$ is a total order and we can eliminate cases.
* ($a<-1$): Observe that $\tpl{a,b+1}\in\l(\tpl{a,b},\tpl{c,d}\r)_{\R^2}$ but $\tpl{a,b+1}\not\in W$, a contradiction.

* ($a>-1$): Observe that $\tpl{a,b-1}\in W$ but $\tpl{a,b-1}\not\in\l(\tpl{a,b},\tpl{c,d}\r)_{\R^2}$, a contradiction.

However, for whatever value of $b$, the point $\tpl{-1,b-1}\in W$ but $\tpl{-1,b-1}\not\in\l(\tpl{-1,b},\tpl{c,d}\r)_{\R^2}$, a contradiction. Similarly for closed and half-open intervals.<span style="float:right;">$\blacksquare$</span>
