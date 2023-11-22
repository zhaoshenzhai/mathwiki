---
mathLink: $\mu_0\rightarrow\mu_0^\ast\rightarrow\l.\mu_0^\ast\r|_\mc{B}=\bar{\mu}\leftarrow\mu$
---

<div class="topSpace"></div>

Date Created: 21/11/2023 19:59:44
Tags: #Type/Proposition #In_Progress

Proved by: [[Caratheodory's Extension Theorem]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\mc{A}$ be an algebra on a set $X$. Consider a $\sigma$-finite premeasure $\mu_0$ on $\mc{A}$ and restrict $\mu_0^\ast$ onto $\mc{B}\coloneqq\bar{\mc{A}}$ in the pseudo-metric $d\l(B_1,B_2\r)\coloneqq\mu_0^\ast\!\l(B_1\symdiff B_2\r)$. Let $\mu$ be a further restriction of $\mu_0^\ast$ onto $\gen{\mc{A}}_\sigma$. Then $\mu$ is a measure that uniquely extends $\mu_0$ onto $\gen{\mc{A}}_\sigma$ and the $\sigma$-algebra $\Meas_\mu$ coincides with $\mc{B}$.
* Furthermore, the $\mu$-measurable sets are approximable from above by countable unions of sets in $\mc{A}$, i.e. for every $\mu$-measurable set $M$ and $\epsilon>0$, there is a countable union $U\supseteq M$ of sets in $\mc{A}$ such that $\mu\l(U\comp M\r)<\epsilon$.

```

<i>Proof.</i> By Carathéodory, the outer measure $\mu_0^\ast$ restricts to a measure $\mu$ on $\gen{\mc{A}}_\sigma$, proving (i). For (ii), That $\Meas_\mu\subseteq\mc{B}$ is easy since if $M=B\cup Z$ for some $B\in\gen{\mc{A}}_\sigma$ and $\mu^\ast$-null $Z$, then there is a sequence $A_n\in\mc{A}$ such that $A_n\to B$. Note that $d\l(M,B\r)=\mu^\ast\!\l(Z\r)=0$, so, for any $\epsilon>0$, we have $d\l(M,A_n\r)\leq d\l(M,B\r)+d\l(B,A_n\r)=d\l(B,A_n\r)\leq\epsilon$ for all eventually $n\in\N$. Thus $A_n\to M$, so $M\in\mc{B}$ as desired.

Conversely, take $M\in\mc{B}$, so for all $n>0$ there is some $A_n\in\mc{A}$ such that $\mu^\ast\!\l(A_n\symdiff M\r)=d\l(A_n,M\r)<1/3n$. For each $n>0$, we have a cover $\l\{A_{n,m}\r\}_m\subseteq\mc{A}$ of $A_n\symdiff M$ such that $\sum_m\mu\l(A_{n,m}\r)\leq\mu^\ast\!\l(A_n\symdiff M\r)+1/3n<2/3n$. Set $B\coloneqq\bigcup_n\l(A_n\comp\bigcup_mA_{n,m}\r)\in\gen{\mc{A}}_\sigma$ and $Z\coloneqq M\comp B$. Then $B\subseteq M$, so $M=B\cup Z$. We claim that $Z$ is $\mu^\ast$-null. Indeed, using monotonicity, countable subadditivity, and properties of complements, we have
$$\begin{equation}
    \begin{aligned}
        \mu^\ast\!\l(Z\r)&=\mu^\ast\!\l(M\comp B\r)=\mu^\ast\!\l(M\comp\bigcup_n\l(A_n\comp\bigcup_mA_{n,m}\r)\r)\leq\mu^\ast\!\l(M\comp\l(A_n\comp\bigcup_mA_{n,m}\r)\r)=\mu^\ast\!\l(\l(M\comp A_n\r)\cup\l(M\cap\bigcup_mA_{n,m}\r)\r) \\
        &\leq\mu^\ast\!\l(M\comp A_n\r)+\mu^\ast\!\l(\bigcup_mA_{n,m}\r)=\leq\mu^\ast\!\l(A_n\symdiff M\r)+\sum_m\mu^\ast\!\l(A_{n,m}\r)<\frac{1}{3n}+\frac{2}{3n}=\frac{1}{n}
    \end{aligned}
\end{equation}$$
for all $n>0$, so $\mu^\ast\!\l(Z\r)=0$ as desired. Heuristically, this allows us to approximate $\mu^\ast$-measurable sets by sets in $\mc{A}$, i.e. find some $B_\epsilon\in\mc{A}$ so that $\mu^\ast\!\l(M\symdiff B_\epsilon\r)<\epsilon$.
* In fact, one can take $B_\epsilon\supseteq M$, so $\mu^\ast\!\l(B_\epsilon\comp M\r)<\epsilon$. Indeed, there is some $A\in\mc{A}$ such that $\mu^\ast\!\l(A\symdiff M\r)<\epsilon/3$, so there is a cover $\l\{A_n\r\}_n\subseteq\mc{A}$ of $A\symdiff M$ such that $\sum_n\mu\l(A_n\r)<\mu^\ast\!\l(A\symdiff M\r)+\epsilon/3<2\epsilon/3$. Observe that $\l\{A\r\}\cup\l\{A_n\r\}_n\subseteq\mc{A}$ is a cover of $M$; set $B_\epsilon\coloneqq A\cup\bigcup_nA_n$ and compute
$$\begin{equation}
    \mu^\ast\!\l(B_\epsilon\comp M\r)=\mu^\ast\!\l(\l(A\comp M\r)\cup\bigcup_n\l(A_n\comp M\r)\r)\leq\mu^\ast\!\l(A\symdiff M\r)+\sum_n\mu^\ast\!\l(A_n\comp M\r)\leq\mu^\ast\!\l(A\symdiff M\r)+\sum_n\mu\l(A_n\r)<\epsilon.\exqedin
\end{equation}$$

---

* Indeed, since $\mu^\ast\!\l(Z\r)=0$, for every $m>0$ there is some cover $Z\subseteq\bigcup_nB^m_n$ with each $B^m_n\in\mc{B}$ such that $\sum_n\mu\l(B^m_n\r)<1/m$. Set $\widehat{Z}\coloneqq\bigcap_{m>0}\bigcup_nB^m_n\in\mc{B}$. Then $\widehat{Z}\subseteq\bigcup_nB^m_n$ for every $m>0$, so by monotonicity and countable subadditivity we have $\mu^\ast(\widehat{Z})\leq\mu^\ast\!\l(\bigcup_nB^m_n\r)\leq\sum_n\mu^\ast\!\l(B^m_n\r)<1/m$ for every $m>0$. Thus $\mu^\ast(\widehat{Z})=0$, and since $Z\subseteq\bigcup_nB^m_n$ for every $m$, we see that $Z\subseteq\widehat{Z}$ too.<span style="float:right;">$\blacklozenge$</span> ^null-set-outer-measure
