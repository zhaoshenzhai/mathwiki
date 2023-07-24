<div class="topSpace"></div>

Date Created: 23/07/2023 19:33:10
Tags: #Type/Proposition #Topic/Module_Theory #Topic/Ring_Theory

Proved by: [[Basis Extension Theorem]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition (Characterizations of Fields).

Let $R$ be an integral domain. Then the following are equivalent.
1. $R$ is a field.
2. Every finitely-generated $R$-module is free.
3. Every cyclic $R$-module is torsion-free.

```

<i>Proof.</i> Let $M$ be an $R$-module. That $1\Rightarrow2\Rightarrow3$ is easy, for if $M$ is finitely-generated, we can extend any linearly-independent set to a basis for $M$ and hence $M$ is free. Next, since free modules over an integral domain are torsion-free, we see in particular that cyclic $R$-modules are torsion-free.

Assume now that $M\coloneqq R\,/\!\gen{c}$, for some non-zero $c\in R$, is free. Note that $r\l(1+\gen{c}\r)=r+\gen{c}$, so $\gen{1}=M$. But $c\l(1+\gen{c}\r)=0+\gen{c}$ with $c\neq0$, so $\Tor M=M$. Thus $R\,/\!\gen{c}=M=\l\{0\r\}$ by hypothesis, so $\gen{c}=\gen{1}$ and thus $c$ is a unit.<span style="float:right;">$\blacksquare$</span>
