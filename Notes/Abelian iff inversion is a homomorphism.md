---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 17/10/2022 12:02:16
Tags: #Proposition #Courses/MATH235

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $G$ be a group. Then $G$ is Abelian iff the map $\phi:G\to G:g\mapsto g^{-1}$ is an isomorphism._

```

_Proof_. Take $g_1,g_2\in G$.
* ($\Rightarrow$): It is obvious that $\phi$ is a bijection. Since $G$ is Abelian, we see that
$$\begin{equation}
    \phi\l(g_1g_2\r)=\l(g_1g_2\r)^{-1}=g_2^{-1}g_1^{-1}=g_1^{-1}g_2^{-1}=\phi\l(g_1\r)\phi\l(g_2\r).
\end{equation}$$

* ($\Leftarrow$): Observe that
$$\begin{equation}
    g_1g_2=\l(g_2^{-1}g_1^{-1}\r)^{-1}=\phi\l(g_2^{-1}g_1^{-1}\r)=\phi\l(g_2^{-1}\r)\phi\l(g_1^{-1}\r)=g_2g_1.\qedin
\end{equation}$$
