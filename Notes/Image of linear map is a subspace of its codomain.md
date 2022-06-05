<br />
<br />

Date Created: 03/04/2022 18:18:22
Tags: #Proposition #Closed

Proved by: [[Linear map fixes zero vector]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ and $W$ be vector spaces over some field $K$ and consider a linear map $T:V\to W$. Then, for every linear subspace $V_0\subseteq V$, $\im_T\l(V_0\r)$ is a linear subspace of $W$. In particular, $\im T\subseteq W$ is a linear subspace._

```

_Proof_. It suffices to verify that $0\in\im_T\l(V_0\r)$ and, for every $\alpha\in K$ and $w_1,w_2\in\im\l(T\r)$, that $\alpha w_1+w_2\in\im_T\l(V_0\r)$.
* ($0\in\im_T\l(V_0\r)$): Since $V_0$ is a linear subspace, we see that $0\in V_0$. But $T\l(0\r)=0$, so $0\in\im_T\l(V_0\r)$.

* ($\alpha w_1+w_2\in\im_T\l(V_0\r)$): Since $w_1,w_2\in\im_T\l(V_0\r)$, there exist $v_1,v_2\in V_0$ such that $T\l(v_1\r)=w_1$ and $T\l(v_2\r)=w_2$. Observe then that
$$\begin{equation}
    \begin{aligned}
        \alpha w_1+w_2&=\alpha\l(T\l(v_1\r)\r)+T\l(v_2\r) && \textrm{Substitution} \\
        &=T\l(\alpha v_1\r)+T\l(v_2\r) && \textrm{Homogeneity of $T$} \\
        &=T\l(\alpha v_1+v_2\r), && \textrm{Additivity of $T$}
    \end{aligned}
\end{equation}$$
and since the addition and scalar multiplication operations on $V$ close, we see that $v\coloneqq\alpha v_1+v_2\in V_0$. Thus
$$\begin{equation}
    \ex v\in V_0:T\l(v\r)=\alpha w_1+w_2,
\end{equation}$$
from which the result follows.<span style="float:right;">$\blacksquare$</span>
