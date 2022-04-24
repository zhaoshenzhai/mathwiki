<br />
<br />

Date Created: 05/04/2022 15:55:24
Tags: #Theorem #Closed

Proved by: [[Linear span is set of all linear combinations]], [Linear subspace $\Leftrightarrow$ closed under linear combination](Linear%20subspace%20iff%20closed%20under%20linear%20combination.md), [Linearly dependent $\Leftrightarrow$ exists span redundant element](Linearly%20dependent%20iff%20exists%20span%20redundant%20element.md)
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Theorem
title: Theorem (Unique Representation Theorem w.r.t. infinite Hamel basis).

_Let $K$ be a field and consider a subset $S\subseteq V$ of a vector space $V$ over $K$. Then $S$ is a (Hamel) basis of $V$ iff every non-zero vector $v\in V$ can be uniquely represented as a linear combination of vectors in $S$ with non-zero coefficients; formally, iff_
$$\begin{equation}
    \fa v\in V\setminus\l\{0\r\},\ex!n\in\N^\ast,\ex!\alpha_1,\dots,\alpha_n\in K\setminus\l\{0\r\},\ex!\l\langle s_1,\dots,s_n\r\rangle\in S^n:v=\sum_{i=1}^n\alpha_is_i.
\end{equation}$$

```

_Proof_.
* ($\Leftarrow$): Take $v\in V\setminus\l\{0\r\}$, so, in particular, $v$ can be written as a linear combination
$$\begin{equation}
    v=\sum_{i=1}^n\alpha_is_i
\end{equation}$$
which implies that $v\in\span S$. Since $\span S$ is a subspace of $V$, it contains the zero vector too and so $S$ is a spanning set of $V$. To prove linear independence, assume, for sake of contradiction, that $S$ is linearly dependent. Thus there exists $l\in\l\{1,\dots,n\r\}$ such that
$$\begin{equation}
    \span\l\{s_1,\dots,s_n\r\}=\span\l(\l\{s_1,\dots,s_n\r\}\setminus\l\{s_l\r\}\r),
\end{equation}$$
so, setting $J\coloneqq\l\{1,\dots,n\r\}\setminus\l\{l\r\}$, there exist coefficients $\beta_j\in K$ for all $j\in J$ such that
$$\begin{equation}
    v=\sum_{j\in J}\beta_js_j=\sum_{j\in J^\ast}\beta_js_j.\ \ \ \ \ \ \ \ \underbrace{\l(J^\ast\coloneqq J\setminus\l\{j\in J\mid\beta_j=0\r\}\r)}_{v\,\neq\,0\,\Rightarrow\,\l|J^\ast\r|\,\neq\,0}.
\end{equation}$$
But then $v$ has two representations as linear combinations of vectors in $S$ with non-zero coefficients, so we have a contradiction.

* ($\Rightarrow$): Take $v\in V\setminus\l\{0\r\}$ assume that
$$\begin{equation}
    v=\sum_{i=1}^n\alpha_ip_i=\sum_{j=1}^m\beta_jq_j
\end{equation}$$
for some sequences $\l\langle p_i\r\rangle,\l\langle q_j\r\rangle\in S^n$ and constants $\alpha_i,\beta_j\in K\setminus\l\{0\r\}$. Rearranging, we have that
$$\begin{equation}
    0=\sum_{i=1}^n\alpha_ip_i-\sum_{j=1}^m\beta_jq_j.\tag{$\ast$}
\end{equation}$$
Assume, w.l.o.g. and reindexing if necessary, that $p_1=q_1,\dots,p_l=q_l$ for some $l\in\min\l\{n,m\r\}$. It follows then that
$$\begin{equation}
    0=\underbrace{\sum_{k=1}^l\l(\alpha_k-\beta_k\r)p_k}_{\textrm{Group 1}}+\underbrace{\sum_{i=l+1}^n\alpha_ip_i}_{\mathclap{\textrm{Group 2}}}-\underbrace{\sum_{j=l+1}^m\beta_jq_j}_{\mathclap{\textrm{Group 3}}}.
\end{equation}$$
If there are any terms $\alpha_ip_i$ in Group 2, we can move it to left, divide by $\alpha_i$ throughout, and obtain a linear combination of the rest of the vectors. It follows then that $p_i$ is in their span, so it is span redundant and thus $S$ is linearly dependent, a contradiction; similarly for any $\beta_jq_j$ in Group 3. Therefore, both Groups 2 and 3 must vanish, so it must be the case that $l=n=m$. Only Group 1 remains, so
$$\begin{equation}
    0=\sum_{i=1}^n\l(\alpha_i-\beta_i\r)p_i,
\end{equation}$$
but since $S$ is linearly independent, it follows that $\alpha_i=\beta_i$ for all $i\in\l\{1,\dots,n\r\}$. Altogether, we have that $n=m$ and, for all $i\in\l\{1,\dots,n\r\}$, that $p_i=q_i$ and $\alpha_i=\beta_i$. The result follows.<span style="float:right;">$\blacksquare$</span>
