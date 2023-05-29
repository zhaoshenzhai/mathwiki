<div class="topSpace"></div>

Date Created: 12/01/2023 12:07:37
Tags: #Type/Proposition #Topic/Analysis

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $\tpl{X,d}$ be a metric space. Then, for all $x\in X$ and $\epsilon>0$, the $\epsilon$-ball $B_\epsilon\!\l(x\r)$ is open in $X$.

```

<i>Proof.</i> Take $y\in B_\epsilon\!\l(x\r)$, so $d\l(x,y\r)<\epsilon$. Since $\R$ is dense, there exists some $\delta>0$ such that $d\l(x,y\r)<\epsilon-\delta$; we claim that $B_\delta\!\l(y\r)\subseteq B_\epsilon\!\l(x\r)$. Indeed, for all $z\in B_\delta\!\l(y\r)$, we have that
$$\begin{equation}
    d\l(x,z\r)\leq d\l(x,y\r)+d\l(y,z\r)<\l(\epsilon-\delta\r)+\delta=\epsilon,
\end{equation}$$
so $z\in B_\epsilon\!\l(x\r)$.<span style="float:right;">$\blacksquare$</span>
