<div class="topSpace"></div>

Date Created: 24/10/2023 20:56:15
References: #Ref/Fol07 #Ref/Anu23_564
Tags: #Type/Proposition #Topic/Real_Analysis

Proved by: [[Convergence Theorems]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\tpl{X,\mu}$ be a measure space. Then $L^1\!\l(X,\mu\r)$ equipped with $\|f\|_1\coloneqq\int\l|f\r|\,\d\mu$ is a pseudo-normed space over $\R$.
* Furthermore, for all $f_n\in L^+\!\l(X,\mu\r)$, we have $\int\sum_nf_n\,\d\mu=\sum_n\int f_n\,\d\mu$. Thus the map $\mu_f:A\mapsto\int_Af\,\d\mu$ is a measure on $\Meas_\mu$ for all $f\in L^+\!\l(X,\mu\r)$.

```

<i>Proof.</i> We first show that the integral of a simple function is well-defined, i.e. $s\coloneqq\sum_{i<n}a_i\cchi_{A_i}=\sum_{j<m}b_j\cchi_{B_j}$ implies $\sum_{i<n}a_i\mu\l(A_i\r)=\sum_{j<m}b_j\mu\l(B_j\r)$ for all $a_i,b_j\in\R$ and $A_i,B_j\in\Meas_\mu$. Indeed, it suffices to establish this between $\sum_{i<n}a_i\cchi_{A_i}$ and the standard representation $\sum_{k<l}c_k\cchi_{C_k}$ of $s$.
* First, suppose that all the $A_i$'s are pairwise disjoint. Set $A'_a\coloneqq\bigsqcup_{a_i=a}A_i$ and observe that $a\mu\l(A'_a\r)=\sum_{a_i=a}a\mu\l(A_i\r)=\sum_{a_i=a}a_i\mu\l(A_i\r)$. Note that $A'_a\cap A'_b=\em$ whenever $a\neq b$, so $A_a'=C_k$ and $a=c_k$ up to a permutation of indices. Thus $\sum_{k<l}c_k\mu\l(C_k\r)=\sum_{a\in f\l(X\r)}a\mu\l(A'_a\r)$, so
$$\begin{equation}
    \sum_{k<l}c_k\mu\l(C_k\r)=\sum_{a\in f\l(X\r)}a\mu\l(A'_a\r)=\sum_{a\in f\l(X\r)}\sum_{a_i=a}a_i\mu\l(A_i\r)=\sum_{i<n}a_i\mu\l(A_i\r).
\end{equation}$$

In general, we disjointify $\l\{A_i\r\}_{i<n}$ into a collection $\{A_j^\ast\}_{j<m}$ so that $A_i=\bigsqcup_{A_j^\ast\subseteq A_i}A_j^\ast$. For each $j<m$, set $a_j^\ast\coloneqq\sum_{A_i\supseteq A_j^\ast}a_i$. From the previous case, we have
$$\begin{equation}
    \sum_{k<l}c_k\mu\l(C_k\r)=\sum_{j<m}a_j^\ast\mu\l(A_j^\ast\r)=\sum_{j<m}\sum_{A_i\supseteq A_j^\ast}a_i\mu\l(A_j^\ast\r)=\sum_{i<n}\sum_{A_j^\ast\subseteq A_i}a_i\mu\l(A_j^\ast\r)=\sum_{i<n}a_i\mu\l(A_i\r).
\end{equation}$$
In particular, this shows that $\int$ is linear for simple functions. That $\|f\|_1\geq0$ for any $f\in L^1\!\l(X,\mu\r)$ is clear, and so is $\|s\|_1=0\Leftrightarrow s=0$ a.e. for simple functions $s$. The latter extends to all $f\in L^+\!\l(X,\mu\r)$ as follows. If $f=0$ not a.e., then there is some $n\geq1$ such that $f\geq1/n$ on some $A_n\in\Meas_\mu$ of positive measure. The simple function $s\coloneqq\cchi_{A_n}/n$ is $\leq f$ but $\int s\,\d\mu=\mu\l(A_n\r)/n>0=\int f\,\d\mu$, contradicting the definition $\int f\,\d\mu=\sup_{s\leq f}\int s\,\d\mu$. Conversely, if $f=0$ a.e., then any simple function $s\leq f$ is also $0$ a.e. and so $\int s\,\d\mu=0$; thus $\int f\,\d\mu=0$ too.

For linearity, take $f,g\in L^+\!\l(X,\mu\r)$. Let $s_n,t_n$ be simple functions such that $0\leq s_n\incto f$ and $0\leq t_n\incto g$. By the MCT, we have $\int s_n\,\d\mu\to\int f\,\d\mu$ and $\int t_n\,\d\mu\to\int g\,\d\mu$. Note that $s_n+t_n$ is a sequence of simple-functions approximating $f+g$, so $\int\l(s_n+t_n\r)\,\d\mu\to\int\l(f+g\r)\,\d\mu$. Observe then that
$$\begin{equation}
    \int\l(f+g\r)\,\d\mu=\lim_n\int\l(s_n+t_n\r)\,\d\mu=\lim_n\l(\int s_n\,\d\mu+\int t_n\,\d\mu\r)=\lim_n\int s_n\,\d\mu+\lim_n\int t_n\,\d\mu=\int f\,\d\mu+\int g\,\d\mu.
\end{equation}$$
That $\int cf\,\d\mu=c\int f\,\d\mu$ for all $c\in\R$ is obvious. Finally, $\int\l|f+g\r|\,\d\mu\leq\int\l(\l|f\r|+\l|g\r|\r)\,\d\mu=\int\l|f\r|\,\d\mu+\int\l|g\r|\,\d\mu$, which establishes the Triangle Inequality.

To show that $\mu_f\!\l(A\r)\coloneqq\int_Af\,\d\mu$ is a measure on $\Meas_\mu$ for any $f\in L^+\!\l(X,\mu\r)$, take $A\in\Meas_\mu$ partitioned into $A=\bigsqcup_nA_n$. Then
$$\begin{equation}
    \mu_f\!\l(A\r)=\int_Af\,\d\mu=\int\l(f\cdot\cchi_A\r)\,\d\mu=\int\sum_nf\cdot\cchi_{A_n}\,\d\mu\overset{!}{=}\sum_n\int\l(f\cdot\cchi_{A_n}\r)\,\d\mu=\sum_n\int_{A_n}f\,\d\mu=\sum_n\mu_f\!\l(A_n\r)
\end{equation}$$
assuming $\int\sum=\sum\int$, which we now show. Let $f_n\in L^+\!\l(X,\mu\r)$ be a sequence. Note that $\sum_{n<k}f_n\incto\sum_nf_n$, so, by the MCT, we obtain the desired result as
$$\begin{equation}
    \sum_{n<k}\int f_n\,\d\mu=\int\sum_{n<k}f_n\,\d\mu\incto\int\sum_nf_n\,\d\mu.\qedin
\end{equation}$$
