---
mathLink: $\dim V=0$ $\Leftrightarrow$ $V=\l\{0\r\}$
---

<div class="topSpace"></div>

Date Created: 06/04/2022 22:04:49
Tags: #Proposition #Topics/Linear_Algebra

Proved by: [[Linearly independent subset cannot contain the zero vector]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider a $K$-vector space $V$. Then $\dim V=0$ iff $V$ is the zero vector space._

```

_Proof_.
* ($\Rightarrow$): If $V\neq\l\{0\r\}$, take some non-zero $v\in V$. Observe that $\l\{v\r\}$ is linearly independent, so all bases of $V$ must contain at least $\l|\l\{v\r\}\r|=1$ many vectors. Thus $\dim V\geq1$, a contradiction.

* ($\Leftarrow$): It suffices to find a basis for $\l\{0\r\}$, but since $\l\{0\r\}$ contains only the zero vector $0$ and any linearly independent set cannot contain $0$, we see that there are no non-empty bases for $\l\{0\r\}$. The only option then is the empty set $\em$, which we observe is trivially linearly independent and has cardinality $\l|\em\r|=0$. To see that $\span\l(\em\r)=\l\{0\r\}$, observe that
$$\begin{align}
    \span\l(\em\r)&=\bigcap\l\{U\subseteq\l\{0\r\}\mid\em\subseteq U\land U\textrm{ is a linear subspace of }\l\{0\r\}\r\} && \textrm{Definition of linear span} \\
    &=\bigcap\l\{U\subseteq\l\{0\r\}\mid U\textrm{ is a linear subspace of }\l\{0\r\}\r\} && \em\subseteq U\textrm{ vacuously} \\
    &=\bigcap\l\{\l\{0\r\}\r\} && \textrm{The only subspaces of $\l\{0\r\}$ are trivial subspaces} \\
    &=\l\{0\r\}. && \textrm{Definition of intersection}\qedin
\end{align}$$
