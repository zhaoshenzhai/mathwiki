---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 27/06/2023 21:01:16
Tags: #Type/Proposition #Topic/Group_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: [[Basic properties of symmetric groups]]

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Fix $n\in\N^+$. Any two permutations $\sigma,\rho\in S_n$ are conjugate iff they have the same cycle type, which is a partition $1\leq t_1\leq\cdots\leq t_r$ of $n$ where each $t_i$ is the length of the $i^\textit{th}$ cycle $\sigma_i$ in the cycle decomposition $\sigma=\sigma_1\cdots\sigma_r$.

```

<b>Remark.</b> In particular, the number of conjugacy classes in $S_n$ is the number of partitions of $n$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i>
* ($\Rightarrow$) If $\sigma$ and $\rho$ is conjugate, then $\rho=\tau\sigma\tau^{-1}$ for some $\tau\in S_n$. Observe that if $\sigma\l(i\r)=j$, then $\rho\l(\tau\l(i\r)\r)=\tau\l(j\r)$. Thus if $\sigma_i\coloneqq\l(i_1\ \ \cdots\ \ i_t\r)$ is a cycle in the cycle decomposition $\sigma_1\cdots\sigma_r$ of $\sigma$, then
$$\begin{equation}
    \tau\sigma_i\tau^{-1}=\tau\l(i_1\ \ \cdots\ \ i_t\r)\tau^{-1}=\l(\tau\l(i_1\r)\ \ \cdots\ \ \tau\l(i_t\r)\r)
\end{equation}$$
is the corresponding cycle in the cycle decomposition of $\rho$ obtained by replacing each element $i$ by $\tau\l(i\r)$. Furthermore, since $\rho=\tau\sigma\tau^{-1}=\l(\tau\sigma_1\tau^{-1}\r)\cdots\l(\tau\sigma_r\tau^{-1}\r)$ is a product of disjoint cycles, we see that $\sigma$ and $\rho$ have the same cycle type.
* ($\Leftarrow$): Conversely, let $\sigma$ and $\rho$ have the same cycle type, say with $\sigma=\sigma_1\cdots\sigma_r=\l(i^1_1\ \ \cdots\ \ i^1_{t_1}\r)\cdots\l(i^r_1\ \ \cdots\ \ i^r_{t_r}\r)$ and $\rho=\rho_1\cdots\rho_r=\l(j^1_1\ \ \cdots\ \ j^1_{t_1}\r)\cdots\l(j^r_1\ \ \cdots\ \ j^r_{t_r}\r)$. Let $\tau\in S_n$ be defined by $\tau\l(i^a_b\r)\coloneqq j^a_b$, which makes $\rho=\tau\sigma\tau^{-1}$, as desired.<span style="float:right;">$\blacksquare$</span>
