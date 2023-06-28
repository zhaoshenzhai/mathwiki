---
mathLink: $G/Z\l(G\r)$ cyclic $\Rightarrow$ $G$ abelian
---

<div class="topSpace"></div>

Date Created: 28/06/2023 19:00:48
Tags: #Type/Proposition #Topic/Group_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $G$ be a group. If $G/Z\l(G\r)$ is cyclic, then $G$ is abelian.

```

<i>Proof.</i> Since $G/Z\l(G\r)$ is cyclic, there is some $x\in G$ such that $xZ\l(G\r)$ generates $G$. Then, for all $g\in G$, we see that $gZ\l(G\r)=\l(xZ\l(G\r)\r)^r$ for some $r\in\N$, so $g=x^rz$ for some $z\in Z\l(G\r)$. Take $g_1,g_2\in G$ and observe that
$$\begin{equation}
    g_1g_2=x^{r_1}z_1x^{r_2}z_2=x^{r_1+r_2}z_1z_2=x^{r_2}x^{r_1}z_2z_1=x^{r_2}z_2x^{r_1}z_1=g_2g_1.\qedin
\end{equation}$$
