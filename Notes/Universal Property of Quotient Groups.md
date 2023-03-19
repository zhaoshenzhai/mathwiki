---
mathLink: Universal Property of $\pi:G\to G/N$
---

<div class="topSpace"></div>

Date Created: 03/01/2023 22:40:59
Tags: #Theorem #Topics/Group_Theory

Proved by: [[Basic properties of cosets]], [[Universal Property of Quotient Sets]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Universal Property of Quotient Groups).

_Let $N\nsgrpeq G$ be a normal subgroup of a group $G$. Then the projection $\pi:G\to G/N$ is universal among homomorphisms that map $N$ to the identity. That is, for any group $H$ and any homomorphism $\phi:G\to H$ such that $N\subseteq\ker\phi$, the following diagram commutes:_
<center><img src="app://local/home/zhao/Dropbox/MathWiki/Images/2023-01-03_224316/image.svg", width=175></center>

```

_Proof_. Observe that $G/N=G/\!\sim$ where $\sim$ is the equivalence relation on $G$ defined by $g_1\sim g_1$ iff $g_1N=g_2N$. Thus, for any $g_1,g_2\in G$ such that $g_1\sim g_2$, we have that $g_1^{-1}g_2\in N\subseteq\ker\phi$, so $\phi\l(g_1^{-1}g_2\r)=e$. But then $\phi\l(g_1\r)=\phi\l(g_2\r)$, so, by universality of $\pi:G\to G/\!\sim$, there exists a unique function $\tilde{\phi}:X/\!\sim\,\to H$ given by $\tilde{\phi}\l(\l[g\r]\r)=\phi\l(g\r)$ for all $g\in G$. Indeed, $\tilde{\phi}$ is a homomorphism since
$$\begin{equation}
    \tilde{\phi}\l(\l[g_1\r]\l[g_2\r]\r)=\tilde{\phi}\l(\l[g_1g_2\r]\r)=\phi\l(g_1g_2\r)=\phi\l(g_1\r)\phi\l(g_2\r)=\tilde{\phi}\l(\l[g_1\r]\r)\tilde{\phi}\l(\l[g_2\r]\r).\qedin
\end{equation}$$
