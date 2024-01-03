---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 23/10/2022 15:55:35
References: #Ref/Anu22_254
Tags: #Type/Definition #Topic/Real_Analysis

Abstractions: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Binomial Theorem]]

``` ad-Example
title: Example (Euler’s Number).

We define <b>Euler’s Number</b> as the limit $e\coloneqq\lim\limits_{n\to\infty}\l(1+\frac{1}{n}\r)^n$.

```

<i>Proof.</i> We shall prove that the sequence $e_n\coloneqq\l(1+\frac{1}{n}\r)^n$ is increasing by comparing consecutive terms. Indeed, by the Binomial Theorem, we see that
$$\begin{equation}
    e_n=\l(1+\frac{1}{n}\r)^n=\sum_{k=0}^n\binom{n}{k}\frac{1}{n^k}=1+\sum_{k=1}^n\binom{n}{k}\frac{1}{n^k}=1+\sum_{k=1}^n\frac{1}{k!n^k}\prod_{i=0}^{k-1}\l(n-i\r)=1+\sum_{k=1}^n\frac{1}{k!}\prod_{i=0}^{k-1}\frac{n-i}{n}=1+\sum_{k=1}^n\frac{1}{k!}\prod_{i=0}^{k-1}\l(1-\frac{i}{n}\r).
\end{equation}$$
Thus we have
$$\begin{equation}
    e_{n+1}=1+\sum_{k=1}^{n+1}\frac{1}{k!}\prod_{i=1}^{k-1}\l(1-\frac{i}{n+1}\r)>1+\sum_{k=1}^n\frac{1}{k!}\prod_{k=1}^{k-1}\l(1-\frac{i}{n+1}\r)>1+\sum_{k=1}^n\frac{1}{k!}\prod_{i=0}^{k-1}\l(1-\frac{i}{n}\r)=e_n
\end{equation}$$
for all $n\in\N^+$, so $\tpl{e_n}$ is increasing. Since $e_1=2$, we see that the sequence is bounded below by $2$. We now show that $\tpl{e_n}$ is bounded above by $3$, and so converges to some number $2<e<3$. Indeed, we have that
$$\begin{equation}
    e_n=1+\sum_{k=1}^n\frac{1}{k!}\prod_{i=0}^{k-1}\frac{n-i}{n}\leq1+\sum_{k=1}^n\frac{1}{k!}\leq1+\sum_{k=1}^n\frac{1}{2^{k-1}}=1+\sum_{k=0}^{n-1}\frac{1}{2^k}=1+2\l(1-\frac{1}{2^n}\r)<3.\qedin
\end{equation}$$
