---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 13/10/2022 12:03:14
Tags: #Theorem #Group_Theory #Courses/MATH235

Proved by: [[Set of cosets partition the group]], [[Cosets have the same cardinality]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Lagrange$\textrm{'}$s Theorem).

_Let $H\subseteq G$ be a subgroup of a finite group $G$. Then_
$$\begin{equation}
    \l[G:H\r]\cdot\ord{H}=\ord{G}.
\end{equation}$$

```

**Remark.** Thus the order of every subgroup $H\subseteq G$ divides the order of $G$. Some immediate corollaries:
* For all $g\in G$, $\ord{g}$ divides $\ord{G}$. Indeed, since $\ord{g}=\ord{\l\langle g\r\rangle}$ and $\ord{\l\langle g\r\rangle}$ divides $\ord{G}$, we are done.

* If $p\coloneqq\l|G\r|$ is prime, then $G=\l\langle x\r\rangle$ for each non-trivial $x\in G$. Indeed, since $\ord{x}$ divides $p$ and $p$ is prime, either $\ord{x}=1$ or $\ord{x}=p$. But $x$ is non-trivial, so $\ord{x}=p$ and hence $\l\langle x\r\rangle=G$.
* If $K\subseteq H\subseteq G$ are all subgroups, then $\l[G:K\r]=\l[G:H\r]\l[H:K\r]$. Indeed, 
$$\begin{equation}
    \l[G:K\r]=\frac{\ord{G}}{\ord{K}}=\frac{\ord{G}}{\ord{H}}\frac{\ord{H}}{\ord{K}}=\l[G:H\r]\cdot\l[H:K\r].\exqedin
\end{equation}$$

---

_Proof_. Let $n\coloneqq\l[G:H\r]$ be the number of left-cosets of $H$ in $G$. Since the left-cosets of $H$ in $G$ partition $G$, we see that
$$\begin{equation}
    G=\bigsqcup_{i=1}^ng_iH.
\end{equation}$$
But every coset of $H$ has the same cardinality as $H$, so $\l|g_iH\r|=\ord{H}$ for all $i\in\l\{1,\dots,n\r\}$. Thus
$$\begin{equation}
    \ord{G}=n\ord{H}=\l[G:H\r]\cdot\ord{H}.\qedin
\end{equation}$$
