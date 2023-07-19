<div class="topSpace"></div>

Date Created: 25/06/2022 15:57:52
Tags: #Type/Proposition #Topic/Functional_Analysis

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $V$ be an inner product space. Then $\l\{0\r\}^\perp=V$, $V^\perp=\l\{0\r\}$, and, for all subsets $U\subseteq V$:
* $U^\perp$ is a linear subspace of $V$.
* $U\cap U^\perp\subseteq\l\{0\r\}$.
* For all $W\subseteq V$ with $U\subseteq W$, we have $W^\perp\subseteq U^\perp$.
* If $U=\span\l\{u_1,\dots,u_m\r\}$ for some $u_1,\dots,u_m\in U$, then $v\in U^\perp$ iff $v\perp u_j$ for all $j\in\l\{1,\dots,m\r\}$.

```

<i>Proof.</i> The first two assertions seem to be ‘dual’.
* ($\l\{0\r\}^\perp=V$): By definition, $v\in\l\{0\r\}^\perp$ iff $\inprod{v}{u}=0$ for all $u\in\l\{0\r\}$, which reduces to $\inprod{v}{0}=0$. But this is true for all $v\in V$ since $0$ is orthogonal to every vector in $V$. Conversely, every $v\in V$ is orthogonal to $0$.

* ($V^\perp=\l\{0\r\}$): By definition, $v\in V^\perp$ iff $\inprod{v}{u}=0$ for all $u\in V$, so, in particular, $\inprod{v}{v}=0$. This forces $v=0$. Conversely, $0$ is orthogonal to every vector $v\in V$.

Let $U$ be a subset of $V$. Note that if $U$ is a sub<i>space</i> of $V$, then $U\cap U^\perp=\l\{0\r\}$.
* It suffices to show that $0\in U^\perp$ and, for all $v_1,v_2\in U^\perp$ and $\alpha\in K$, that $\alpha v_1+v_2\in U^\perp$. Since the function $\inprod{\slot}{u}:V\to K$ is linear for all $u\in U$, we see that $\inprod{0}{u}=0$ for all $u\in U$. Thus $0\in U^\perp$. Now, take $u\in U$ and observe that $\inprod{\alpha v_1+v_2}{u}=\alpha\inprod{v_1}{u}+\inprod{v_2}{u}=\alpha\l(0\r)+\l(0\r)=0$.
* Take $v\in U\cap U^\perp$, so $v\in U$ and $\inprod{v}{u}=0$ for all $u\in U$. In particular, $\inprod{v}{v}=0$, so $v=0$.
* Take $v\in W^\perp$, so $\inprod{v}{w}=0$ for all $w\in W$. Since $U\subseteq W$, we have $\inprod{v}{u}=0$ for all $u\in U$, so $v\in U^\perp$.
* The forward direction is trivial. Conversely, take $u\in U$, so there exist scalars $\alpha_1,\dots,\alpha_m\in K$ such that $u=\sum_{j=1}^m\alpha_je_j$. Observe then that
$$\begin{equation}
    \inprod{v}{u}=\inprod{v}{\sum_{j=1}^m\alpha_je_j}=\sum_{j=1}^m\bar{\alpha_j}\inprod{v}{e_j}=0.\qedin
\end{equation}$$
