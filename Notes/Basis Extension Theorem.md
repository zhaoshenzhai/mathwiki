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
* If $R$ is a field, then $B$ is a basis for $M$. Furthermore, $\l|S\r|\leq\l|B\r|$ for any linearly independent subset $S\subseteq M$.

```

<b>Remark.</b> In general, $B$ may not be a basis for $M$. Consider $B\coloneqq\l\{2\r\}\subseteq\Z\eqqcolon R$, which is a non-generating maximally linearly independent subset of $R$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Let $\mc{L}$ be the collection of all linearly independent subsets of $M$ containing $X$, which is non-empty since $X\in\mc{L}$. Let $\mc{C}\subseteq\mc{L}$ be a chain. We claim that $\bigcup\mc{C}$ is also linearly independent. Indeed, if $\sum r_xx=0$ is a <i>finite</i> linear combination, then every $x\in B$ for which $r_x\neq0$ belongs to some element in $\mc{C}$ far enough into the chain, for which its linear independence forces $r_x=0$ for all $x\in B$. Thus $\mc{C}$ has an upper bound, so Zorn’s lemma furnishes a maximal element $B\in\mc{L}$.
* Suppose now that $R$ is a field. Take $m\in M\comp B$, so $B\cup\l\{m\r\}$ is linearly dependent. Hence there are constants $c_0,c_i\in R$ such that $c_0m+\sum_{b\in B}c_ib_i=0$ with some $c_i\neq0$. Since $B$ is linearly independent, we have $c_0\neq0$. But $R$ is a field, so we can write $m=-\frac{1}{c_0}\sum_{b\in B}c_ib_i\in\gen{B}$, as desired.

We now show that $\l|S\r|\leq\l|B\r|$ for any linearly independent subset $S\subseteq M$ by exhibiting an injection $j:S\into B$ via transfinite induction. Let $\prec$ be a well-ordering on $S$, take $s\in S$, and assume inductively that $j$ is defined on the set $S_\prec$ of all elements in $S$ preceding $s$. Then $j:S_\prec\into B$ is an injection, so the set $B'$ obtained from $B$ by replacing $j\l(S_\prec\r)$ by $S_\prec$ has the same cardinality as $B$. Assume inductively that $B'$ is still a maximally linearly independent subset of $M$. We define $j\l(s\r)\in B$ so that
1. $j\l(s\r)\not\in j\l(S_\prec\r)$, which shows that $j:S_\prec\cup\l\{s\r\}\into B$ is still an injection, and that
2. the set $B''\coloneqq B'\cup\l\{s\r\}\comp\l\{j\l(s\r)\r\}$ is still a maximally linearly independent subset of $M$, which continues the induction.

By maximality of $B'$, the set $B'\cup\l\{s\r\}$ is linearly dependent and hence $c_0s+\sum_{b\in B'}c_bb=0$ with some $c_i\neq0$. Since $B'$ is linearly independent, necessarily $c_0\neq0$.
