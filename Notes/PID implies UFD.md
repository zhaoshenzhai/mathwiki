---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 13/01/2023 12:18:18
Tags: #Type/Proposition #Topic/Ring_Theory #Courses/MATH457

Proved by: [[Basic properties of divisibility and associates]]
References: [[Basic properties of irreducible and prime elements]]
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $R$ be a Noetherian integral domain such that every irreducible element is prime. Then $R$ is a UFD.

```

<b>Remark.</b> In particular, this shows that every PID is a UFD.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> To prove existence, let $r\in R\comp R^\times$ be non-zero and suppose that it cannot be factored into a product of irreducibles. Then $r$ is itself not irreducible, so $r=r_1s_1$ for some $r_1,s_1\not\in R^\times$. In particular, $r\neq r_1 u$ and $r\neq s_1 u$ for any $u\in R^\times$, so $r\not\sim r_1$ and $r\not\sim s_1$. Thus we have the proper inclusions $\gen{r}\subset\gen{r_1}$ and $\gen{r}\subset\gen{s_1}$. Since $r$ is not a product of irreducibles, at least one of $r_1,s_1$ is not a product of irreducibles. Assume, w.l.o.g., that $r_1$ is not. Then $r_1=r_2s_2$ for some $r_2,s_2\not\in R^\times$, so we may continue this way to obtain a properly ascending chain $\gen{r}\subset\gen{r_1}\subset\gen{r_2}\subset\cdots$, which contradicts the fact that $R$ is Noetherian.

For uniqueness, suppose that $r=a_1\cdots a_n=b_1\cdots b_m$ with each $a_i,b_j$ irreducible. In particular, $a_n$ is prime, and so
$$\begin{equation}
    a_n\divides\!\l(b_1\cdots b_m\r)\ \ \ \ \ \ \ \ \Rightarrow\ \ \ \ \ \ \ \ \ex 1\leq j\leq m:a_n\divides b_j.
\end{equation}$$
After a permutation, we may assume that $a_n\divides b_m$. But $a_n$ and $b_m$ are both irreducible, so $a_n\sim b_m$ and $b_m=a_nu$ for some $u\in R^\times$. Then $a_1\cdots a_{n-1}=\l(ub_1\r)b_2\cdots b_{m-1}$.
* If $n=1$, we have $1=ub_1b_2\cdots b_{m-1}$. Suppose that $m>1$, so we may write $1=\l(ub_1\cdots b_{m-2}\r)b_{m-1}$ and thus $b_{m-1}\in R^\times$. But this contradicts that $b_{m-1}$ is irreducible, so $m=1$.

If $n>1$, we apply induction to obtain $n-1=m-1$ and a permutation $\sigma\in S_{n-1}$ such that $a_i\sim b_{\sigma\l(i\r)}$ for all $1\leq i\leq n-1$.<span style="float:right;">$\blacksquare$</span>
