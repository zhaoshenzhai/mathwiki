---
mathLink: $G\iso H$ $\Rightarrow$ ($G$ Abelian $\Leftrightarrow$ $H$ Abelian)
---

<div class="topSpace"></div>

Date Created: 17/10/2022 12:16:08
Tags: #Type/Proposition #Topic/Group_Theory

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $G$ and $H$ be isomorphic groups. Then $G$ is Abelian iff $H$ is Abelian._

```

_Proof_. Since $G\iso H$, there exists an isomorphism $\phi:G\to H$. We shall only prove the forward direction since $G\iso H$ iff $H\iso G$. Take $h_1,h_2\in H$, so there exists some $g_1,g_2\in G$ such that $\phi\l(g_1\r)=h_1$ and $\phi\l(g_2\r)=h_2$. Then, since $G$ is Abelian, we see that
$$\begin{equation}
    h_1h_2=\phi\l(g_1\r)\phi\l(g_2\r)=\phi\l(g_1g_2\r)=\phi\l(g_2g_1\r)=\phi\l(g_2\r)\phi\l(g_1\r)=h_2h_1.\qedin
\end{equation}$$
