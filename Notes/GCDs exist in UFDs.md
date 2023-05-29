<div class="topSpace"></div>

Date Created: 13/01/2023 13:09:49
Tags: #Type/Proposition #Topic/Ring_Theory #Courses/MATH457

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $R$ be a UFD. Then, for all $a,b\in R\comp\l\{0\r\}$, their greatest common divisor exists.

```

<i>Proof.</i> Since $R$ is a UFD, we may write $a=u\prod_{i=1}^{n}p_i^{\alpha_i}$ and $b=v\prod_{i=1}^{m}q_j^{\beta_j}$ for $p_i,q_j\in R$ irreducible, $\alpha_i,\beta_j\geq0$, and $u,v\in R^\times$. Let $\mu_i\coloneqq\min\l\{\alpha_i,\beta_i\r\}$ and set $d\coloneqq\prod_{i=1}^{n}p_i^{\mu_i}$. Observe that
$$\begin{equation}
    a=u\prod_{i=1}^{n}p_i^{\alpha_i}=u\prod_{i=1}^{n}p_i^{\mu_i}\cdot\prod_{i=1}^{n}p_i^{\alpha_i-\mu_i}
\end{equation}$$
where the powers of the latter product are natural numbers, and similarly for $b$. Thus $d$ is a common divisor for $a$ and $b$. If $d'$ is another common divisor for $a$ and $b$, say $d'=w\prod_{i=1}^{n}p_i^{\gamma_i}$ where $\gamma_i\geq0$ and $w\in R^\times$, we need to show that $d'\divides d$.
* First observe that $d'\divides a$, so there exists $k\in R$ such that $a=d'k$. Write $k=w'\prod_{i=1}^{n}p_i^{\gamma_i'}$ where $\gamma_i'\geq0$ and $w'\in R^\times$. Then
$$\begin{equation}
    u\prod_{i=1}^{n}p_i^{\alpha_i}=ww'\prod_{i=1}^{n}p_i^{\gamma_i}\cdot\prod_{i=1}^{n}p_i^{\gamma_i'},
\end{equation}$$
so unique factorization gives $\alpha_i=\gamma_i+\gamma_i'$ for all $1\leq i\leq n$. Thus $\gamma_i'=\alpha_i-\gamma_i$, so $k=w'\prod_{i=1}^{n}p_i^{\alpha_i-\gamma_i}$. This forces $\gamma_i\leq\alpha_i$ for all $1\leq i\leq n$.

Similarly, $\gamma_i\leq\beta_i$ for all $1\leq i\leq n$, so $\gamma_i\leq\mu_i$ too. Observe then that
$$\begin{equation}
    d=\prod_{i=1}^{n}p_i^{\mu_i}=w\prod_{i=1}^{n}p_i^{\gamma_i}\cdot\omega^{-1}\prod_{i=1}^{n}p_i^{\mu_i-\gamma_i}
\end{equation}$$
where the powers of the latter product are natural numbers. Thus $d'\divides d$, so we are done.<span style="float:right;">$\blacksquare$</span>
