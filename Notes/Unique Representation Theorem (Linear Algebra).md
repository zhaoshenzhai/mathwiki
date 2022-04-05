<br />
<br />

Date Created: 05/04/2022 15:55:24
Tags: #Theorem #In_Progress

Proved by: [[Linearly independent subset cannot contain the zero vector]], [Linearly dependent $\Leftrightarrow$ exists span redundant element](Linearly%20dependent%20iff%20exists%20span%20redundant%20element.md)
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Theorem
title: Theorem.

_Let $K$ be a field and consider a subset $S\subseteq V$ of a vector space $V$ over $K$. Then $S$ is linearly independent in $V$ iff every non-zero spanned vector $v\in\span\l(S\r)$ can be uniquely represented by a linear combination of a unique finite subset of $S$. Formally, iff_
$$\begin{equation}
    \fa v\in\span\l(S\r)\setminus\l\{0_V\r\},\ex!n\in\N^\ast,\ex!\alpha_1,\dots,\alpha_n\in K\setminus\l\{0\r\},\ex!s_1,\dots,s_n\in S\setminus\l\{0_V\r\}:v=\sum_{i=1}^n\alpha_is_i.
\end{equation}$$

```

_Proof_.
* ($\Rightarrow$): Let $S$ be a linearly independent subset of $V$ and suppose that there exists some $v\in\span\l(S\r)\setminus\l\{0_V\r\}$ and two subsets $P\coloneqq\l\{p_1,\dots,p_n\r\}$ and $Q\coloneqq\l\{q_1,\dots,q_m\r\}$ of $S$ with (w.l.o.g.) $n\leq m$ such that
$$\begin{equation}
    v=\sum_{i=1}^n\alpha_ip_i=\sum_{j=1}^m\beta_jq_j
\end{equation}$$
for some constants $\alpha_i,\beta_j\in K\setminus\l\{0\r\}$; we wish to show that $P=Q$. Rearranging, we have that
$$\begin{equation}
    \sum_{i=1}^n\alpha_ip_i-\sum_{j=1}^m\beta_jq_j=0_V.\tag{$\ast$}
\end{equation}$$
Since $S$ is linearly independent and all constants are non-zero, it must be the case that $P\cap Q\neq\em$
  * ($P\subseteq Q$): Suppose, for sake of contradiction, that there exists some $k\in\l\{1,\dots,n\r\}$ such that $p_k\neq q_j$ for all $j\in\l\{1,\dots,m\r\}$. It follows then that the set $\l\{p_k\r\}\cup Q\subseteq S$ is linearly dependent, since $\l(\,\ast\,\r)$ implies that
$$\begin{equation}
    \alpha_kp_k-\sum_{j=1}^m\beta_jq_j=0_V
\end{equation}$$
and thus
$$\begin{equation}
    p_k=\sum_{j=1}^m\l(\frac{\beta_j}{\alpha_k}\r)q_j
\end{equation}$$
which, in particular, states that $p_i$ is a linear combination of $Q$, a contradiction. Furthermore, we have that $\alpha_i=\beta_i$ for all $i\in\l\{1,\dots,n\r\}$, for if not, then  $\l(\,\ast\,\r)$ would not be a trivial linear combination. It follows from our observations that, after renaming the elements of $Q$, that $\l(\,\ast\,\r)$ reduces to
$$\begin{equation}
    \sum_{\mathclap{j=n+1}}^m\beta_jq_j=0_V
\end{equation}$$
where each $q_j\neq p_i$ for any $p_i\in P$. Since each $\beta_j\neq0$, the only solution to this equation is when each $q_j=0_V$, but this contradicts the fact that $S$ is linearly independent and hence cannot contain the zero vector.

* ($\Leftarrow$): Take $v\in\span\l(S\r)\setminus\l\{0_V\r\}$ and assume that there exist unique non-zero constants $\gamma_1,\dots,\gamma_l$ and non-zero vectors $t_1,\dots,t_l$ such that
$$\begin{equation}
    v=\sum_{k=1}^l\gamma_kt_k.
\end{equation}$$
