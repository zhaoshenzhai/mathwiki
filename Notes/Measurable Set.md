<div class="topSpace"></div>

Date Created: 18/10/2023 16:28:21
Tags: #Type/Definition #Topic/Real_Analysis

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Measure Space#^null-set-outer-measure]], [[Caratheodory's Extension Theorem]]

``` ad-Definition
title: Definition.

Let $\tpl{X,\mc{B},\mu}$ be a measure space. A subset $M\subseteq X$ is said to be <b>$\mu$-measurable</b> if $M=B\cup Z$ for some $B\in\mc{B}$ and some $\mu$-null set $Z\subseteq X$.

```

<b>Remark.</b> The collection $\Meas_\mu$ of all $\mu$-measurable subsets of $X$ is a $\sigma$-algebra. Indeed, let $B\cup Z\in\Meas_\mu$ and let $\hat{Z}\supseteq Z$ be $\mu$-null. Then $\l(B\cup Z\r)^c=B^c\comp Z$, which can be written as $\widetilde{B}\cup\widetilde{Z}\in\Meas_\mu$ where $\widetilde{B}\coloneqq B^c\comp\hat{Z}$ and $\widetilde{Z}\coloneqq\hat{Z}\comp Z$. If $B_n\cup Z_n\in\Meas_\mu$, then $\bigcup_n\l(B_n\cup Z_n\r)=\bigcup_nB_n\cup\bigcup_nZ_n$. Since $\mu^\ast\!\l(\bigcup_nZ_n\r)\leq\sum_n\mu^\ast\!\l(Z_n\r)=0$, we see that $\bigcup_nZ_n$ is $\mu$-null, as desired.

We may thus extend our measure $\mu$ on $\mc{B}$ to its <i>completion</i> $\bar{\mu}$ on $\Meas_\mu$ by setting $\bar{\mu}\l(B\cup Z\r)\coloneqq\mu\l(B\r)$. This is well-defined since if $B_0\cup Z_0=B_1\cup Z_1$, then we have $B_0\comp B_1\subseteq Z_1$ and $B_1\comp B_0\subseteq Z_0$. Thus $B_i\subseteq\l(B_0\cap B_1\r)\cup\hat{Z}$ where $\hat{Z}\supseteq Z_0\cup Z_1$ is such that $\mu\,(\hat{Z})=0$, so $\mu\l(B_0\cap B_1\r)\leq\mu\l(B_i\r)\leq\mu\,(\l(B_0\cap B_1\r)\cup\hat{Z})=\mu\l(B_0\cap B_1\r)$. In particular, we see that $\mu\l(B_0\r)=\mu\l(B_1\r)$. This extension is also unique since if $\nu$ is any extension of $\mu$ to $\Meas_\mu$, then
$$\begin{equation}
    \mu\l(B\r)=\nu\l(B\r)\leq\nu\l(B\cup Z\r)\leq\nu\,(B\cup\hat{Z})\leq\mu\,(B\cup\hat{Z})=\mu\l(B\r).\qedin
\end{equation}$$

---

<b>Remark.</b> Let $\mu$ be a premeasure on an algebra $\mc{A}$ on $X$. By Carathéodory, the outer measure $\mu^\ast$ restricts to a measure on the $\sigma$-algebra $\mc{B}\coloneqq\bar{\mc{A}}$, where the closure is taken in the pseudo-metric $d\l(A,B\r)\coloneqq\mu^\ast\!\l(A\symdiff B\r)$. The measure $\mu^\ast$ further restricts down to a measure on $\gen{\mc{A}}_\sigma$. We claim that in the measure space $\tpl{X,\gen{\mc{A}}_\sigma,\mu^\ast}$, the $\mu^\ast$-measurable sets $\mc{M}\coloneqq\Meas_{\mu^\ast}$ is precisely $\mc{B}$.
* That $\mc{M}\subseteq\mc{B}$ is easy since if $M=B\cup Z$ for some $B\in\gen{\mc{A}}_\sigma$ and $\mu^\ast$-null $Z$, then there is a sequence $A_n\in\mc{A}$ such that $A_n\to B$. Note that $d\l(M,B\r)=\mu^\ast\!\l(Z\r)=0$, so, for any $\epsilon>0$, we have $d\l(M,A_n\r)\leq d\l(M,B\r)+d\l(B,A_n\r)=d\l(B,A_n\r)\leq\epsilon$ for all eventually $n\in\N$. Thus $A_n\to M$, so $M\in\mc{B}$ as desired.

Conversely, take $M\in\mc{B}$, so for all $n>0$ there is some $A_n\in\mc{A}$ such that $\mu^\ast\!\l(A_n\symdiff M\r)=d\l(A_n,M\r)<1/3n$. For each $n>0$, we have a cover $\l\{A_{n,m}\r\}_{m\in\N}\subseteq\mc{A}$ of $A_n\symdiff M$ such that $\sum_{m\in\N}\mu\l(A_{n,m}\r)\leq\mu^\ast\!\l(A_n\symdiff M\r)+1/3n<2/3n$. Set $B\coloneqq\bigcup_n\l(A_n\comp\bigcup_mA_{n,m}\r)\in\gen{\mc{A}}_\sigma$ and $Z\coloneqq M\comp B$. Then $B\subseteq M$, so $M=B\cup Z$. We claim that $Z$ is $\mu^\ast$-null. Indeed, using monotonicity, countable subadditivity, and properties of complements, we have
$$\begin{equation}
    \begin{aligned}
        \mu^\ast\!\l(Z\r)&=\mu^\ast\!\l(M\comp B\r)=\mu^\ast\!\l(M\comp\bigcup_n\l(A_n\comp\bigcup_mA_{n,m}\r)\r)\leq\mu^\ast\!\l(M\comp\l(A_n\comp\bigcup_mA_{n,m}\r)\r)=\mu^\ast\!\l(\l(M\comp A_n\r)\cup\l(M\cap\bigcup_mA_{n,m}\r)\r) \\
        &\leq\mu^\ast\!\l(M\comp A_n\r)+\mu^\ast\!\l(\bigcup_mA_{n,m}\r)=\leq\mu^\ast\!\l(A_n\symdiff M\r)+\sum_m\mu^\ast\!\l(A_{n,m}\r)<\frac{1}{3n}+\frac{2}{3n}=\frac{1}{n}
    \end{aligned}
\end{equation}$$
for all $n>0$, so $\mu^\ast\!\l(Z\r)=0$ as desired.<span style="float:right;">$\blacklozenge$</span>