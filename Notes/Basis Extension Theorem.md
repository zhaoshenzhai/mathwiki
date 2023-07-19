<div class="topSpace"></div>

Date Created: 18/07/2023 18:49:28
Tags: #Type/Theorem #In_Progress

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Basis Extension Theorem).

Let $X\subseteq M$ be a linearly independent subset of an $R$-module $M$ over a commutative ring. Then $X$ extends to a maximally linearly independent subset $B\subseteq M$.
* If $R$ is a field, then $B$ is a basis for $M$. Furthermore, if $L\subseteq M$ is linearly independent, then there is an injection $j:L\into M$ where the set $B\cup L\comp j\l(L\r)$, obtained by exchanging $L$ for $j\l(L\r)$, is a basis for $M$.

```

<b>Remark.</b> In general, $B$ may not be a basis for $M$. Consider $B\coloneqq\l\{2\r\}\subseteq\Z\eqqcolon R$, which is a non-generating maximally linearly independent subset of $R$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Let $\mc{L}$ be the collection of all linearly independent subsets of $M$ containing $X$, which is non-empty since $X\in\mc{L}$. Let $\mc{C}\subseteq\mc{L}$ be a chain. We claim that $\bigcup\mc{C}$ is also linearly independent. Indeed, if $\sum r_xx=0$ is a <i>finite</i> linear combination, then every $x\in B$ for which $r_x\neq0$ belongs to some element in $\mc{C}$ far enough into the chain, for which its linear independence forces $r_x=0$ for all $x\in B$. Thus $\mc{C}$ has an upper bound, so Zorn’s lemma furnishes a maximal element $B\in\mc{L}$.
* Suppose now that $R$ is a field. Take $m\in M\comp B$, so $B\cup\l\{m\r\}$ is linearly dependent. Hence there are constants $c_0,c_i\in R$ such that $c_0m+\sum_{b\in B}c_ib_i=0$ with some $c_i\neq0$. Since $B$ is linearly independent, we have $c_0\neq0$. But $R$ is a field, so we can write $m=-\frac{1}{c_0}\sum_{b\in B}c_ib_i\in\gen{B}$, as desired.

Let $L\subseteq M$ be linearly independent. We exhibit an injection $j:L\into B$ via transfinite induction. Let $\prec$ be a well-ordering on $L$, take $l\in L$, and assume inductively that $j$ is defined on the set $S$ of all elements in $L$ preceding $l$. Then $j:S\into B$ is an injection, so the set $B'\coloneqq B\cup S\comp j\l(S\r)$ obtained from $B$ by replacing $j\l(S\r)$ by $S$ has the same cardinality as $B$. Write $T\coloneqq B\comp j\l(S\r)$ and assume inductively that $B'=S\cup T$ is a basis for $M$. We define $j\l(l\r)\in B$ so that
1. $j\l(l\r)\not\in j\l(S\r)$, which shows that $j:S\cup\l\{l\r\}\into B$ is still an injection, and that
2. the set $B''\coloneqq B'\cup\l\{l\r\}\comp\l\{j\l(l\r)\r\}$ is still basis for $M$, which continues the induction.

Since $B'$ is a basis for $M$, we can write $l=\sum_{s\in S}c_ss+\sum_{t\in T}c_tt$ for some $c_s,c_t\in R$. Then $c_{t_0}\neq0$ for some $t_0\in R$, for otherwise $l\in\gen{S}$, which contradicts the fact that $L$ is linearly independent. Set $j\l(l\r)\coloneqq t_0\in T=B\comp j\l(S\r)$. It remains to show that $B''\coloneqq B'\cup\l\{l\r\}\comp\l\{j\l(l\r)\r\}$ is a basis for $M$. Indeed, $\gen{B''}=M$ since $\gen{B'}=M$ and $j\l(l\r)\in\gen{S\cup T\cup\l\{l\r\}\comp\l\{j\l(l\r)\r\}}=\gen{B''}$. Consider now a linear dependence in $B''$. Since $l\in\gen{S\cup T}$, it reduces to a linear dependence in $S\cup T=B'$. But $B'$ is linearly independent, so the dependence in $B''$ is trivial, as desired.<span style="float:right;">$\blacksquare$</span>
