<div class="topSpace"></div>

Date Created: 20/04/2022 17:08:44
Tags: #Proposition

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let_ $\l\{U_i\r\}_{i\in I}$ _be an indexed family of linear subspaces of a vector space $V$ over some field $K$. Then_
$$\begin{equation}
    U\coloneqq\sum\limits_{i\in I}U_i=\span\bigcup_{i\in I}U_i
\end{equation}$$
_where $u_i=0$ for all but finitely-many $i\in I$._

```

_Proof_. It suffices to show that $U$ is the smallest subspace of $V$ containing each $U_i$.
* ($U\subseteq V$ is a subspace): Since $0\in U_i$ for all $i\in I$, we see that $0\in U$. Take $u_1,u_2\in U$ and $\alpha\in K$, so there exist $u_{1i},u_{2i}\in U_i$ for all $i\in I$, with $u_{1i}=u_{2i'}=0$ for all but finitely-many $i,i'\in I$, such that
$$\begin{equation}
    u_1=\sum_{i\in I}u_{1i}\ \ \ \ \textrm{and}\ \ \ \ u_2=\sum_{i\in I}u_{2i}.
\end{equation}$$
Observe then that
$$\begin{equation}
    \begin{aligned}
        \alpha u_1+u_2&=\alpha\sum\limits_{i\in I}u_{1i}+\sum\limits_{i\in I}u_{2i} \\
        &=\sum\limits_{i\in I}\alpha u_{1i}+u_{2i},
    \end{aligned}
\end{equation}$$
and since each $U_i$ is a subspace of $V$, we see that $\alpha u_{1i}+u_{2i}\in U_i$ for all $i\in I$. Since $\alpha u_{1i}+u_{2i}=0$ for all but finitely-many $i\in I$, the sum is defined and we see that $\alpha u_1+u_2\in U$. Thus $U$ is a subspace of $V$.

We now need to prove that $U_i\subseteq U$ for all $i\in I$ and that $U\subseteq W$ for any other subspace $W$ of $V$ containing each $U_i$.
* Fix $i\in I$ and take any $u_i\in U_i$. Observe that $u_i=\sum_{j\in I}u_j$ with $u_j=0$ for all $j\neq i$, and since $0\in U_j$ for all such $j$, we see that $u_i\in U$.

Finally, consider any other subspace $W$ of $V$ such that $U_i\subseteq W$ for all $i\in I$. Take $u\in U$, so $u=\sum_{i\in I}u_i$ for some $u_i\in U_i$ with $u_i=0$ for all but finitely-many $i\in I$. Since each $u_i\in W$ and $W$ is closed under linear combinations, we see that $u\in W$ and hence $U\subseteq W$.<span style="float:right;">$\blacksquare$</span>
