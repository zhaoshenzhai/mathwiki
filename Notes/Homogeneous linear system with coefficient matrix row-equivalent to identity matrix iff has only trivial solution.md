---
custom_alias: Homogeneous system $A\v{x}=\v{0}$ with $A\sim I$ $\Leftrightarrow$ only trivial solution
---

<br />
<br />

Date Created: 06/04/2022 22:54:31
Tags: #Proposition #Closed

Proved by: [Row-equivalent augmented matrices $\Rightarrow$ equivalent linear systems](Row-equivalent%20augmented%20matrices%20implies%20equivalent%20linear%20systems.md), [Homogeneous $m\times n$ linear system with $m<n$ $\Rightarrow$ non-trivial solutions](Homogeneous%20m%20by%20n%20linear%20system%20with%20m<n%20has%20a%20non-trivial%20solution.md)
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider an $n\times n$ homogeneous systemw $A\v{x}=\v{0}$ for some fixed $n\in\N^\ast$. Then $A\sim I$ iff the system has only the trivial solution._

```

_Proof_.
* ($\Rightarrow$): Since $A\sim I$, the systems $A\v{x}=\v{0}$ and $I\v{x}=\v{0}$ have the same solutions. However, viewing $\v{x}\in\mat{n\times1}{K}$, we see that $I\v{x}=\v{x}$ and thus $\v{x}=\v{0}$. This forces all solutions to be the trivial solution.

* ($\Leftarrow$): Let $R\coloneqq\rref\l(A\r)$ be with $r$ non-zero rows. If $r<n$, then the system $R\v{x}=\v{0}$, and hence $A\v{x}=\v{0}$ has a non-trivial solution, a contradiction. Thus $r=n$, so $R$ has no zero-rows. By $\axiref[2]$, each row $i$ of $R$ has a leading $1$ in some column $k_i$. We claim that $\axiref[3]$ forces $k_i=i$ for all rows $i$.
  * Set $l\coloneqq k_i$ and observe that there are $n-l$ columns to the right of $l$ and $n-i$ rows, each containing a leading $1$, below $i$. The pivot columns corresponding to these leading $1\textrm{'}$s must, by $\axiref[3]$, occur to the right of $l$; since there are $\l(n-i\r)$-many, we need
$$\begin{equation}
    n-i\leq n-l\ \ \ \ \ \ \ \ \Rightarrow\ \ \ \ \ \ \ \ l\leq i.
\end{equation}$$
  Similarly, there are $l-1$ columns to the left of $l$ and $i-1$ rows, each containing a leading $1$, above $i$. The pivot columns corresponding to these leading $1\textrm{'}$s must, by $\axiref[3]$, occur to the left of $l$; since there are $\l(i-1\r)$-many, we need
$$\begin{equation}
    i-1\leq l-1\ \ \ \ \ \ \ \ \Rightarrow\ \ \ \ \ \ \ \ l\geq i.
\end{equation}$$

  Furthermore, $\axirref$ forces all entries above and below all leading $1\textrm{'}$s to vanish, so $R$ is the matrix with $1\textrm{'}$s on its diagonal and $0\textrm{'}$s everywhere else; that is, $R=I$. It follows then that $A\sim I$.<span style="float:right;">$\blacksquare$</span>
