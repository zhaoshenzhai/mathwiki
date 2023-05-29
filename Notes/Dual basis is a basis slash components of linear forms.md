---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 01/02/2023 12:39:19
Tags: #Type/Proposition #Topic/Linear_Algebra

Proved by: [[Spanning subset with same cardinality as dimension (finite) is a basis]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $V$ be a finite-dimensional $K$-vector space and let $\mc{B}\coloneqq\l\{e_1,\dots,e_n\r\}$ be a basis for $V$. Then the set $\mc{B}^\dual\coloneqq\l\{\epsilon_1,\dots,\epsilon_n\r\}$, where
$$\begin{equation}
    \epsilon_i:V\to K\ \ \ \ \ \ \ \ \textrm{\it{mapping}}\ \ \ \ \ \ \ \ e_j\mapsto\delta_{ij}
\end{equation}$$
for all $1\leq i\leq n$, is a basis for $V^\dual$. Indeed, for any $\omega\in V^\dual$, we have
$$\begin{equation}
    \omega=\sum_{i=1}^{n}\omega\l(e_i\r)\epsilon_i.
\end{equation}$$

```

**Remark.** Thus, for every $v\in V$, we have
$$\begin{equation}
    \omega\l(v\r)=\l(\sum_{i=1}^{n}\omega\l(e_i\r)\epsilon_i\r)\l(\sum_{j=1}^{n}v_ie_i\r)=\sum_{i=1}^{n}\sum_{j=1}^{n}\omega\l(e_i\r)v_j\delta_{ij}=\sum_{i=1}^{n}\omega\l(e_i\r)v_i.\exqedin
\end{equation}$$

---

_Proof_. Since $\dim V=\dim V^\dual$, it suffices to show that $\omega=\sum_{i=1}^{n}\omega\l(e_i\r)\epsilon_i$ for all $\omega\in V^\ast$, for then $\mc{B}^\dual$ spans $V^\dual$ and is hence a basis for $V^\dual$. But this follows by applying both sides on $e_j$ for any $1\leq j\leq n$ to obtain
$$\begin{equation}
    \l(\sum_{i=1}^{n}\omega\l(e_i\r)\epsilon_i\r)\l(e_j\r)=\sum_{i=1}^{n}\omega\l(e_i\r)\epsilon_i\l(e_j\r)=\sum_{i=1}^{n}\omega\l(e_i\r)\delta_{ij}=\omega\l(e_j\r).\qedin
\end{equation}$$
