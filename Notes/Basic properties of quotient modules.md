<div class="topSpace"></div>

Date Created: 24/07/2023 15:43:40
Tags: #Type/Proposition #Topic/Module_Theory

Proved by: [[Bezout's Identity]], [[Isomorphism Theorems]]
References: [[Krull's Theorem]], [[Ideal is maximal iff quotient is a field]]
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\mf{a}\coloneqq\gen{a}\nsubgrp R$ be an ideal in a commutative ring $R$. Viewing $\mf{a}$ as a submodule of $R$, we have the following $R$-module homomorphisms.
* Let $M\coloneqq R^n$ be a free module. Then $M/aM=M/\mf{a}M\iso\l(R/\mf{a}\r)^n$.
* Let $M\coloneqq R/\!\gen{c}$ for some non-zero $c\in R$. If $R$ is a PID and $a$ is prime, then $M/aM\iso R/\mf{a}$ if $a\divides c$ and $M/aM\iso\l\{0\r\}$ otherwise.
* If $n\geq m\geq0$, then $R/a^{n-m}R\iso a^mR/a^nR$.

```

<b>Remark.</b> Let $M$ be any $R$-module. Consider a maximal ideal $\mf{m}\nsubgrp R$, which exists by Krull’s Theorem, making $R/\mf{m}$ a field. If $\mf{m}M=0$, then $M$ has a natural $R/\mf{m}$-vector space structure by $\l(r+\mf{m}\r)\cdot m\coloneqq rm$. Indeed, the operation is well-defined since for all $r_1+\mf{m}=r_2+\mf{m}$, we have $r_1-r_2\in\mf{m}$ and hence
$$\begin{equation}
    r_1m-r_2m=\l(r_1-r_2\r)m\in\mf{m}m=0.
\end{equation}$$
We apply this result to the module $M\coloneqq R^n/\mf{m}R^n\iso\l(R/\mf{m}\r)^n$. That $\mf{m}M=0$ follows since $r\l(\tpl{r_i}+\mf{m}R^n\r)=r\tpl{r_i}+\mf{m}R^n=\mf{m}R^n$ for all $r\in\mf{m}$ and $\tpl{r_i}\in R^n$, so this isomorphism is in fact a isomorphism of $R/\mf{m}$-vector spaces.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> 
* Consider the surjective $R$-module homomorphism $\phi:R^n\to\l(R/\mf{a}\r)^n$ mapping $\tpl{r_i}\mapsto\tpl{r_i+\mf{a}}$, where $\tpl{r_i}\in\ker\phi$ iff $r_i\in\mf{a}=\gen{a}$ for all $1\leq i\leq n$. That is, $\ker\phi$ consists of all tuples whose components are divisible by $a$, so $\ker\phi=aR^n$. Thus $R^n/aR^n\iso\l(R/\mf{a}\r)^n$, as desired. Since $\mf{a}=\gen{a}$, we have $aR^n=\mf{a}R^n$ too.
* First, note that any $ar+\gen{c}\in aM=a\l(R/\!\gen{c}\r)$ can be written as $ar+sc+\gen{c}$ for any $s\in R$, which is an element of $\l(\gen{a}+\gen{c}\r)/\!\gen{c}$. Since every element in $\l(\gen{a}+\gen{c}\r)/\!\gen{c}$ is of this form, we see that $aM=\l(\gen{a}+\gen{c}\r)/\!\gen{c}$. We now claim that
$$\begin{equation}
    \gen{a}+\gen{c}=
    \begin{dcases}
        \mf{a} & \textrm{if }a\divides c \\
        R & \textrm{else.}
    \end{dcases}
\end{equation}$$
Indeed, if $a\divides c$, then $\gen{c}\subseteq\gen{a}$ and hence $\gen{a}+\gen{c}=\mf{a}$. Otherwise, since $R$ is a PID, we see that $\gen{d}=\gen{a}+\gen{c}$ where $d=\gcd\l(a,c\r)$. But $a$ is prime and $a\ndivides c$, so $d=1$ and hence $\gen{a}+\gen{c}=\gen{d}=R$. Combining the above gives us
$$\begin{equation}
    M/aM=\frac{R}{\gen{c}}\bigg{/}\frac{\gen{a}+\gen{c}}{\gen{c}}\iso\frac{R}{\gen{a}+\gen{c}}=
    \begin{dcases}
        R/\mf{a} & \textrm{if }a\divides c \\
        \l\{0\r\} & \textrm{else.}
    \end{dcases}
\end{equation}$$
* Consider the surjective $R$-module homomorphism $\phi:R\to a^mR/a^nR$ mapping $r\mapsto a^mr$, which has kernel $\ker\phi=a^{n-m}R$.<span style="float:right;">$\blacksquare$</span>
