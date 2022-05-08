<br />
<br />

Date Created: 20/04/2022 17:08:44
Tags: #Proposition #Closed

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let_ $\l\{U_i\r\}_{i\in I}$ _be an indexed family of linear subspaces of a vector space $V$ over some field $K$. Then_
$$\begin{equation}
    U\coloneqq\sum_{i\in I}U_i=\span\bigcup_{i\in I}U_i.
\end{equation}$$

```

_Proof_. It suffices to show that $U$ is the smallest subspace of $V$ containing each $U_i$.
* ($U\subseteq V$ is a subspace): Since $0\in\bigcup_{i\in I}U_i$, we see that $0\in U$. Take $u_1,u_2\in U$ and $\alpha\in K$, so there exist finite subsets $J_1,J_2\subseteq I$ and elements
$$\begin{equation}
    u_{1j}\in U_j\ \ \ \ \textrm{and}\ \ \ \ u_{2j}\in U_j
\end{equation}$$
for all $j\in J_1$ and $j\in J_2$, respectively, such that
$$\begin{equation}
    u_1=\sum_{j\in J_1}u_{1j}\ \ \ \ \textrm{and}\ \ \ \ u_2=\sum_{j\in J_2}u_{2j}.
\end{equation}$$
Let $J\coloneqq J_1\cup J_2$ and set $u_{1j}=0$ for all $j\in J\setminus J_1$ and $u_{2j}=0$ for all $j\in J\setminus J_2$. Observe then that
$$\begin{equation}
    \begin{aligned}
        \alpha u_1+u_2&=\alpha\sum\limits_{j\in J}u_{1j}+\sum\limits_{j\in J}u_{2j} \\
        &=\sum\limits_{j\in J}\alpha u_{1j}+u_{2j},
    \end{aligned}
\end{equation}$$
and since each $U_j$ is a subspace of $V$, we see that $\alpha u_{1j}+u_{2j}\in U_j$ for all $j\in J$. Since $J$ is finite, we see that $\alpha u_1+u_2\in U$ too and thus $U$ is a subspace of $V$.

We now need to prove that $U_i\subseteq U$ for all $i\in I$ and that $U\subseteq W$ for any other subspace $W$ of $V$ containing each $U_i$.
* Fix $i\in I$ and take any $u_i\in U_i$. Let $J\coloneqq\l\{i\r\}$ and observe that $u_i=\sum_{j\in J}u_j$, so $u_1\in U$.

Finally, consider any other subspace $W$ of $V$ such that $U_i\subseteq W$ for all $i\in I$. Take $u\in U$, so $u=\sum_{j\in J}u_j$ for some finite subset $J\subseteq I$ with each $u_j\in U_j$. Since each $u_j\in W$ and $W$ is closed under linear combinations, we see that $u\in W$ and hence $U\subseteq W$.<span style="float:right;">$\blacksquare$</span>
