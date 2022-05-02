<br />
<br />

Date Created: 03/04/2022 18:18:22
Tags: #Proposition #Closed

Proved by: [Linear subspace $\Leftrightarrow$ closed under linear combination](Linear%20subspace%20iff%20closed%20under%20linear%20combination.md), [[Linear map fixes zero vector]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ and $W$ be vector spaces over some field $K$ and consider a linear map $T:V\to W$. Then $\im T$ is a $K$-linear subspace of $W$._

```

_Proof_. It suffices to verify that $0\in\im\l(T\r)$ and, for every $\alpha\in K$ and $w_1,w_2\in\im\l(T\r)$, that $\alpha w_1+w_2\in\im\l(T\r)$.
* ($0\in\im\l(T\r)$): This follows directly from the fact that $T\l(0\r)=0$.

* ($\alpha w_1+w_2\in\im\l(T\r)$): Since $w_1,w_2\in\im\l(T\r)$, there exist $v_1,v_2\in V$ such that $T\l(v_1\r)=w_1$ and $T\l(v_2\r)=w_2$. Observe then that
$$\begin{equation}
    \begin{aligned}
        \alpha w_1+w_2&=\alpha\l(T\l(v_1\r)\r)+T\l(v_2\r) && \textrm{Substitution} \\
        &=T\l(\alpha v_1\r)+T\l(v_2\r) && \textrm{Homogeneity of $T$} \\
        &=T\l(\alpha v_1+v_2\r), && \textrm{Additivity of $T$}
    \end{aligned}
\end{equation}$$
and since the addition and scalar multiplication operations on $V$ close, we see that $v\coloneqq\alpha v_1+v_2\in V$. Thus
$$\begin{equation}
    \ex v\in V:T\l(v\r)=\alpha w_1+w_2,
\end{equation}$$
from which the result follows.<span style="float:right;">$\blacksquare$</span>
