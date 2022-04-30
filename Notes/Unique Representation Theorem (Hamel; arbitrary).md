<br />
<br />

Date Created: 05/04/2022 15:55:24
Tags: #Theorem #Closed

Proved by: [[Linear span is set of all linear combinations]], [Linear subspace $\Leftrightarrow$ closed under linear combination](Linear%20subspace%20iff%20closed%20under%20linear%20combination.md), [Linearly dependent $\Leftrightarrow$ exists span redundant element](Linearly%20dependent%20iff%20exists%20span%20redundant%20element.md)
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Theorem
title: Theorem (Unique Representation Theorem w.r.t. arbitrary Hamel basis).

_Let $K$ be a field and consider an indexed subset_ $\mc{B}\coloneqq\l\{b_i\r\}_{i\in I}\!\subseteq V$ _of a vector space $V$ over $K$. Then $\mc{B}$ is a (Hamel) basis of $V$ iff every vector $v\in V$ can be uniquely represented as a linear combination of vectors in $\mc{B}$ with non-zero coefficients; formally, iff_
$$\begin{equation}
    \fa v\in V,\ex!n\in\N,\ex!\l\langle\alpha_1,\dots,\alpha_n\r\rangle\in K^n\setminus\l\{0\r\}:v=\sum_{i=1}^n\alpha_ib_i.
\end{equation}$$

```
_Proof_.
* ($\Rightarrow$): Take $v\in V\setminus\l\{0\r\}$; if $v=0$, then, since $\mc{B}$ is linearly independent, we cannot represent $0$ as a non-trivial linear combination of vectors in $\mc{B}$ and thus the representation of $0$ is unique (with $n=0$). Since $\span\mc{B}=V$, we know that $v$ can be expressed as a linear combination of vectors in $\mc{B}$ with non-zero coefficients; we wish to prove that such a representation is unique. Assume, for sake of contradiction, that
$$\begin{equation}
    v=\sum_{i=1}^n\alpha_ip_i=\sum_{j=1}^m\beta_jq_j
\end{equation}$$
for some distinct sequences $\l\langle p_i\r\rangle,\l\langle q_j\r\rangle\in\mc{B}^n$ and coefficients $\alpha_i,\beta_j\in K\setminus\l\{0\r\}$. Rearranging, we have that
$$\begin{equation}
    0=\sum_{i=1}^n\alpha_ip_i-\sum_{j=1}^m\beta_jq_j.\tag{$\ast$}
\end{equation}$$
Assume, w.l.o.g. and reindexing if necessary, that $p_1=q_1,\dots,p_l=q_l$ for some $l\in\min\l\{n,m\r\}$. It follows then that
$$\begin{equation}
    0=\underbrace{\sum_{k=1}^l\l(\alpha_k-\beta_k\r)p_k}_{\textrm{Group 1}}+\underbrace{\sum_{i=l+1}^n\alpha_ip_i}_{\mathclap{\textrm{Group 2}}}-\underbrace{\sum_{j=l+1}^m\beta_jq_j}_{\mathclap{\textrm{Group 3}}}.
\end{equation}$$
If there are any terms $\alpha_ip_i$ in Group 2, we can move it to left, divide by $\alpha_i$ throughout, and obtain a linear combination of the rest of the vectors. It follows then that $p_i$ is in their span, so it is span redundant and thus $\mc{B}$ is linearly dependent, a contradiction; similarly for any $\beta_jq_j$ in Group 3. Therefore, both Groups 2 and 3 must vanish, so it must be the case that $l=n=m$. Only Group 1 remains, so
$$\begin{equation}
    0=\sum_{i=1}^n\l(\alpha_i-\beta_i\r)p_i,
\end{equation}$$
but since $\mc{B}$ is linearly independent, it follows that $\alpha_i=\beta_i$ for all $i\in\l\{1,\dots,n\r\}$. Altogether, we have that $n=m$ and, for all $i\in\l\{1,\dots,n\r\}$, that $p_i=q_i$ and $\alpha_i=\beta_i$. The result follows.

* ($\Leftarrow$) Since each $v\in V$ can be written as a linear combination of vectors in $\mc{B}$ (uniquely or not), we see that $v\in\span\mc{B}$ and so $\mc{B}$ is a spanning set of $V$. To prove linear independence, observe that we can write the zero vector as the empty sum
$$\begin{equation}
    0=\sum\limits_{i=1}^00b_i,
\end{equation}$$
so if $\sum_{i=1}^n\alpha_ib_i=0$ for any sequence $\l\langle\alpha_i\r\rangle\in K^n$ and finite subset $\l\{b_1,\dots,b_n\r\}\subseteq\mc{B}$ with $n\geq1$, uniqueness of the representation of $0$ forces each $\alpha_i=0$. If $n=0$, then $\alpha_i=0$ for each $i\in\em$ vacuously.<span style="float:right;">$\blacksquare$</span>
