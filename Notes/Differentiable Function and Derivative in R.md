---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 30/11/2022 23:11:36
Tags: #Type/Definition #Topic/Real_Analysis

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: [[Frechet Differentiability and Derivative]]

Properties: [[Mean Value Theorems]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Fix some $\Omega\subseteq\R$ and a cluster point $c\in\Omega$. A function $f:\Omega\to\R$ is said to be <b>differentiable at $c$</b> if the limit
$$\begin{equation}
    f'\!\l(c\r)\coloneqq\lim\limits_{x\to c}\frac{f\l(x\r)-f\l(c\r)}{x-c}=\lim\limits_{h\to0}\frac{f\l(c+h\r)-f\l(c\r)}{h}
\end{equation}$$
exists, in which case $f'\!\l(c\r)$ is said to be the <b>derivative of $f$ at $c$</b>.

```

<b>Remark.</b> Note that $f$ is differentiable at $c$ iff there is some $\lambda\in\R$ such that $\lim\limits_{h\to0}\frac{f\l(c+h\r)-f\l(c\r)-\lambda h}{h}=0$, in which case $\lambda=f'\!\l(c\r)$. Indeed, the forward direction is trivial by setting $\lambda\coloneqq f'\!\l(c\r)$, and as for the converse, compute
$$\begin{equation}
    \lim\limits_{h\to0}\frac{f\l(c+h\r)-f\l(c\r)}{h}=\lim\limits_{h\to0}\frac{\lambda h+\l[f\l(c+h\r)-f\l(c\r)-\lambda h\r]}{h}=\lambda+\lim\limits_{h\to0}\frac{f\l(c+h\r)-f\l(c\r)-\lambda h}{h}=\lambda,
\end{equation}$$
showing that the limit exists and $f'\!\l(c\r)=\lambda$. Reformulating differentiability this way leads to a generalization to normed vector spaces.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Every differentiable function is continuous since $\lim\limits_{x\to c}\l[f\l(x\r)-f\l(c\r)\r]=\lim\limits_{x\to c}\l[\frac{f\l(x\r)-f\l(c\r)}{x-c}\cdot\l(x-c\r)\r]=\l(\lim\limits_{x\to c}\frac{f\l(x\r)-f\l(c\r)}{x-c}\r)\cdot\l(\lim\limits_{x\to c}x-c\r)=f'\!\l(c\r)\cdot0=0$.<span style="float:right;">$\blacklozenge$</span>
