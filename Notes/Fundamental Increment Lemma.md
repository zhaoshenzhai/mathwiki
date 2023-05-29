<div class="topSpace"></div>

Date Created: 01/12/2022 10:12:50
Tags: #Type/Theorem #Topic/Analysis

Proved by: [[Functional Limit Theorems in R]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: [[Frechet Differentiability slash Derivative]]

``` ad-Theorem
title: Theorem (Fundamental Increment Lemma).

Fix some $\Omega\subseteq\R$ and a cluster point $c\in\Omega$. A function $f:\Omega\to\R$ is differentiable at $c$ iff there exists some $\lambda\in\R$ such that
$$\begin{equation}
    \lim\limits_{h\to0}\frac{f\l(c+h\r)-f\l(c\r)-\lambda h}{h}=0,
\end{equation}$$
in which case $\lambda=f'\l(c\r)$.

```

<b>Remark.</b> This makes explicit how the function $l\l(h\r)\coloneqq\lambda h$ is the $\textrm{`}$best linear approximation$\textrm{'}$ to the $\textrm{`}$increment function$\textrm{'}$ $i_c\!\l(h\r)\coloneqq f\l(c+h\r)-f\l(c\r)$, in the sense that the error $\epsilon_c\!\l(h\r)\coloneqq i_c\!\l(h\r)-l\l(h\r)$ converges to $0$ superlinearly.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i>
* ($\Rightarrow$): Suppose that $f$ is differentiable at $c$, and take $\lambda\coloneqq f'\l(c\r)$. Observe then that
$$\begin{equation}
    \lim\limits_{h\to0}\frac{f\l(c+h\r)-f\l(c\r)-\lambda h}{h}=\lim\limits_{h\to0}\l[\frac{f\l(c+h\r)-f\l(c\r)}{h}-\lambda\r]=0.
\end{equation}$$

* ($\Leftarrow$): Simply compute
$$\begin{equation}
    \lim\limits_{h\to0}\frac{f\l(c+h\r)-f\l(c\r)}{h}=\lim\limits_{h\to0}\frac{\lambda h+\l[f\l(c+h\r)-f\l(c\r)-\lambda h\r]}{h}=\lambda+\lim\limits_{h\to0}\frac{f\l(c+h\r)-f\l(c\r)-\lambda h}{h}=\lambda,
\end{equation}$$
so the limit exists and $f'\l(c\r)=\lambda$.<span style="float:right;">$\blacksquare$</span>
