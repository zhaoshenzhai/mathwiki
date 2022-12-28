---
mathLink: $g^k=e$ $\Leftrightarrow$ $\ord{g}$ divides $k$
---

<div class="topSpace"></div>

Date Created: 26/09/2022 23:49:34
Tags: #Proposition #Group_Theory

Proved by: [[Division Algorithm]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $G$ be a group and fix some $g\in G$ of finite order. Then, for all $k\in\N^+$, we have_
$$\begin{equation}
    g^k=e\ \ \ \ \ \ \ \ \Leftrightarrow\ \ \ \ \ \ \ \ \ord{g}\textrm{ \it{divides} }k.
\end{equation}$$

```

_Proof_. Let $n\coloneqq\ord{g}$.
* ($\Rightarrow$): The Division Algorithm applied to $k$ and $n$ furnishes unique integers $q,r\in\Z$ with $0\leq r<n$ such that $k=qn+r$. Observe then that
$$\begin{equation}
    e=g^k=g^{qn+r}=g^{qn}g^r=\l(g^n\r)^qg^r=e^qg^r=g^r.
\end{equation}$$
Since $g^r=e$ and $0\leq r<n$, this forces $r=0$. Hence $qn=k$, so $n\divides k$.

* ($\Leftarrow$): Since $n\divides k$, there exists some $l\in\Z$ such that $nl=k$. Observe then that $g^k=g^{nl}=\l(g^n\r)^l=e^l=e$.<span style="float:right;">$\blacksquare$</span>
