<br />
<br />

Date Created: 04/04/2022 17:35:23
Tags: #Proposition #Closed

Proved by: [Linear subspace $\Leftrightarrow$ closed under linear combination](Linear%20subspace%20iff%20closed%20under%20linear%20combination.md)
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider a subset $S\subseteq V$ of a vector space $V$ over $K$. Then_
$$\begin{equation}
    \span\l(S\r)=L\l(S\r)\coloneqq\l\{v\in V\mid v\textrm{\it{ is a linear combination of vectors in }}S\r\}.
\end{equation}$$

```

_Proof_. We proceed by double containment.
* ($\supseteq$): Take $v\in L\l(S\r)$, so there exists some $n\in\N^\ast$ such that
$$\begin{equation}
    v=\sum_{i=1}^n\alpha_i s_i
\end{equation}$$
for some $\alpha_i\in K$ and $\l\langle s_i\r\rangle\in S^n$. It suffices to take any linear subspace $U\subseteq V$ that contains $S$ and show that $v\in U$, for then $v$ is in the intersection of all such subspaces which implies that $v\in\span\l(S\r)$. To see this, observe that since $S\subseteq U$, we have that $s_i\in U$ for all $i\in\l\{1,\dots,n\r\}$. Since $U$ is closed under linear combinations, we see that $v\in U$ too.

* ($\subseteq$): Take $v\in\span\l(S\r)$; it suffices to show that $L\l(S\r)$ is a linear subspace of $V$ containing $S$.
    * ($S\subseteq L\l(S\r)$): Take $s\in S$ and observe that $s=1s$, so $s$ is a linear combination of a finite sequence of $S$, namely of $\l\langle s\r\rangle$ with coefficient $1\in K$.

    * ($L\l(S\r)$ is a linear subspace of $V$): Take $\gamma\in K$ and $l_1,l_2\in L\l(S\r)$, so there exist $\alpha_i,\beta_j\in K$ and sequences $\l\langle s_i\r\rangle,\l\langle t_j\r\rangle\in S^n$ such that$$\begin{equation}
        l_1=\sum_{i=1}^n\alpha_is_i\ \ \ \ \textrm{and}\ \ \ \ l_2=\sum_{j=1}^m\beta_jt_j.
    \end{equation}$$
    Observe then that$$\begin{equation}
        \begin{aligned}
            \gamma l_1+l_2&=\gamma\sum_{i=1}^n\alpha_i s_i+\sum_{j=1}^m\beta_jt_j && \textrm{Substitution} \\
            &=\sum_{i=1}^n\l(\gamma\alpha_i\r)s_i+\sum_{j=1}^m\beta_jt_j, && \textrm{Left-distribution on $K$}
        \end{aligned}
    \end{equation}$$
    so $\gamma l_1+l_2$ is the linear combination of sequence $\l\langle s_1,\dots,s_n,t_1,\dots,t_m\r\rangle$ with coefficients $\l\langle\gamma\alpha_1,\dots,\gamma\alpha_n,\beta_1,\dots,\beta_m\r\rangle$. It follows then that $L\l(S\r)$ is closed under addition and scalar multiplication, so $L\l(S\r)$ is a linear subspace of $V$.<span style="float:right;">$\blacksquare$</span>
