---
mathLink-blocks:
    pid-implies-ufd: PID $\Rightarrow$ UFD
    noetherian-implies-factorization : Noetherian $\Rightarrow$ factorization
---

<div class="topSpace"></div>

Date Created: 25/08/2023 17:02:33
References: #Ref/Alu09
Tags: #Type/Proposition #Topic/Rings_and_Modules/Ring_Theory

Proved by: <i>Not Applicable</i>
References: [[Basic properties of prime and irreducible elements]]
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition (Characterization of UFDs).

Let $R$ be an integral domain. Then $R$ is a UFD iff $R$ satisfies the a.c.c. for principal ideals and every irreducible element is prime.

```
^noetherian-implies-factorization

<b>Remark.</b> The proof shows that every integral domain $R$ with the a.c.c. for principal ideals is a factorization domain; the additional condition that every irreducible element is prime gives uniqueness. In particular, every Noetherian domain is a factorization domain and every PID is a UFD.<span style="float:right;">$\blacklozenge$</span>
^pid-implies-ufd
---

<i>Proof.</i> The forward direction is easy:
* Suppose that $R$ is a UFD and consider an ascending chain $\gen{r_1}\subset\gen{r_2}\subset\cdots$. Then $r_{i+1}\divides r_i$ for all $i$, so the irreducible factors of $r_i$ contains that of $r_{i+1}$. Thus we obtained a descending chain of finitely-many irreducible factors. This clearly stabilizes, so $r_i$ and $r_{i+1}$ will have the same irreducible factors for large enough $i$ and thus $\gen{r_i}=\gen{r_{i+1}}$ eventually. That every irreducible element is prime in a UFD is proven.

Conversely, suppose that $R$ satisfies the a.c.c. for principal ideals and that every irreducible element is prime. Let $r\in R\comp R^\times$ be non-zero and suppose that it cannot be factored into a product of irreducibles. Then $r$ is reducible, so $r=r_1s_1$ for some non-zero $r_1,s_1\not\in R^\times$. In particular, we have the proper inclusions $\gen{r}\subset\gen{r_1}$ and $\gen{r}\subset\gen{s_1}$. Since $r$ is not a product of irreducibles, at least one of $r_1,s_1$ is not a product of irreducibles. Assume, w.l.o.g., that $r_1$ is not. Then $r_1=r_2s_2$ for some $r_2,s_2\not\in R^\times$, so we may continue this way to obtain a proper ascending chain $\gen{r}\subset\gen{r_1}\subset\gen{r_2}\subset\cdots$, a contradiction.

To show uniqueness, suppose that $r=r_1\cdots r_n=s_1\cdots s_m$ with each $r_i,s_j$ irreducible. Since $r_n$ is prime, $r_n\divides\!\l(s_1\cdots s_m\r)$ implies that $r_n\divides s_j$ for some $1\leq j\leq m$. After a permutation, we may assume that $j=m$. But $r_n$ and $s_m$ are both irreducible, so $s_m=r_nu$ for some $u\in R^\times$ and thus $r_1\cdots r_{n-1}=\l(us_1\r)s_2\cdots s_{m-1}$. Note that $n=1$ implies that $m=1$ too, for otherwise $1=u\l(s_1\cdots s_{m-2}\r)s_{m-1}$ and hence $s_{m-1}$ is a unit. The result follows by induction.<span style="float:right;">$\blacksquare$</span>
