<br />
<br />

Date Created: 05/04/2022 15:55:24
Tags: #Theorem #Closed

Proved by: [Linearly dependent $\Leftrightarrow$ exists span redundant element](Linearly%20dependent%20iff%20exists%20span%20redundant%20element.md)
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Theorem
title: Theorem (Unique Representation Theorem).

_Let $K$ be a field and consider a subset $S\subseteq V$ of a vector space $V$ over $K$. Then $S$ is linearly independent iff every non-zero vector spanned by $S$ can be uniquely represented as a linear combination of vectors in $S$; formally, iff_
$$\begin{equation}
    \fa v\in\span\l(S\r)\setminus\l\{0_V\r\},\ex!n\in\N^\ast,\ex!\alpha_1,\dots,\alpha_n\in K\setminus\l\{0\r\},\ex!s_1,\dots,s_n\in S:v=\sum_{i=1}^n\alpha_is_i.
\end{equation}$$

```

_Proof_.
* ($\Leftarrow$): Assume, for sake of contradiction, that $S$ is linearly dependent. It follows then that there exists a span-redundant element $v\in S$; that is, an element $v\in S$ such that $v\in\span\l(S\setminus\l\{v\r\}\r)$. Observe then that there exist constants $\alpha_1,\dots,\alpha_n\in K\setminus\l\{0\r\}$ and vectors $s_1,\dots,s_n\in S\setminus\l\{v\r\}$, such that
$$\begin{equation}
    v=\sum_{i=1}^n\alpha_is_i.
\end{equation}$$
But, since $v\in S$ too, we can also the linear combination $v=1\cdot v$ which is distinct from the former since each $s_i$ is, in particular, distinct from $v$.

* ($\Rightarrow$): Take $v\in\span\l(S\r)\setminus\l\{0_V\r\}$ assume that
$$\begin{equation}
    v=\sum_{i=1}^n\alpha_ip_i=\sum_{j=1}^m\beta_jq_j
\end{equation}$$
where each $\alpha_i,\beta_j\in K\setminus\l\{0\r\}$ and all $p_i\textrm{'}$s and $q_j\textrm{'}$s are, separately, distinct elements of $S$. Rearranging, we have that
$$\begin{equation}
    0_V=\sum_{i=1}^n\alpha_ip_i-\sum_{j=1}^m\beta_jq_j.\tag{$\ast$}
\end{equation}$$
The left hand side of $\l(\,\ast\,\r)$ is only a linear combination if all $p_i\textrm{'}$s and $q_j\textrm{'}$s are, together, distinct. Assume, w.l.o.g. and reindexing if necessary, that $p_1=q_1,\dots,p_l=q_l$ for some $l\in\N$; in particular, $l=0$ would mean that the expression is a linear combination. It follows then that
$$\begin{equation}
    0_V=\underbrace{\sum_{k=1}^l\l(\alpha_k-\beta_k\r)p_k}_{\textrm{Group 1}}+\underbrace{\sum_{i=l+1}^n\alpha_ip_i}_{\mathclap{\textrm{Group 2}}}-\underbrace{\sum_{j=l+1}^m\beta_jq_j}_{\mathclap{\textrm{Group 3}}}
\end{equation}$$
where, in particular, the right hand side is a linear combination of the vectors $p_1,\dots,p_n,q_{l+1},\dots,q_m$.
  * If there are any terms $\alpha_ip_i$ in Group 2, we can move it to left, divide by $\alpha_i$ throughout, and obtain a linear combination of vectors in $S\setminus\l\{p_i\r\}$.
  * If there are any terms $\beta_jq_j$ in Group 3, we can move it to left, divide by $\beta_j$ throughout, and obtain a linear combination of vectors in $S\setminus\l\{q_j\r\}$.

  Both cases yield contradictions, so Groups 2 and 3 must vanish. More precisely, it must be the case that $l=n=m$. Hence we have the condition
$$\begin{equation}
    0_V=\sum_{i=1}^n\l(\alpha_i-\beta_i\r)p_i,
\end{equation}$$
on Group 1, but since all $p_i\textrm{'}$s are distinct and $S$ is linearly independent, it follows that $\alpha_i=\beta_i$ for all $i\in\l\{1,\dots,n\r\}$. Altogether, we have that $n=m$ and, for all $i\in\l\{1,\dots,n\r\}$, that $p_i=q_i$ and $\alpha_i=\beta_i$. The result follows.<span style="float:right;">$\blacksquare$</span>
