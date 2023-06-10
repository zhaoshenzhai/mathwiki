<div class="topSpace"></div>

Date Created: 09/06/2023 16:45:24
Tags: #Type/Theorem #Topic/Ring_Theory

Proved by: [[Isomorphism Theorems]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Chinese Remainder Theorem).

Let $\mf{a}_1,\mf{a}_2\ideal R$ be ideals of a ring $R$. If $\mf{a}_1$ and $\mf{a}_2$ are coprime, then $R/\!\l(\mf{a}_1\cap\mf{a}_2\r)\iso R/\mf{a}_1\times R/\mf{a}_2$.

```

<b>Remark.</b> Note that if $R$ is commutative, then $R/\mf{a}_1\mf{a}_2\iso R/\mf{a}_1\times R/\mf{a}_2$. Also, the classical statement is as follows: for all $r_1,r_2\in R$, the system $x\equiv r_i\mod{\mf{a}_i}$ for $i=1,2$ has a unique solution $x\in R$ modulo $\mf{a}_1\cap\mf{a}_2$; this is essentially what the proof establishes.
* This theorem (and the remarks above) can all be inductively generalized to finitely-many pairwise coprime ideals $\mf{a}_1,\dots,\mf{a}_n\ideal R$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> It suffices to show that the map $f:R\to R/\mf{a}_1\times R/\mf{a}_2$ defined by $f\l(r\r)\coloneqq\tpl{r+\mf{a}_1,r+\mf{a}_2}$ is a surjection with kernel $\mf{a}_1\cap\mf{a}_2$. That $\ker f=\mf{a}_1\cap\mf{a}_2$ is clear since $f\l(r\r)=\tpl{\mf{a}_1,\mf{a}_2}$ iff $r\in\mf{a}_1\cap\mf{a}_2$. Now, take $r_i+\mf{a}_i\in R/\mf{a}_i$ for $i=1,2$. Since $\mf{a}_1$ and $\mf{a}_2$ are coprime, there exist $a_i\in\mf{a}_i$ such that $1=a_1+a_2$. Then $a_2+\mf{a}_1=1+\mf{a}_1$ and $a_1+\mf{a}_2=1+\mf{a}_2$, so
$$\begin{equation}
    f\l(r_2a_1+r_1a_2\r)=f\l(r_2\r)f\l(a_1\r)+f\l(r_1\r)f\l(a_2\r)=\tpl{r_2+\mf{a}_1,r_2+\mf{a}_2}\tpl{\mf{a}_1,1+\mf{a}_2}+\tpl{r_1+\mf{a}_1,r_1+\mf{a}_2}\tpl{1+\mf{a}_1,\mf{a}_2}=\tpl{r_1+\mf{a}_1,r_2+\mf{a}_2}.
\end{equation}$$
Thus $f$ is surjective, as desired.<span style="float:right;">$\blacksquare$</span>
