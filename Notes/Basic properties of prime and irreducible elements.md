---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 23/07/2023 22:45:30
References:
Tags: #Type/Proposition #Topic/Rings_and_Modules/Ring_Theory

Proved by: <i>Not Applicable</i>
References: [[Maximal implies prime]], [[Ideal is maximal iff quotient is a field]]
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $R$ be an integral domain. Then every (non-zero) prime element is irreducible, and the converse holds if $R$ is a UFD. Furthermore:
* An element $a\in R$ is prime iff $\gen{a}$ is a prime ideal.
* An element $a\in R$ is irreducible iff $\gen{a}$ is maximal amongst all proper principal ideals.

```

<b>Remark.</b> If $R$ is a PID, this shows that an ideal $\gen{a}$ is prime iff it is maximal. Thus $R/\!\gen{a}$ is an integral domain iff it is a field.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> If $a=rs$ for some $r,s\in R$, then either $a\divides r$ or $a\divides s$. Assume w.l.o.g. that $a\divides r$, so $ab=r$ for some $b\in R$. Then $a=rs=\l(ab\r)s=a\l(bs\r)$, so $bs=1$ and hence $s\in R^\times$. Conversely, let $a\divides\!\l(rs\r)$ for some $r,s\in R$, so $ab=rs$ for some $b\in R$. Since $R$ is a UFD, we can write $r=\prod_{i=1}^nx_i$, $s=\prod_{j=1}^my_j$, and $b=\prod_{k=1}^lz_k$ for irreducible $x_i,y_j,z_k\in R$. Then $a\prod_{k=1}^{l}z_k=\prod_{i=1}^nx_i\prod_{j=1}^ny_j$, so, since each factor is irreducible, the uniqueness of factorizations forces $a\sim x_i$ for some $1\leq i\leq n$ or $a\sim y_j$ for some $1\leq j\leq m$. In the former case, $c\divides x_i$ and hence $c\divides r$; in the latter, $c\divides y_j$ and hence $c\divides s$.
* Note that $a\not\in R^\times$ is equivalent to $\gen{a}\neq R$, and that $a\divides\!\l(rs\r)$ implies either $a\divides r$ or $a\divides s$ is equivalent to $rs\in\gen{a}$ implies either $r\in\gen{a}$ or $s\in\gen{a}$.
* If $a\in R$ is irreducible, suppose $b\in R$ is such that $\gen{a}\subseteq\gen{b}\subset R$. Then $a\in\gen{b}$, so $a=br$ for some $r\in R$. Thus either $b\in R^\times$ or $r\in R^\times$, but since $\gen{b}\neq R$, we have $r\in R^\times$. Conversely, write $a=rs$ for some $r,s\in R$. Then $a\in\gen{r}$, so $\gen{a}\subseteq\gen{r}$ and hence either $\gen{a}=\gen{r}$ or $\gen{r}=R$. In the latter case, we have $r\in R^\times$. Otherwise, we have $a\sim r$, and since $R$ is an integral domain, we see that $a=ru$ for some $u\in R^\times$. Thus $rs=ru$, so $s=u\in R^\times$.<span style="float:right;">$\blacksquare$</span>
